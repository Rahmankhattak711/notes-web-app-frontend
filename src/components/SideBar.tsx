import { Button } from "./Button";
import { Icons } from "../icons/icons";

export const SideBar = () => {
  return (
    <aside className="flex flex-col justify-between w-72 h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <div className="p-6">
        <div className="flex items-center gap-3">
          <div className="bg-blue-900 p-2 rounded-lg shadow-md">
            <svg
              className="w-7 h-7 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
              />
            </svg>
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900">Notes App</h1>
            <p className="text-xs text-gray-500">Organize your thoughts</p>
          </div>
        </div>
      </div>

      <div className="flex-1 px-4 py-6 overflow-y-auto">
        <ul className="space-y-2">
          <li>
            <Button variant="secondary" size="md">
              <div className="text-gray-600 group-hover:text-blue-900 transition-colors">
                <Icons.AddNew />
              </div>
              <span className="font-medium text-sm">Add Notes</span>
            </Button>
          </li>
          <li>
            <Button variant="secondary" size="md">
              <div className="text-gray-600 group-hover:text-blue-900 transition-colors">
                <Icons.Calander />
              </div>
              <span className="font-medium text-sm">Calendar</span>
            </Button>
          </li>
          <li>
            <Button variant="secondary" size="md">
              <div className="text-gray-600 group-hover:text-blue-900 transition-colors">
                <Icons.Trash />
              </div>
              <span className="font-medium text-sm">Trash</span>
            </Button>
          </li>
        </ul>
      </div>

      <div className="p-4">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-300 to-blue-200 rounded-full flex items-center justify-center">
            <Icons.User />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-gray-900 truncate">John Doe</p>
            <p className="text-xs text-gray-500 truncate">john@example.com</p>
          </div>
        </div>

        <div className="flex gap-2">
          <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 text-xs font-medium text-red-600 bg-white border border-red-200 rounded-lg hover:bg-red-50 transition-colors">
            Logout
          </button>
        </div>
      </div>
    </aside>
  );
};
