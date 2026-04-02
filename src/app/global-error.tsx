"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="fr">
      <body>
        <div className="flex flex-col items-center justify-center min-h-screen text-center">
          <h2 className="text-2xl font-bold mb-4">Erreur Critique</h2>
          <p className="mb-4">Une erreur critique s'est produite.</p>
          <button
            onClick={() => reset()}
            className="text-blue-500 hover:underline"
          >
            Réessayer
          </button>
        </div>
      </body>
    </html>
  );
}
