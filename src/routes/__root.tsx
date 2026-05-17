import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-noir px-4">
      <div className="max-w-md text-center">
        <div className="font-mono text-eyebrow text-brass mb-6">Error 404</div>
        <h1 className="font-serif text-6xl text-creme">Lost in the atelier</h1>
        <p className="mt-6 text-sm text-creme/50">
          The page you're looking for has slipped behind the velvet curtain.
        </p>
        <div className="mt-10">
          <Link
            to="/"
            className="inline-flex items-center justify-center border border-creme/20 px-6 py-3 text-eyebrow text-creme hover:bg-creme hover:text-noir transition-colors"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-noir px-4">
      <div className="max-w-md text-center">
        <div className="font-mono text-eyebrow text-brass mb-6">Unexpected interruption</div>
        <h1 className="font-serif text-4xl text-creme">Something went wrong</h1>
        <p className="mt-4 text-sm text-creme/50">{error.message}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="border border-brass text-brass px-6 py-3 text-eyebrow hover:bg-brass hover:text-noir transition-colors"
          >
            Try again
          </button>
          <a
            href="/"
            className="border border-creme/20 px-6 py-3 text-eyebrow text-creme hover:bg-creme hover:text-noir transition-colors"
          >
            Home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Maison Noir — Grooming Atelier · Lahore & Karachi" },
      { name: "description", content: "A private grooming atelier for the modern South Asian gentleman. Two ateliers in Gulberg, Lahore and DHA, Karachi." },
      { name: "theme-color", content: "#14110F" },
      { property: "og:site_name", content: "Maison Noir" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Instrument+Sans:wght@400;500;600&family=JetBrains+Mono:wght@400&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
