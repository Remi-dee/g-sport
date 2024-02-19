"use client";
import Image from "next/image";
import SignUp from "./authentication/signUp/SignUpForm_comp";
import { Suspense, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";
import { appAuth } from "./fireBase/firebase";
import Authentication from "./authentication/authentication";

export default function Home() {
  const router = useRouter();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Suspense>
        <SignUp />
        <Authentication />
      </Suspense>
    </main>
  );
}
