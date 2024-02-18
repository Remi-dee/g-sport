"use client";

import React from "react";

import Profile from "../components/Profile_comp";
import Navigation from "../components/Navbar";

import { Modal } from "../lib/modal/modal";
import { useRouter } from "next/navigation";

import { useStatetContext } from "../lib/stateContext";

function ProfilePage({ userData }) {
  const router = useRouter();

  return (
    <>
      <Navigation />
      <Profile />
    </>
  );
}

export default ProfilePage;
