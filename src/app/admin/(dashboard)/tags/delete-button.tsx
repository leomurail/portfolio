"use client"

import { useState } from "react"
import { Button } from "@/ui/components/ui/button"
import { deleteTag } from "@/lib/actions/admin"

export function DeleteTagButton({ id }: { id: number }) {
  const [loading, setLoading] = useState(false)

  const handleDelete = async () => {
    if (confirm("Êtes-vous sûr de vouloir supprimer ce tag ?")) {
      setLoading(true)
      const result = await deleteTag(id)
      if (!result.success) {
        alert(result.error)
      }
      setLoading(false)
    }
  }

  return (
    <Button 
      variant="destructive" 
      size="sm" 
      onClick={handleDelete} 
      disabled={loading}
    >
      {loading ? "..." : "Supprimer"}
    </Button>
  )
}
