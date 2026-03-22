"use client"

export default function Error() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h2 className="text-2xl font-bold mb-4">Erreur</h2>
      <p className="mb-4">Une erreur inattendue s'est produite.</p>
      <button 
        onClick={() => window.location.reload()} 
        className="text-blue-500 hover:underline"
      >
        Réessayer
      </button>
    </div>
  )
}
