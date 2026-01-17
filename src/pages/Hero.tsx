// pages/Hero.tsx
import { useDeleteNote, useNotes } from "../hooks/useNote";
import { Icons } from "../icons/icons";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

interface Note {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}

const Hero = () => {
  const { data, isLoading, error } = useNotes();
  const deleteNote = useDeleteNote();

  const notes = data?.notes || data?.posts || data || [];

  const cardColors = [
    "bg-yellow-200",
    "bg-red-200",
    "bg-blue-300",
    "bg-green-200",
    "bg-purple-200",
    "bg-pink-200",
    "bg-indigo-200",
    "bg-orange-200",
  ];

  const handleDelete = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();

    toast((t) => (
      <div className="flex items-center gap-3">
        <span>Delete this note?</span>
        <button
          onClick={() => {
            toast.dismiss(t.id);
            deleteNote.mutate(id, {
              onSuccess: () => {
                toast.success("Note deleted!");
              },
              onError: () => {
                toast.error("Failed to delete");
              },
            });
          }}
          className="px-3 py-1 bg-red-500 text-white rounded-md text-sm hover:bg-red-600"
        >
          Delete
        </button>
        <button
          onClick={() => toast.dismiss(t.id)}
          className="px-3 py-1 bg-gray-200 text-gray-700 rounded-md text-sm hover:bg-gray-300"
        >
          Cancel
        </button>
      </div>
    ));
  };

  if (isLoading) {
    return (
      <main className="flex-1 p-8 bg-gray-100 overflow-y-auto">
        <div className="flex justify-center items-center py-20">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-900"></div>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="flex-1 p-8 bg-gray-100 overflow-y-auto">
        <div className="text-center text-red-600 py-20">
          Error loading notes
        </div>
      </main>
    );
  }

  return (
    <main className="flex-1 p-8 bg-gray-100 overflow-y-auto">
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">My Notes</h2>
          {notes.length > 0 && (
            <p className="text-sm text-gray-500">
              {notes.length} {notes.length === 1 ? "note" : "notes"}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {notes.map((note: Note, index: number) => (
            <div
              key={note.id}
              className={`rounded-xl p-4 h-64 ${
                cardColors[index % cardColors.length]
              } flex flex-col justify-between relative group cursor-pointer hover:shadow-lg transition-shadow`}
            >
              <button
                onClick={(e) => handleDelete(note.id, e)}
                disabled={deleteNote.isPending}
                className="absolute top-2 right-2 p-2 bg-white/80 hover:bg-white rounded-lg opacity-0 group-hover:opacity-100 transition-opacity disabled:opacity-50"
                title="Delete note"
              >
                <Icons.Delete />
              </button>

              <div>
                <p className="text-xs text-gray-600">
                  {new Date(note.createdAt).toLocaleDateString()}
                </p>
                <h3 className="font-semibold mt-1 text-gray-900">
                  {note.title}
                </h3>
                <p className="text-sm text-gray-700 mt-2 line-clamp-4">
                  {note.content}
                </p>
              </div>

              <div className="text-xs text-gray-600 flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {new Date(note.createdAt).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
                , {new Date(note.createdAt).toLocaleDateString("en-US", { weekday: "long" })}
              </div>
            </div>
          ))}

          {/* Create New Note Card */}
          {notes.length > 0 && (
            <Link
              to="/create-note"
              className="rounded-xl border-2 border-dashed border-gray-300 flex items-center justify-center flex-col gap-4 text-sm text-gray-500 h-64 hover:border-gray-400 hover:text-gray-600 transition-colors"
            >
              <Icons.Plus />
              New Note
            </Link>
          )}
        </div>

        {/* Empty State */}
        {notes.length === 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link
              to="/create-note"
              className="rounded-xl border-2 border-dashed border-gray-300 flex items-center justify-center flex-col gap-4 text-sm text-gray-500 h-64 hover:border-gray-400 hover:text-gray-600 transition-colors"
            >
              <Icons.Plus />
              Create Your First Note
            </Link>
          </div>
        )}
      </section>
    </main>
  );
};

export default Hero;
