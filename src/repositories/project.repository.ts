import { prisma } from "@/lib/prisma"

export type ProjectCreateInput = {
  name: string
  slug: string
  url: string
  desc: string
  category_id: number
  thumbnail_id: number
}

export class ProjectRepository {
  static async getAll() {
    return await prisma.projects.findMany({
      include: {
        category: true,
        thumbnail: true,
        tags_join: {
          include: {
            tags: true
          }
        }
      }
    })
  }

  static async getById(id: number) {
    return await prisma.projects.findUnique({
      where: { id },
      include: {
        tags_join: true
      }
    })
  }

  static async create(data: ProjectCreateInput, tagIds: number[]) {
    return await prisma.$transaction(async (tx) => {
      const newProject = await tx.projects.create({
        data
      })
      if (tagIds.length > 0) {
        await tx.tagsJoin.createMany({
          data: tagIds.map(tag_id => ({ project_id: newProject.id, tag_id }))
        })
      }
      return newProject
    })
  }

  static async update(id: number, data: ProjectCreateInput, tagIds: number[]) {
    return await prisma.$transaction(async (tx) => {
      await tx.projects.update({
        where: { id },
        data
      })
      await tx.tagsJoin.deleteMany({ where: { project_id: id } })
      if (tagIds.length > 0) {
        await tx.tagsJoin.createMany({
          data: tagIds.map(tag_id => ({ project_id: id, tag_id }))
        })
      }
    })
  }

  static async delete(id: number) {
    return await prisma.$transaction([
      prisma.tagsJoin.deleteMany({
        where: { project_id: id }
      }),
      prisma.projects.delete({
        where: { id }
      })
    ])
  }
}
