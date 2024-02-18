import React, { useEffect, useState } from "react";
import { useStateContext } from "../lib/stateContext";
import {
  UpdateUsername,
  handleEmailUpdate,
  handlePasswordUpdate,
  logoutUser,
} from "../lib/database/authService";
import { appAuth } from "../fireBase/firebase";
import { UseUserSession } from "../lib/database/databaseService";
import { handlePasswordReset } from "../authentication/forgotPassword/util/forgotPassword";
import { useRouter } from "next/navigation";

function Settings() {
  const [newPassword, setNewPassword] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newUsername, setNewUsername] = useState("");
  const router = useRouter();
  const { userDetails, getUserDetails } = UseUserSession();
  const { userData, setUserData } = useStateContext();
  useEffect(() => {
    getUserDetails();
  }, [userDetails]);

  async function handleChangePassword() {
    // Implement logic for changing password
    e.preventDefault();
    const passwordUpdated = await handlePasswordUpdate(newPassword);
    if (passwordUpdated) {
      alert("Password successfully updated");
    }
  }

  async function handleUpdateEmail(e) {
    // Implement logic for updating email
    e.preventDefault();

    const emailUpdated = await handleEmailUpdate(newEmail,);
    if (emailUpdated) {
      alert("Email successfully updated");
    }
  }

  async function handleUpdateUsername(e) {
    // Implement logic for updating username
    e.preventDefault();
    const passwordUpdated = await UpdateUsername(newUsername, userData);
  }

  async function handleLogout(e) {
    e.preventDefault();
    const isLogout = await logoutUser();
    if (isLogout) {
      alert("Bye, Get Back Soon!");

      router.push("/");
    }
  }

  return (
    <div className="max-w-md mx-auto mt-8 p-8 bg-white rounded shadow-lg">
      <h2 className="text-3xl font-bold mb-6">Settings & Privacy</h2>

      {/* UI elements for updating username */}

      <div className="my-4">
        <div className="flex justify-between">
          <label className="block text-sm text-gray-600">Change Username</label>

          <p className="text-sm text-gray-400">{userDetails.username}</p>
        </div>

        <input
          type="text"
          value={newUsername}
          onChange={(e) => setNewUsername(e.target.value)}
          placeholder="Enter new username"
          className="mt-1 p-2 border rounded w-full focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>
      <button
        onClick={handleUpdateUsername}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Update Username
      </button>

      {/* UI elements for updating email */}
      <div className="my-4">
        <div className="flex justify-between">
          <label className="block text-sm text-gray-600">Change Email</label>

          <p className="text-sm text-gray-400">{userDetails.email}</p>
        </div>
        <input
          type="email"
          value={newEmail}
          onChange={(e) => setNewEmail(e.target.value)}
          placeholder="Enter new email"
          className="mt-1 p-2 border rounded w-full focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>
      <button
        onClick={handleUpdateEmail}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Update Email
      </button>

      {/* UI elements for changing password */}
      <div className="my-4">
        <label className="block text-sm text-gray-600">Update Password</label>
        <input
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          placeholder="Enter new password"
          className="mt-1 p-2 border rounded w-full focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>
      <button
        onClick={handleChangePassword}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Change Password
      </button>

      {/* UI element for logout */}

      <div className="text-center mt-2">
        <button
          onClick={handleLogout}
          className="mt-6 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 "
        >
          Logout
        </button>{" "}
      </div>
    </div>
  );
}

export default Settings;
