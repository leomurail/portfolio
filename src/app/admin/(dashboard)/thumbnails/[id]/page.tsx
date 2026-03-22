import { getThumbnail } from "@/lib/actions/admin"
import { ThumbnailForm } from "../thumbnail-form"
import { notFound } from "next/navigation"

export default async function EditThumbnailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params
  const id = parseInt(resolvedParams.id)
  if (isNaN(id)) return notFound()

  const thumbnail = await getThumbnail(id)
  if (!thumbnail) return notFound()

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-bold tracking-tight text-foreground">Modifier la miniature</h1>
      <ThumbnailForm thumbnail={thumbnail} />
    </div>
  )
}
