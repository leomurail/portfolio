import { TagActions } from "@/lib/actions/admin";
import { Button } from "@/ui/components/ui/button";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/ui/components/ui/card";

export default async function ViewTagPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  const id = parseInt(resolvedParams.id);
  if (isNaN(id)) return notFound();

  const tag = await TagActions.getById(id);
  if (!tag) return notFound();

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight text-foreground">
          Détails du tag
        </h1>
        <div className="flex gap-2">
          <Button variant="outline" asChild>
            <Link href="/admin/tags">Retour</Link>
          </Button>
          <Button asChild>
            <Link href={`/admin/tags/${id}`}>Modifier</Link>
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>{tag.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <div>
            <p className="text-sm font-medium text-muted-foreground">Slug</p>
            <p className="text-foreground">{tag.slug}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
