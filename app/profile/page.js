"use client";

import React from "react";

import Profile from "../components/Profile_comp";
import Navigation from "../components/Navbar";

import { Modal } from "../lib/modal/modal";
import { useRouter } from "next/navigation";

import { useStatetContext } from "../lib/context/stateContext";
import { useAuthContext } from "../lib/context/authContext";
import MobileNav from "../components/mobileNav";

function ProfilePage({ userData }) {
  const router = useRouter();
  const { currentUser } = useAuthContext();
  const userSession = localStorage.getItem("userSession");

  if (!userSession) {
    router.push("/");
    router.push("/?view=signin");

    return;
  }
  return (
    <div className="relative">
      <Navigation />
      <Profile />
      <div className="absolute md:hidden mb-0 bottom-0 left-[22%]">
        <MobileNav />
      </div>
    </div>
  );
}

export default ProfilePage;
