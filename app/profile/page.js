"use client";

import React from "react";

import Profile from "../components/Profile_comp";
import Navigation from "../components/Navbar";

function ProfilePage() {
  return (
    <div className="relative">
      <Navigation />
      <Profile />
    </div>
  );
}

export default ProfilePage;
