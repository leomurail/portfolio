import { CategoryActions } from "@/lib/actions/admin";
import { CategoryForm } from "../category-form";
import { notFound } from "next/navigation";

export default async function EditCategoryPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  const id = parseInt(resolvedParams.id);
  if (isNaN(id)) return notFound();

  const category = await CategoryActions.getById(id);
  if (!category) return notFound();

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-bold tracking-tight text-foreground">
        Modifier la catégorie
      </h1>
      <CategoryForm category={category} />
    </div>
  );
}
