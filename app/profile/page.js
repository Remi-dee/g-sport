"use client";

import React from "react";

import Profile from "../components/Profile_comp";
import Navigation from "../components/Navbar";
import Settings from "../components/Settings_comp";
import { Modal } from "../lib/modal/modal";
import { useRouter,  } from "next/navigation";

import { useStatetContext } from "../lib/stateContext";

function ProfilePage({ userData }) {

  const router = useRouter();
  const { setUserData } = useStatetContext();

 

  return (
    <>
      <Navigation />
      <Profile />
    </>
  );
}

export default ProfilePage;
