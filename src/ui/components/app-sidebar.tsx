"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  FolderGit2,
  Tags,
  Layers,
  Image as ImageIcon,
  ArrowUpRight,
  LogOut,
} from "lucide-react";
import { logout } from "@/lib/actions/auth";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
} from "@/ui/components/ui/sidebar";

const data = {
  navMain: [
    {
      title: "Projets",
      url: "/admin/projects",
      icon: FolderGit2,
    },
    {
      title: "Catégories",
      url: "/admin/categories",
      icon: Layers,
    },
    {
      title: "Tags",
      url: "/admin/tags",
      icon: Tags,
    },
    {
      title: "Miniatures",
      url: "/admin/thumbnails",
      icon: ImageIcon,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = async () => {
    await logout();
    router.push("/admin/login");
  };

  return (
    <Sidebar {...props}>
      <SidebarHeader className="h-14 flex items-center px-4 justify-between border-b">
        <Link
          href="/admin/projects"
          className="flex items-center gap-2 font-semibold text-lg"
        >
          Léo{" "}
          <span className="text-muted-foreground font-normal">
            | Back-Office
          </span>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu Principal</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {data.navMain.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname?.startsWith(item.url)}
                  >
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="border-t p-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link
                href="/"
                target="_blank"
                className="flex items-center gap-2"
              >
                <ArrowUpRight />
                <span>Voir le site</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton
              variant="outline"
              onClick={handleLogout}
              className="text-destructive hover:text-destructive hover:bg-destructive/10"
            >
              <LogOut />
              <span>Déconnexion</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
