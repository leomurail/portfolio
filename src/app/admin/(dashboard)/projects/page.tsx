import { ProjectActions } from "@/lib/actions/admin";
import { Button } from "@/ui/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/ui/components/ui/table";
import Link from "next/link";
import { DeleteProjectButton } from "./delete-button";

export const dynamic = "force-dynamic";

export default async function AdminProjectsPage() {
  const projects = await ProjectActions.getAll();

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight text-foreground">
          Projets
        </h1>
        <Button asChild>
          <Link href="/admin/projects/new">Ajouter un projet</Link>
        </Button>
      </div>

      <div className="rounded-md border bg-card">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nom</TableHead>
              <TableHead>Slug</TableHead>
              <TableHead>Catégorie</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {projects.length === 0 && (
              <TableRow>
                <TableCell
                  colSpan={4}
                  className="text-center h-24 text-muted-foreground"
                >
                  Aucun projet trouvé.
                </TableCell>
              </TableRow>
            )}
            {projects.map((project) => (
              <TableRow key={project.id}>
                <TableCell className="font-medium text-foreground">
                  {project.name}
                </TableCell>
                <TableCell className="text-muted-foreground">
                  {project.slug}
                </TableCell>
                <TableCell>
                  <span
                    className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium"
                    style={{
                      backgroundColor: project.category.color,
                      color: "#fff",
                    }}
                  >
                    {project.category.name}
                  </span>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button variant="outline" size="sm" asChild title="Voir">
                      <Link href={`/admin/projects/${project.id}/view`}>
                        Voir
                      </Link>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      title="Modifier"
                    >
                      <Link href={`/admin/projects/${project.id}`}>
                        Modifier
                      </Link>
                    </Button>
                    <DeleteProjectButton id={project.id} />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
