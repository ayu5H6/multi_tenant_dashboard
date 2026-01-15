import { useAuth } from "../../app/AuthContext";
import { data } from "../../data/mockData";
import { useState, useMemo } from "react";
import { Can } from "../../app/RBAC";

export default function LeadsPage() {
  const { user } = useAuth();
  const [filter, setFilter] = useState("All");
  const leads = data[user.tenant].leads;

  const filteredLeads = useMemo(() => {
    return leads.filter((l) => (filter === "All" ? true : l.status === filter));
  }, [leads, filter]);

  if (!leads.length) {
    return <p className="text-gray-500 text-center py-8">No leads found</p>;
  }

  return (
    <div className="p-6">
      <div className="mb-6">
        <label
          htmlFor="filter"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Filter by Status
        </label>
        <select
          id="filter"
          onChange={(e) => setFilter(e.target.value)}
          className="block w-full max-w-xs px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          <option>All</option>
          <option>New</option>
          <option>Contacted</option>
        </select>
      </div>

      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Phone
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>

          <tbody className="bg-white divide-y divide-gray-200">
            {filteredLeads.map((l) => (
              <tr key={l.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {l.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {l.phone}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    {l.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <Can action="EDIT">
                    <button className="text-blue-600 hover:text-blue-900 font-medium">
                      Edit
                    </button>
                  </Can>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
