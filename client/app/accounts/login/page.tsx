"use client";
import usePost from "@/api/post";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import toast from "react-hot-toast";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

export default function LoginPage() {
  const [hiddenPass, setHiddenPass] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const { mutate: login } = usePost();

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    const data = {
      email,
      password,
    };

    login(
      { url: "/auth/login", data },
      {
        onSuccess: () => {
          toast.success("Login successfully!");
          router.push("/", { scroll: false });
        },
        onError: (error) => {
          toast.error("Login failed: " + error.message);
        },
      }
    );
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white w-full max-w-md rounded-lg shadow-lg p-8">
        <h2 className="text-xl font-semibold text-center mb-4">
          Welcome Back!
        </h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="email"
            >
              Email
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              name="email"
              id="email"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-4 relative">
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="password"
            >
              Password
            </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type={hiddenPass ? "text" : "password"}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              name="password"
              id="password"
              placeholder="Enter your password"
              required
            />
            <button
              type="button"
              className="absolute right-2 top-[55%] transform"
              onClick={() => setHiddenPass(!hiddenPass)}
            >
              {hiddenPass ? <FaRegEye /> : <FaRegEyeSlash />}
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            SIGN IN
          </button>
        </form>
      </div>
    </div>
  );
}
