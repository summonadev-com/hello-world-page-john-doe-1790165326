import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: HomePage,
});

function HomePage() {
  return (
    <div className="flex min-h-screen items-center justify-center px-6">
      <h1 className="text-5xl font-semibold tracking-tight text-slate-900 sm:text-6xl">
        Hello World
      </h1>
    </div>
  );
}
