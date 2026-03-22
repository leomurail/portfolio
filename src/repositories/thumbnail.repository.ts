import { prisma } from "@/lib/prisma"

export type ThumbnailCreateInput = {
  path: string
  alt: string
  width: number
  height: number
}

export class ThumbnailRepository {
  static async getAll() {
    return await prisma.thumbnails.findMany()
  }

  static async getById(id: number) {
    return await prisma.thumbnails.findUnique({ where: { id } })
  }

  static async delete(id: number) {
    return await prisma.thumbnails.delete({ where: { id } })
  }

  static async create(data: ThumbnailCreateInput) {
    return await prisma.thumbnails.create({ data })
  }

  static async update(id: number, data: ThumbnailCreateInput) {
    return await prisma.thumbnails.update({
      where: { id },
      data
    })
  }
}
