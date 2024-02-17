"use client";

import React from "react";

import Profile from "../components/Profile_comp";
import Navigation from "../components/Navbar";
import Settings from "../components/Settings_comp";
import { Modal } from "../lib/modal/modal";
import { useRouter, useSearchParams } from "next/navigation";

function ProfilePage() {
  const view = useSearchParams().get("view");
  const router = useRouter();
  return (
    <>
      <Navigation />
      <Profile />

    </>
  );
}

export default ProfilePage;
