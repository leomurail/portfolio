"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { ThumbnailActions } from "@/lib/actions/admin"
import { Button } from "@/ui/components/ui/button"
import { Input } from "@/ui/components/ui/input"
import { Label } from "@/ui/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/ui/components/ui/card"

interface ThumbnailFormProps {
  thumbnail?: {
    id: number
    path: string
    alt: string
    width: number
    height: number
  }
}

export function ThumbnailForm({ thumbnail }: ThumbnailFormProps) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(formData: FormData) {
    setLoading(true)
    setError(null)
    const result = await ThumbnailActions.save(formData, thumbnail?.id)
    if (result.success) {
      router.push("/admin/thumbnails")
      router.refresh()
    } else {
      setError(result.error || "Une erreur est survenue")
      setLoading(false)
    }
  }

  return (
    <form action={handleSubmit} className="space-y-4 max-w-2xl bg-card p-6 rounded-lg border">
      <div className="grid gap-2">
        <Label htmlFor="path">Chemin (URL/Path)</Label>
        <Input id="path" name="path" defaultValue={thumbnail?.path} required placeholder="Ex: /img/thumbnails/project-1.webp" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="alt">Texte alternatif (Alt)</Label>
        <Input id="alt" name="alt" defaultValue={thumbnail?.alt} required placeholder="Ex: Miniature du projet 1" />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="grid gap-2">
          <Label htmlFor="width">Largeur (px)</Label>
          <Input id="width" name="width" type="number" defaultValue={thumbnail?.width || 800} required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="height">Hauteur (px)</Label>
          <Input id="height" name="height" type="number" defaultValue={thumbnail?.height || 600} required />
        </div>
      </div>

      {error && <p className="text-sm text-destructive font-medium">{error}</p>}

      <div className="flex justify-end gap-2 pt-4">
        <Button variant="outline" type="button" onClick={() => router.back()} disabled={loading}>
          Annuler
        </Button>
        <Button type="submit" disabled={loading}>
          {loading ? "Chargement..." : (thumbnail ? "Enregistrer les modifications" : "Créer la miniature")}
        </Button>
      </div>
    </form>
  )
}
