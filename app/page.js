"use client";
import Image from "next/image";
import SignUp from "./authentication/signUp/SignUpForm_comp";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";
import { appAuth } from "./fireBase/firebase";
import Authentication from "./authentication/authentication";

export default function Home() {
  const router = useRouter();
  const [currentUser, setCurrentUser] = useState("");
  // useEffect(() => {
  //   onAuthStateChanged(appAuth, (user) => {
  //     setCurrentUser(user);

  //     if (user) {
  //       router.push("/dashboard");
  //     }
  //   });
  // }, [router, appAuth]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <SignUp />
      <Authentication />
    </main>
  );
}
