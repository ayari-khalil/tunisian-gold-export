import { createFileRoute, Outlet, useRouterState } from "@tanstack/react-router";

export const Route = createFileRoute("/our-oil")({
  component: () => <Outlet />,
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const _unused = useRouterState;
