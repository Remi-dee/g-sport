"use client";
import Image from "next/image";
import SignUp from "./authentication/signUp/SignUpForm_comp";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <SignUp/>
    </main>
  );
}
