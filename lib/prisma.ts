import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error("DATABASE_URL is not set");
}

const globalForPrisma = globalThis as unknown as {
  prisma?: PrismaClient;
  prismaPg?: PrismaPg;
  pool?: Pool;
};

const pool = globalForPrisma.pool ?? new Pool({ connectionString });
const adapter = globalForPrisma.prismaPg ?? new PrismaPg(pool);

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.pool = pool;
  globalForPrisma.prismaPg = adapter;
}

const prisma = globalForPrisma.prisma ?? new PrismaClient({ adapter });

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}

export default prisma;
