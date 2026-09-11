import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/our-oil")({
  component: OurOilLayout,
});

function OurOilLayout() {
  return <Outlet />;
}
