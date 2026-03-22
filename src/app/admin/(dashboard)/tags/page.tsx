import { TagActions } from "@/lib/actions/admin"
import { Button } from "@/ui/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/ui/components/ui/table"
import { DeleteTagButton } from "./delete-button"
import Link from "next/link"

export const dynamic = "force-dynamic"

export default async function AdminTagsPage() {
  const tags = await TagActions.getAll()

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight text-foreground">Tags</h1>
        <Button asChild>
          <Link href="/admin/tags/new">Ajouter un tag</Link>
        </Button>
      </div>

      <div className="rounded-md border bg-card">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nom</TableHead>
              <TableHead>Slug</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tags.length === 0 && (
              <TableRow>
                <TableCell colSpan={3} className="text-center h-24 text-muted-foreground">
                  Aucun tag trouvé.
                </TableCell>
              </TableRow>
            )}
            {tags.map((tag) => (
              <TableRow key={tag.id}>
                <TableCell className="font-medium text-foreground">{tag.name}</TableCell>
                <TableCell className="text-muted-foreground">{tag.slug}</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button variant="outline" size="sm" asChild>
                      <Link href={`/admin/tags/${tag.id}/view`}>Voir</Link>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <Link href={`/admin/tags/${tag.id}`}>Modifier</Link>
                    </Button>
                    <DeleteTagButton id={tag.id} />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
