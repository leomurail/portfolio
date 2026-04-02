import { prisma } from "@/lib/prisma";

export type CategoryCreateInput = {
  name: string;
  slug: string;
  color: string;
};

export class CategoryRepository {
  static async getAll() {
    return await prisma.categories.findMany();
  }

  static async getById(id: number) {
    return await prisma.categories.findUnique({ where: { id } });
  }

  static async delete(id: number) {
    return await prisma.categories.delete({ where: { id } });
  }

  static async create(data: CategoryCreateInput) {
    return await prisma.categories.create({
      data,
    });
  }

  static async update(id: number, data: CategoryCreateInput) {
    return await prisma.categories.update({
      where: { id },
      data,
    });
  }
}
