"use client";

import React, { useEffect } from "react";

import Profile from "../components/Profile_comp";
import Navigation from "../components/Navbar";

import { useRouter } from "next/navigation";

import { useAuthContext } from "../lib/context/authContext";
import MobileNav from "../components/MobileNav";

function ProfilePage({ userData }) {
  const router = useRouter();
  const { currentUser } = useAuthContext();

  useEffect(() => {
    const userSession = localStorage.getItem("userSession");
    if (!userSession) {
      router.push("/");
      router.push("/?view=signin");

      return;
    }
  }, []);

  return (
    <div className="relative">
      <Navigation />
      <Profile />
      <div className="absolute  md:hidden  bottom-0 left-[60px]">
        <MobileNav />
      </div>
    </div>
  );
}

export default ProfilePage;
