import { useState } from "react";
import { Button } from "../components/Button";
import { Icons } from "../icons/icons";

export default function Signup() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(false);
  const [passwordMatch, setPasswordMatch] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setPasswordMatch(true);
    setIsPending(true);
    setTimeout(() => {
      setIsPending(false);
      setError(false);
    }, 1500);
  };

  return (
    <div className="flex min-h-screen w-full bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="hidden min-h-screen lg:flex lg:w-1/2 items-center justify-center p-12 bg-gradient-to-br from-blue-900 to-blue-700 relative ">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-300 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 text-center max-w-lg">
          <div className="mb-8">
            <svg
              className="w-20 h-20 mx-auto text-white"
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

          <h1 className="text-5xl font-bold text-white mb-6">
            Start Your Journey
          </h1>
          <p className="text-xl text-blue-100 leading-relaxed mb-8">
            Join thousands of users who trust Notes App to keep their thoughts
            organized and accessible.
          </p>

          {/* Features List */}
          <div className="space-y-4 text-left">
            <div className="flex items-start">
              <svg
                className="w-6 h-6 text-blue-200 mr-3 flex-shrink-0 mt-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <div>
                <div className="text-white font-semibold">Cloud Sync</div>
                <div className="text-blue-200 text-sm">
                  Access your notes from any device
                </div>
              </div>
            </div>
            <div className="flex items-start">
              <svg
                className="w-6 h-6 text-blue-200 mr-3 flex-shrink-0 mt-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <div>
                <div className="text-white font-semibold">
                  End-to-End Encryption
                </div>
                <div className="text-blue-200 text-sm">
                  Your data is secure and private
                </div>
              </div>
            </div>
            <div className="flex items-start">
              <svg
                className="w-6 h-6 text-blue-200 mr-3 flex-shrink-0 mt-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <div>
                <div className="text-white font-semibold">
                  Smart Organization
                </div>
                <div className="text-blue-200 text-sm">
                  Tags, folders, and powerful search
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <div className="lg:hidden text-center mb-8">
            <svg
              className="w-16 h-16 mx-auto text-blue-900"
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

          <div className="min-h-screen bg-white rounded-2xl shadow-2xl p-10 border border-gray-100">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Create Account
              </h2>
              <p className="text-gray-500">
                Get started with your free account today
              </p>
            </div>

            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Username
                </label>
                <input
                  className="w-full rounded-lg bg-gray-50 border border-gray-200 px-4 py-3 text-gray-900 outline-none transition-all focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                  placeholder="Choose a username"
                  type="text"
                  value={form.username}
                  onChange={(e) =>
                    setForm({ ...form, username: e.target.value })
                  }
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  className="w-full rounded-lg bg-gray-50 border border-gray-200 px-4 py-3 text-gray-900 outline-none transition-all focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                  placeholder="you@example.com"
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <input
                  className="w-full rounded-lg bg-gray-50 border border-gray-200 px-4 py-3 text-gray-900 outline-none transition-all focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                  type="password"
                  placeholder="Create a strong password"
                  value={form.password}
                  onChange={(e) =>
                    setForm({ ...form, password: e.target.value })
                  }
                  required
                />
                <p className="text-xs text-gray-500 mt-1">
                  Must be at least 8 characters long
                </p>
              </div>

              <Button
                variant="primary"
                size="lg"
                disabled={isPending}
                type="button"
                className="transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed font-semibold"
                onClick={handleSubmit}
              >
                {isPending ? (
                  <span className="flex items-center justify-center">
                    <Icons.loading/>
                    Creating account...
                  </span>
                ) : (
                  "Create Account"
                )}
              </Button>

              {!passwordMatch && (
                <div className="rounded-lg bg-red-50 border border-red-200 p-4">
                  <div className="flex items-center">
                    <svg
                      className="w-5 h-5 text-red-600 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p className="text-sm text-red-800 font-medium">
                      Passwords do not match. Please try again.
                    </p>
                  </div>
                </div>
              )}

              {error && (
                <div className="rounded-lg bg-red-50 border border-red-200 p-4">
                  <div className="flex items-center">
                    <svg
                      className="w-5 h-5 text-red-600 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p className="text-sm text-red-800 font-medium">
                      Something went wrong. Please try again.
                    </p>
                  </div>
                </div>
              )}
            </div>

            <div className="mt-2 pt-4 border-t border-gray-200">
              <p className="text-center text-gray-600">
                Already have an account?{" "}
                <a
                  href="/login"
                  className="text-blue-900 hover:text-blue-600 font-semibold"
                >
                  Log in
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
