import { ThumbnailActions } from "@/lib/actions/admin";
import { Button } from "@/ui/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/ui/components/ui/table";
import { DeleteThumbnailButton } from "./delete-button";
import Link from "next/link";
import Image from "next/image";

export const dynamic = "force-dynamic";

export default async function AdminThumbnailsPage() {
  const thumbnails = await ThumbnailActions.getAll();

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight text-foreground">
          Miniatures
        </h1>
        <Button asChild>
          <Link href="/admin/thumbnails/new">Ajouter une miniature</Link>
        </Button>
      </div>

      <div className="rounded-md border bg-card">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Aperçu</TableHead>
              <TableHead>Alt</TableHead>
              <TableHead>Chemin</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {thumbnails.length === 0 && (
              <TableRow>
                <TableCell
                  colSpan={4}
                  className="text-center h-24 text-muted-foreground"
                >
                  Aucune miniature trouvée.
                </TableCell>
              </TableRow>
            )}
            {thumbnails.map((thumb) => (
              <TableRow key={thumb.id}>
                <TableCell>
                  <div className="relative w-16 h-10 rounded overflow-hidden border">
                    <Image
                      src={thumb.path}
                      alt={thumb.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                </TableCell>
                <TableCell className="font-medium text-foreground">
                  {thumb.alt}
                </TableCell>
                <TableCell className="text-muted-foreground text-xs truncate max-w-[200px]">
                  {thumb.path}
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button variant="outline" size="sm" asChild>
                      <Link href={`/admin/thumbnails/${thumb.id}/view`}>
                        Voir
                      </Link>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <Link href={`/admin/thumbnails/${thumb.id}`}>
                        Modifier
                      </Link>
                    </Button>
                    <DeleteThumbnailButton id={thumb.id} />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
