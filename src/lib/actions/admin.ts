"use server"

import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache"

// CATEGORIES
export async function getCategories() {
  return await prisma.categories.findMany()
}

export async function getCategory(id: number) {
  return await prisma.categories.findUnique({ where: { id } })
}

export async function deleteCategory(id: number) {
  try {
    await prisma.categories.delete({ where: { id } })
    revalidatePath("/admin/categories")
    return { success: true }
  } catch (error) {
    return { success: false, error: "Erreur, la catégorie est peut-être liée à un projet." }
  }
}

export async function saveCategory(formData: FormData, id?: number) {
  try {
    const name = formData.get("name") as string
    const slug = formData.get("slug") as string
    const color = formData.get("color") as string

    if (id) {
      await prisma.categories.update({
        where: { id },
        data: { name, slug, color }
      })
    } else {
      await prisma.categories.create({
        data: { name, slug, color }
      })
    }
    revalidatePath("/admin/categories")
    return { success: true }
  } catch (error) {
    return { success: false, error: "Erreur lors de la sauvegarde." }
  }
}

// TAGS
export async function getTags() {
  return await prisma.tags.findMany()
}

export async function getTag(id: number) {
  return await prisma.tags.findUnique({ where: { id } })
}

export async function deleteTag(id: number) {
  try {
    await prisma.tags.delete({ where: { id } })
    revalidatePath("/admin/tags")
    return { success: true }
  } catch (error) {
    return { success: false, error: "Erreur, le tag est peut-être lié à un projet." }
  }
}

export async function saveTag(formData: FormData, id?: number) {
  try {
    const name = formData.get("name") as string
    const slug = formData.get("slug") as string

    if (id) {
      await prisma.tags.update({
        where: { id },
        data: { name, slug }
      })
    } else {
      await prisma.tags.create({ data: { name, slug } })
    }
    revalidatePath("/admin/tags")
    return { success: true }
  } catch (error) {
    return { success: false, error: "Erreur lors de la sauvegarde." }
  }
}

// THUMBNAILS
export async function getThumbnails() {
  return await prisma.thumbnails.findMany()
}

export async function getThumbnail(id: number) {
  return await prisma.thumbnails.findUnique({ where: { id } })
}

export async function deleteThumbnail(id: number) {
  try {
    await prisma.thumbnails.delete({ where: { id } })
    revalidatePath("/admin/thumbnails")
    return { success: true }
  } catch (error) {
    return { success: false, error: "Erreur, la miniature est liée à un projet." }
  }
}

export async function saveThumbnail(formData: FormData, id?: number) {
  try {
    const path = formData.get("path") as string
    const alt = formData.get("alt") as string
    const width = parseInt(formData.get("width") as string)
    const height = parseInt(formData.get("height") as string)

    const data = { path, alt, width, height }

    if (id) {
      await prisma.thumbnails.update({
        where: { id },
        data
      })
    } else {
      await prisma.thumbnails.create({ data })
    }
    revalidatePath("/admin/thumbnails")
    return { success: true }
  } catch (error) {
    return { success: false, error: "Erreur lors de la sauvegarde." }
  }
}

// PROJECTS
export async function getProjects() {
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

export async function getProject(id: number) {
  return await prisma.projects.findUnique({
    where: { id },
    include: {
      tags_join: true
    }
  })
}

export async function saveProject(formData: FormData, id?: number) {
  try {
    const name = formData.get("name") as string
    const slug = formData.get("slug") as string
    const url = formData.get("url") as string
    const desc = formData.get("desc") as string
    const category_id = parseInt(formData.get("category_id") as string)
    const thumbnail_id = parseInt(formData.get("thumbnail_id") as string)
    
    // Multiple tags
    const tags = formData.getAll("tags") as string[]
    const tagIds = tags.map(t => parseInt(t))

    const data = {
      name,
      slug,
      url,
      desc,
      category_id,
      thumbnail_id,
    }

    if (id) {
      // Update
      await prisma.projects.update({
        where: { id },
        data
      })
      // Update tags: delete old ones and insert new ones
      await prisma.tagsJoin.deleteMany({ where: { project_id: id } })
      if (tagIds.length > 0) {
        await prisma.tagsJoin.createMany({
          data: tagIds.map(tag_id => ({ project_id: id, tag_id }))
        })
      }
    } else {
      // Create
      const newProject = await prisma.projects.create({
        data
      })
      if (tagIds.length > 0) {
        await prisma.tagsJoin.createMany({
          data: tagIds.map(tag_id => ({ project_id: newProject.id, tag_id }))
        })
      }
    }

    revalidatePath("/admin/projects")
    return { success: true }
  } catch (error) {
    console.error(error)
    return { success: false, error: "Erreur lors de la sauvegarde." }
  }
}

// ACTION WRAPPER (for error handling)
export async function deleteProject(id: number) {
  try {
    // Need to delete related TagsJoin first
    await prisma.tagsJoin.deleteMany({
      where: { project_id: id }
    })
    
    await prisma.projects.delete({
      where: { id }
    })
    
    revalidatePath("/admin/projects")
    return { success: true }
  } catch (error) {
    console.error(error)
    return { success: false, error: "Erreur lors de la suppression." }
  }
}
