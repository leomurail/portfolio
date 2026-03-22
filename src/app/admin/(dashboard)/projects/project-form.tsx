"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/ui/components/ui/button"
import { Input } from "@/ui/components/ui/input"
import { Label } from "@/ui/components/ui/label"
import { ProjectActions } from "@/lib/actions/admin"

type Props = {
  project?: any
  categories: any[]
  thumbnails: any[]
  tags: any[]
}

export function ProjectForm({ project, categories, thumbnails, tags }: Props) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const activeTagIds = project?.tags_join?.map((t: any) => t.tag_id) || []

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setError("")

    const formData = new FormData(e.currentTarget)
    const result = await ProjectActions.save(formData, project?.id)

    if (result.success) {
      router.push("/admin/projects")
      router.refresh()
    } else {
      setError(result.error || "Une erreur est survenue")
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl bg-card p-6 rounded-lg border">
      <div className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="name">Nom du projet</Label>
          <Input id="name" name="name" defaultValue={project?.name} required />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="slug">Slug</Label>
          <Input id="slug" name="slug" defaultValue={project?.slug} required />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="url">URL du projet</Label>
          <Input id="url" name="url" defaultValue={project?.url} required />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="desc">Description</Label>
          <textarea 
            id="desc" 
            name="desc" 
            className="flex min-h-[120px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
            defaultValue={project?.desc} 
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="grid gap-2">
            <Label htmlFor="category_id">Catégorie</Label>
            <select 
              id="category_id" 
              name="category_id" 
              defaultValue={project?.category_id} 
              required
              className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              <option value="" disabled className="text-foreground bg-background">Sélectionner une catégorie</option>
              {categories.map(c => (
                <option key={c.id} value={c.id} className="text-foreground bg-background">{c.name}</option>
              ))}
            </select>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="thumbnail_id">Miniature</Label>
            <select 
              id="thumbnail_id" 
              name="thumbnail_id" 
              defaultValue={project?.thumbnail_id} 
              required
              className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              <option value="" disabled className="text-foreground bg-background">Sélectionner une miniature</option>
              {thumbnails.map(t => (
                <option key={t.id} value={t.id} className="text-foreground bg-background">{t.path}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid gap-2">
          <Label>Tags</Label>
          <div className="flex flex-wrap gap-4 border p-4 rounded-md">
            {tags.map(t => (
              <label key={t.id} className="flex items-center gap-2 cursor-pointer text-sm">
                <input 
                  type="checkbox" 
                  name="tags" 
                  value={t.id} 
                  defaultChecked={activeTagIds.includes(t.id)} 
                  className="rounded border-input text-primary focus:ring-ring"
                />
                {t.name}
              </label>
            ))}
          </div>
        </div>
      </div>

      {error && <p className="text-sm text-red-500">{error}</p>}

      <div className="flex justify-end gap-4">
        <Button type="button" variant="outline" onClick={() => router.push('/admin/projects')}>
          Annuler
        </Button>
        <Button type="submit" disabled={loading}>
          {loading ? "Enregistrement..." : "Sauvegarder"}
        </Button>
      </div>
    </form>
  )
}
