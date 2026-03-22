import { ThumbnailForm } from "../thumbnail-form"

export default function NewThumbnailPage() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-bold tracking-tight text-foreground">Nouvelle miniature</h1>
      <ThumbnailForm />
    </div>
  )
}
