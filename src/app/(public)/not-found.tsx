import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h2 className="text-2xl font-bold mb-4">404 - Page Non Trouvée</h2>
      <p className="mb-4">La page que vous cherchez n'existe pas.</p>
      <Link href="/" className="text-blue-500 hover:underline">
        Retourner à l'accueil
      </Link>
    </div>
  );
}
