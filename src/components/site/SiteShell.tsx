import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { WhatsAppPill } from "./WhatsAppPill";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-noir text-creme">
      <Nav />
      <main className="flex-1">{children}</main>
      <Footer />
      <WhatsAppPill />
    </div>
  );
}
