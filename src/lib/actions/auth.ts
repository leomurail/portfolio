"use server"

import { cookies } from "next/headers"

export async function login(formData: FormData) {
  const password = formData.get("password") as string
  const validPassword = process.env.ADMIN_PASSWORD || "admin"

  if (password === validPassword) {
    const cookieStore = await cookies()
    cookieStore.set("admin_token", "authenticated", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 7, // 1 week
      path: "/admin",
    })
    return { success: true }
  }

  return { success: false, error: "Mot de passe incorrect" }
}

export async function logout() {
  const cookieStore = await cookies()
  cookieStore.delete("admin_token")
}
