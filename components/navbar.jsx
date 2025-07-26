"use client";
import { useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function NavBar() {
  const { data: session } = useSession();
  return (
    <nav className="bg-white flex justify-between items-center px-6 py-4 border-b-2 border-[#E9ECEF]">
      <h1 className="font-semibold text-3xl ml-4">SoloNest</h1>
      {session && (
        <Avatar className="w-10 h-10 cursor-pointer">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      )}
    </nav>
  );
}
