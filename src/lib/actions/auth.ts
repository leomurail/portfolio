"use server"

import { cookies } from "next/headers"
import { SignJWT, jwtVerify } from "jose"

const secretKey = process.env.JWT_SECRET || "default_secret_for_local_dev_only_change_in_prod"
const encodedKey = new TextEncoder().encode(secretKey)

export async function createSession(userId: string) {
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
  const session = await new SignJWT({ userId, role: "admin" })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(encodedKey)

  const cookieStore = await cookies()
  cookieStore.set("admin_token", session, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    expires: expiresAt,
    sameSite: "lax",
    path: "/admin",
  })
}

export async function requireAuth() {
  const cookieStore = await cookies()
  const session = cookieStore.get("admin_token")?.value

  if (!session) {
    throw new Error("Unauthorized")
  }

  try {
    const { payload } = await jwtVerify(session, encodedKey, {
      algorithms: ["HS256"],
    })
    return payload
  } catch (error) {
    throw new Error("Unauthorized")
  }
}

export async function login(formData: FormData) {
  const password = formData.get("password") as string
  const validPassword = process.env.ADMIN_PASSWORD || "admin"

  if (password === validPassword) {
    await createSession("admin_user")
    return { success: true }
  }

  return { success: false, error: "Mot de passe incorrect" }
}

export async function logout() {
  const cookieStore = await cookies()
  cookieStore.delete("admin_token")
}
