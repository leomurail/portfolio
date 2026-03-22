"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { CategoryActions } from "@/lib/actions/admin"
import { Button } from "@/ui/components/ui/button"
import { Input } from "@/ui/components/ui/input"
import { Label } from "@/ui/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/ui/components/ui/card"

interface CategoryFormProps {
  category?: {
    id: number
    name: string
    slug: string
    color: string
  }
}

export function CategoryForm({ category }: CategoryFormProps) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(formData: FormData) {
    setLoading(true)
    setError(null)
    const result = await CategoryActions.save(formData, category?.id)
    if (result.success) {
      router.push("/admin/categories")
      router.refresh()
    } else {
      setError(result.error || "Une erreur est survenue")
      setLoading(false)
    }
  }

  return (
    <form action={handleSubmit} className="space-y-4 max-w-2xl bg-card p-6 rounded-lg border">
      <div className="grid gap-2">
        <Label htmlFor="name">Nom</Label>
        <Input id="name" name="name" defaultValue={category?.name} required placeholder="Ex: Développement Web" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="slug">Slug</Label>
        <Input id="slug" name="slug" defaultValue={category?.slug} required placeholder="ex: developpement-web" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="color">Couleur</Label>
        <Input id="color" name="color" type="color" defaultValue={category?.color || "#0045f3"} required className="h-10" />
      </div>

      {error && <p className="text-sm text-destructive font-medium">{error}</p>}

      <div className="flex justify-end gap-2 pt-4">
        <Button variant="outline" type="button" onClick={() => router.back()} disabled={loading}>
          Annuler
        </Button>
        <Button type="submit" disabled={loading}>
          {loading ? "Chargement..." : (category ? "Enregistrer les modifications" : "Créer la catégorie")}
        </Button>
      </div>
    </form>
  )
}
