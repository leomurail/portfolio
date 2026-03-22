import { getProject, getCategories, getTags, getThumbnails } from "@/lib/actions/admin"
import { ProjectForm } from "../project-form"
import { notFound } from "next/navigation"

export default async function EditProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params
  const id = parseInt(resolvedParams.id)
  if (isNaN(id)) return notFound()

  const project = await getProject(id)
  if (!project) return notFound()

  const categories = await getCategories()
  const thumbnails = await getThumbnails()
  const tags = await getTags()

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-bold tracking-tight text-foreground">Modifier le projet</h1>
      <ProjectForm 
        project={project}
        categories={categories} 
        thumbnails={thumbnails} 
        tags={tags} 
      />
    </div>
  )
}
