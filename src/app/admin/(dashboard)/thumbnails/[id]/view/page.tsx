import { ThumbnailActions } from "@/lib/actions/admin"
import { Button } from "@/ui/components/ui/button"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/ui/components/ui/card"
import Image from "next/image"

export default async function ViewThumbnailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params
  const id = parseInt(resolvedParams.id)
  if (isNaN(id)) return notFound()

  const thumbnail = await ThumbnailActions.getById(id)
  if (!thumbnail) return notFound()

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight text-foreground">Détails de la miniature</h1>
        <div className="flex gap-2">
          <Button variant="outline" asChild>
            <Link href="/admin/thumbnails">Retour</Link>
          </Button>
          <Button asChild>
            <Link href={`/admin/thumbnails/${id}`}>Modifier</Link>
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Aperçu</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="relative aspect-video w-full max-w-md overflow-hidden rounded-lg border">
            <Image 
              src={thumbnail.path} 
              alt={thumbnail.alt} 
              fill 
              className="object-cover"
            />
          </div>
          <div className="grid grid-cols-2 gap-4 pt-4">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Chemin</p>
              <p className="text-foreground">{thumbnail.path}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Alt</p>
              <p className="text-foreground">{thumbnail.alt}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Dimensions</p>
              <p className="text-foreground">{thumbnail.width} x {thumbnail.height} px</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
