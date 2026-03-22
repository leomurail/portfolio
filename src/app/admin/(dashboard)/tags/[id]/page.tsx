import { TagActions } from "@/lib/actions/admin"
import { TagForm } from "../tag-form"
import { notFound } from "next/navigation"

export default async function EditTagPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params
  const id = parseInt(resolvedParams.id)
  if (isNaN(id)) return notFound()

  const tag = await TagActions.getById(id)
  if (!tag) return notFound()

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-bold tracking-tight text-foreground">Modifier le tag</h1>
      <TagForm tag={tag} />
    </div>
  )
}
