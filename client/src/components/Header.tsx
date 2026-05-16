import { Link } from "@tanstack/react-router";

export default function Header() {
  return (
    <header className="p-2 flex gap-4 border-b">
      <Link to="/" className="[&.active]:font-bold">
        Home
      </Link>
      <Link to="/demo/tanstack-query" className="[&.active]:font-bold">
        TanStack Query
      </Link>
      <div>
        <Link to="/todos" className="[&.active]:font-bold">
          Todos
        </Link>
      </div>
    </header>
  );
}
