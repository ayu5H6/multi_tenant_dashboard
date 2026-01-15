import { Outlet,Link } from "react-router-dom";
import Header from "./Header"

export default function Layout() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <nav className="bg-white border-b border-gray-200 shadow-sm">
        <div className="px-6 py-3">
          <div className="flex gap-6">
            <Link
              to="/leads"
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors"
            >
              Leads
            </Link>
            <Link
              to="/calls"
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors"
            >
              Calls
            </Link>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto">
        <Outlet />
      </main>
    </div>
  );
}