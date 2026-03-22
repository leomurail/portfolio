import { CategoryActions } from "@/lib/actions/admin"
import { Button } from "@/ui/components/ui/button"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/ui/components/ui/card"

export default async function ViewCategoryPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params
  const id = parseInt(resolvedParams.id)
  if (isNaN(id)) return notFound()

  const category = await CategoryActions.getById(id)
  if (!category) return notFound()

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight text-foreground">Détails de la catégorie</h1>
        <div className="flex gap-2">
          <Button variant="outline" asChild>
            <Link href="/admin/categories">Retour</Link>
          </Button>
          <Button asChild>
            <Link href={`/admin/categories/${id}`}>Modifier</Link>
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>{category.name}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Slug</p>
              <p className="text-foreground">{category.slug}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Couleur</p>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full border" style={{ backgroundColor: category.color }}></div>
                <p className="text-foreground">{category.color}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
