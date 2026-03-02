"use client"
import Image from "next/image";
import { SignIn } from "./components/ui/SignIn";
import { SignOut } from "./components/ui/SignOut"
import { AuthLoading, Authenticated, Unauthenticated } from "convex/react";
import { Spinner } from "@/components/ui/spinner";


export default function Home() {
  return (
    <div>
      <main>
        <AuthLoading><Spinner /></AuthLoading>
        <Authenticated>
          <h1>Hello User</h1>
          <SignOut />
        </Authenticated>
        <Unauthenticated>
          <SignIn />
        </Unauthenticated>
      </main>
    </div>
  );
}
