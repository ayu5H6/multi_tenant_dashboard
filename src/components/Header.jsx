import { useAuth } from "../app/AuthContext";

export default function Header() {
  const { user, setUser } = useAuth();

  const switchTenant = () => {
    setUser((prev) => ({
      ...prev,
      tenant: prev.tenant === "orgA" ? "orgB" : "orgA",
    }));
  };

  const switchRole = () => {
    setUser((prev) => ({
      ...prev,
      role: prev.role === "Admin" ? "Agent" : "Admin",
    }));
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-gray-700">Tenant:</span>
            <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-semibold rounded">
              {user.tenant}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-gray-700">Role:</span>
            <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm font-semibold rounded">
              {user.role}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={switchTenant}
            className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
          >
            Switch Tenant
          </button>
          <button
            onClick={switchRole}
            className="px-4 py-2 bg-purple-600 text-white text-sm font-medium rounded hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-colors"
          >
            Switch Role
          </button>
        </div>
      </div>
    </header>
  );
}
