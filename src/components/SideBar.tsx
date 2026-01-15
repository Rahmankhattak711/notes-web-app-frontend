import { Icons } from "../icons/icons";
import { Button } from "./Button";

export const SideBar = () => {
  return (
    <aside className="flex flex-col justify-between w-xs h-screen p-4">
      <a href="/" className="pl-4 mb-20">
        <h1 className="text-lg font-light uppercase text-blue-950">MINO</h1>
      </a>

      <div className="h-screen">
        <ul className="pl-4 space-y-2 cursor-pointer">
          <li
            className="flex items-center gap-2 px-3 py-2 rounded-md
                         hover:bg-gray-100 transition"
          >
            <Icons.AddNew /> Add Notes
          </li>
          <li
            className="flex items-center gap-2 px-3 py-2 rounded-md
                         hover:bg-gray-100 transition"
          >
            <Icons.Calander /> Calander
          </li>
          <li
            className="flex items-center gap-2 px-3 py-2 rounded-md
                         hover:bg-gray-100 transition"
          >
            <Icons.Trash /> Trash
          </li>
        </ul>
      </div>

      <div>
        <Button variant="primary" size="md">
          Sign In
        </Button>
      </div>
    </aside>
  );
};
