import { TagForm } from "../tag-form";

export default function NewTagPage() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-bold tracking-tight text-foreground">
        Nouveau tag
      </h1>
      <TagForm />
    </div>
  );
}
