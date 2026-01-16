import { Icons } from "../icons/icons";

export const Hero = () => {
  const notes = [
    {
      title: "Mid test exam",
      date: "12/12/2021",
      time: "10:30 PM, Monday",
      bg: "bg-yellow-200",
    },
    {
      title: "Mid test exam",
      date: "12/12/2021",
      time: "10:30 PM, Monday",
      bg: "bg-red-200",
    },
    {
      title: "Jonas’s notes",
      date: "12/12/2021",
      time: "04:30 PM, Sunday",
      bg: "bg-blue-300",
    },
  ];
  return (
    <main className="flex-1 p-8 bg-gray-100 overflow-y-auto">
      <section>
        <h2 className="text-lg font-semibold mb-4">My Notes</h2>

        <div className="grid grid-cols-3 gap-6">
          {notes.map((note, i) => (
            <div
              key={i}
              className={`rounded-xl p-4 h-64 ${note.bg} flex flex-col justify-between`}
            >
              <div>
                <p className="text-xs text-gray-600">{note.date}</p>
                <h3 className="font-semibold mt-1">{note.title}</h3>
                <p className="text-sm text-gray-700 mt-2 line-clamp-4">
                  Ultrices viverra odio congue lecos felis, libero egestas nunc
                  sagi are masa, elit ornare eget sem vebi in ulum.
                </p>
              </div>

              <div className="text-xs text-gray-600 flex items-center gap-2">
                {note.time}
              </div>
            </div>
          ))}

          <div className="rounded-xl border-2 border-dashed border-gray-300 flex items-center justify-center flex-col gap-4 text-sm text-gray-500 h-64">
            <Icons.AddNew />
            New Note
          </div>
        </div>
      </section>
    </main>
  );
};
