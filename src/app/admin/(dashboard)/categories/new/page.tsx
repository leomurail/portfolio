import { CategoryForm } from "../category-form";

export default function NewCategoryPage() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-bold tracking-tight text-foreground">
        Nouvelle catégorie
      </h1>
      <CategoryForm />
    </div>
  );
}
