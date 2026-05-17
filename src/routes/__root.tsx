import { QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
} from "@tanstack/react-router";
import type { QueryClient } from "@tanstack/react-query";

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
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
