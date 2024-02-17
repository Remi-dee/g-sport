// Settings.js

import React, { useState } from "react";
import { usestatetContext } from "../lib/stateContext";

function Settings() {
  const [newPassword, setNewPassword] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newUsername, setNewUsername] = useState("");


  function handleChangePassword() {
    // Implement logic for changing password
  }

  function handleUpdateEmail() {
    // Implement logic for updating email
  }

  function handleUpdateUsername() {
    // Implement logic for updating username
  }

  function handleLogout() {
    // Implement logic for logout
  }

  return (
    <div>
      <h2>Settings & Privacy</h2>

      {/* UI elements for changing password */}
      <input
        type="password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
      />
      <button onClick={handleChangePassword}>Change Password</button>

      {/* UI elements for updating email */}
      <input
        type="email"
        value={newEmail}
        onChange={(e) => setNewEmail(e.target.value)}
      />
      <button onClick={handleUpdateEmail}>Update Email</button>

      {/* UI elements for updating username */}
      <input
        type="text"
        value={newUsername}
        onChange={(e) => setNewUsername(e.target.value)}
      />
      <button onClick={handleUpdateUsername}>Update Username</button>

      {/* UI element for logout */}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Settings;
