import { AppSidebar } from "@/ui/components/app-sidebar";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/ui/components/ui/sidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <AppSidebar variant="sidebar" />
      <SidebarInset className="flex flex-col min-h-screen">
        <header className="flex h-14 shrink-0 items-center justify-between border-b px-4 bg-background z-10 sticky top-0">
          <div className="flex items-center gap-2">
            <SidebarTrigger className="-ml-1" />
          </div>
        </header>
        <main className="flex-1 overflow-auto">
          <div className="admin-content-container">{children}</div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
