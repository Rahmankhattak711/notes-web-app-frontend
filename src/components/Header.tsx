import { Icons } from "../icons/icons";

export const Header = () => {
  return (
    <header className="flex items-center justify-between w-full h-16 px-6">
      <h1 className="text-xl font-bold uppercase tracking-wide">My Notes</h1>

      <div className="flex-1 max-w-md mx-6">
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
        <Icons.User />
        <span className="text-sm font-medium">User</span>
      </button>
    </header>
  );
};
