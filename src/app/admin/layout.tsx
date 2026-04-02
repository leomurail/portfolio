import { ThemeProvider } from "@/ui/components/theme-provider";
import "./admin.css";

export default function AdminRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      forcedTheme="dark"
      enableSystem={false}
      disableTransitionOnChange
    >
      <div className="admin-root dark">{children}</div>
    </ThemeProvider>
  );
}
