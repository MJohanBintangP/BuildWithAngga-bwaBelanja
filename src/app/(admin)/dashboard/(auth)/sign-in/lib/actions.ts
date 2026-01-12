"use server";

import { ActionResult } from "@/types";
import { redirect } from "next/navigation";

export async function SignIn(
  _: unknown,
  formData: FormData
): Promise<ActionResult> {
  console.log(formData.get("email"));
  return redirect("/dashboard/sign-in");
}
