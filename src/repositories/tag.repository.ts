import { prisma } from "@/lib/prisma"

export type TagCreateInput = {
  name: string
  slug: string
}

export class TagRepository {
  static async getAll() {
    return await prisma.tags.findMany()
  }

  static async getById(id: number) {
    return await prisma.tags.findUnique({ where: { id } })
  }

  static async delete(id: number) {
    return await prisma.tags.delete({ where: { id } })
  }

  static async create(data: TagCreateInput) {
    return await prisma.tags.create({ data })
  }

  static async update(id: number, data: TagCreateInput) {
    return await prisma.tags.update({
      where: { id },
      data
    })
  }
}
