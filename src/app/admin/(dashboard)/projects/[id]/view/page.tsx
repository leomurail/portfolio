import { getProject } from "@/lib/actions/admin"
import { Button } from "@/ui/components/ui/button"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/ui/components/ui/card"

export default async function ViewProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params
  const id = parseInt(resolvedParams.id)
  if (isNaN(id)) return notFound()

  const project = await getProject(id)
  if (!project) return notFound()

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight text-foreground">Détails du projet</h1>
        <div className="flex gap-2">
          <Button variant="outline" asChild>
            <Link href="/admin/projects">Retour</Link>
          </Button>
          <Button asChild>
            <Link href={`/admin/projects/${id}`}>Modifier</Link>
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>{project.name}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Slug</p>
              <p className="text-foreground">{project.slug}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">URL</p>
              <p className="text-foreground">{project.url || "N/A"}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Catégorie</p>
              <p className="text-foreground">ID: {project.category_id}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Miniature</p>
              <p className="text-foreground">ID: {project.thumbnail_id}</p>
            </div>
          </div>
          <div>
            <p className="text-sm font-medium text-muted-foreground">Description</p>
            <p className="text-foreground whitespace-pre-wrap">{project.desc}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
