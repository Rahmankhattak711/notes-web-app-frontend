import { Icons } from "../icons/icons";

export const Header = () => {
  return (
    <header className="flex items-center justify-between w-full h-16 pr-6">
      <div className="flex-1 max-w-md ">
        <input
          type="text"
          placeholder="Search notes..."
          className="w-full rounded-md bg-gray-100 px-4 py-2 outline-none"
        />
      </div>

      <button
        className="flex items-center gap-2 px-3 py-2 rounded-md
                         hover:bg-gray-100 transition"
      >
        <div className="w-10 h-10 bg-gradient-to-br from-blue-300 to-blue-200 rounded-full flex items-center justify-center">
          <Icons.User />
        </div>{" "}
        <span className="text-sm font-medium">User</span>
      </button>
    </header>
  );
};
