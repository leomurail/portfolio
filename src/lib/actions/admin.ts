"use server";

import { revalidatePath } from "next/cache";
import { requireAuth } from "./auth";
import { z } from "zod";
import { CategoryRepository } from "@/repositories/category.repository";
import { TagRepository } from "@/repositories/tag.repository";
import { ThumbnailRepository } from "@/repositories/thumbnail.repository";
import { ProjectRepository } from "@/repositories/project.repository";

// SCHEMAS
const CategorySchema = z.object({
  name: z.string().min(1),
  slug: z.string().min(1),
  color: z.string().min(1),
});

const TagSchema = z.object({
  name: z.string().min(1),
  slug: z.string().min(1),
});

const ThumbnailSchema = z.object({
  path: z.string().min(1),
  alt: z.string().min(1),
  width: z.coerce.number().min(1),
  height: z.coerce.number().min(1),
});

const ProjectSchema = z.object({
  name: z.string().min(1),
  slug: z.string().min(1),
  url: z.string(),
  desc: z.string(),
  category_id: z.coerce.number().min(1),
  thumbnail_id: z.coerce.number().min(1),
});

// ACTIONS
export const CategoryActions = {
  async getAll() {
    return await CategoryRepository.getAll();
  },

  async getById(id: number) {
    return await CategoryRepository.getById(id);
  },

  async delete(id: number) {
    try {
      await requireAuth();
      await CategoryRepository.delete(id);
      revalidatePath("/admin/categories");
      return { success: true };
    } catch (error) {
      return {
        success: false,
        error: "Erreur, la catégorie est peut-être liée à un projet.",
      };
    }
  },

  async save(formData: FormData, id?: number) {
    try {
      await requireAuth();
      const parsed = CategorySchema.parse({
        name: formData.get("name"),
        slug: formData.get("slug"),
        color: formData.get("color"),
      });

      if (id) {
        await CategoryRepository.update(id, parsed);
      } else {
        await CategoryRepository.create(parsed);
      }
      revalidatePath("/admin/categories");
      return { success: true };
    } catch (error) {
      return { success: false, error: "Erreur lors de la sauvegarde." };
    }
  },
};

export const TagActions = {
  async getAll() {
    return await TagRepository.getAll();
  },

  async getById(id: number) {
    return await TagRepository.getById(id);
  },

  async delete(id: number) {
    try {
      await requireAuth();
      await TagRepository.delete(id);
      revalidatePath("/admin/tags");
      return { success: true };
    } catch (error) {
      return {
        success: false,
        error: "Erreur, le tag est peut-être lié à un projet.",
      };
    }
  },

  async save(formData: FormData, id?: number) {
    try {
      await requireAuth();
      const parsed = TagSchema.parse({
        name: formData.get("name"),
        slug: formData.get("slug"),
      });

      if (id) {
        await TagRepository.update(id, parsed);
      } else {
        await TagRepository.create(parsed);
      }
      revalidatePath("/admin/tags");
      return { success: true };
    } catch (error) {
      return { success: false, error: "Erreur lors de la sauvegarde." };
    }
  },
};

export const ThumbnailActions = {
  async getAll() {
    return await ThumbnailRepository.getAll();
  },

  async getById(id: number) {
    return await ThumbnailRepository.getById(id);
  },

  async delete(id: number) {
    try {
      await requireAuth();
      await ThumbnailRepository.delete(id);
      revalidatePath("/admin/thumbnails");
      return { success: true };
    } catch (error) {
      return {
        success: false,
        error: "Erreur, la miniature est liée à un projet.",
      };
    }
  },

  async save(formData: FormData, id?: number) {
    try {
      await requireAuth();
      const parsed = ThumbnailSchema.parse({
        path: formData.get("path"),
        alt: formData.get("alt"),
        width: formData.get("width"),
        height: formData.get("height"),
      });

      if (id) {
        await ThumbnailRepository.update(id, parsed);
      } else {
        await ThumbnailRepository.create(parsed);
      }
      revalidatePath("/admin/thumbnails");
      return { success: true };
    } catch (error) {
      return { success: false, error: "Erreur lors de la sauvegarde." };
    }
  },
};

export const ProjectActions = {
  async getAll() {
    return await ProjectRepository.getAll();
  },

  async getById(id: number) {
    return await ProjectRepository.getById(id);
  },

  async save(formData: FormData, id?: number) {
    try {
      await requireAuth();
      const parsed = ProjectSchema.parse({
        name: formData.get("name"),
        slug: formData.get("slug"),
        url: formData.get("url"),
        desc: formData.get("desc"),
        category_id: formData.get("category_id"),
        thumbnail_id: formData.get("thumbnail_id"),
      });

      const tags = formData.getAll("tags") as string[];
      const tagIds = tags.map((t) => parseInt(t)).filter((t) => !isNaN(t));

      if (id) {
        await ProjectRepository.update(id, parsed, tagIds);
      } else {
        await ProjectRepository.create(parsed, tagIds);
      }

      revalidatePath("/admin/projects");
      return { success: true };
    } catch (error) {
      console.error(error);
      return { success: false, error: "Erreur lors de la sauvegarde." };
    }
  },

  async delete(id: number) {
    try {
      await requireAuth();
      await ProjectRepository.delete(id);
      revalidatePath("/admin/projects");
      return { success: true };
    } catch (error) {
      console.error(error);
      return { success: false, error: "Erreur lors de la suppression." };
    }
  },
};
