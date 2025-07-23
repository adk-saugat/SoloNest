"use client";
import { FcGoogle } from "react-icons/fc";
import { signIn, useSession, getProviders } from "next-auth/react";

export default function Hero() {
  const { data: session } = useSession();

  return (
    <header className="bg-darkgray rounded-xl text-white p-6 py-20 flex flex-col items-center space-y-6">
      <p className="flex flex-col items-center space-y-2">
        <span className="text-5xl font-bold">🏡 Live Simply, Live Smart</span>
        <span className="text-xl">
          Manage your meals, expenses, and tasks easily.
        </span>
      </p>
      <button
        onClick={() => signIn("google")}
        className="border py-2 px-5 rounded-xl flex items-center gap-2 cursor-pointer duration-100 hover:bg-white hover:text-darkgray hover:shadow-xl"
      >
        <FcGoogle size={25} />
        <span className="text-lg font-medium">Sign in with Google</span>
      </button>
    </header>
  );
}
