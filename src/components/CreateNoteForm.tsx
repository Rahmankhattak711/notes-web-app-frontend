 import { useState } from "react";
import { Button } from "./Button";
import { Icons } from "../icons/icons";
import { useCreateNote } from "../hooks/useNote";
import toast from "react-hot-toast";

const CreateNoteForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const createNote = useCreateNote();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim() || !content.trim()) {
      toast.error("Please fill in all fields");
      return;
    }

    createNote.mutate(
      { title, content },
      {
        onSuccess: () => {
          setTitle("");
          setContent("");
          toast.success("Note created successfully!");
        },
        onError: (error: any) => {
          toast.error(error.response?.data?.message || "Failed to create note");
        },
      }
    );
  };

  return (
    <div className="bg-white  rounded-2xl shadow-2xl p-8 border border-gray-100 ">
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-900 to-blue-700 rounded-xl flex items-center justify-center">
            <Icons.Plus className="text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Create Note</h2>
            <p className="text-sm text-gray-500">
              Add a new note to your collection
            </p>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Note Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter a descriptive title..."
            className="w-full rounded-lg bg-gray-50 border border-gray-200 px-4 py-3 text-gray-900 outline-none transition-all focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
            disabled={createNote.isPending}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Note Content
          </label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="What's on your mind?"
            rows={8}
            className="w-full rounded-lg bg-gray-50 border border-gray-200 px-4 py-3 text-gray-900 outline-none transition-all focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100 resize-none"
            disabled={createNote.isPending}
            required
          />
        </div>

        <Button
          variant="primary"
          size="lg"
          disabled={createNote.isPending}
          type="submit"
          className="transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed font-semibold"
        >
          {createNote.isPending ? (
            <span className="flex items-center justify-center">
              <Icons.Loading />
              Creating...
            </span>
          ) : (
            <span className="flex items-center justify-center gap-2">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m8-8H4"
                />
              </svg>
              Create Note
            </span>
          )}
        </Button>
      </form>
    </div>
  );
};

export default CreateNoteForm;
