import {
  CategoryActions,
  TagActions,
  ThumbnailActions,
} from "@/lib/actions/admin";
import { ProjectForm } from "../project-form";

export default async function NewProjectPage() {
  const categories = await CategoryActions.getAll();
  const thumbnails = await ThumbnailActions.getAll();
  const tags = await TagActions.getAll();

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-bold tracking-tight text-foreground">
        Ajouter un projet
      </h1>
      <ProjectForm
        categories={categories}
        thumbnails={thumbnails}
        tags={tags}
      />
    </div>
  );
}
