import { appAuth } from "@/app/fireBase/firebase";
import { signOut, updateEmail, updatePassword } from "firebase/auth";
import { UseUserSession, updateUserDetails } from "./databaseService";
import { useStateContext } from "../stateContext";

async function handleEmailUpdate(newEmail) {
  try {
    await updateEmail(appAuth.currentUser, newEmail);
    await updateUserDetails(newEmail);
    return { success: true };
  } catch (error) {
    console.error("Error updating email:", error);
    alert(`Error updating email:", ${error}`);
  }
}

async function handlePasswordUpdate(newPassword) {
  try {
    await updatePassword(appAuth.currentUser, newPassword);

    return { success: true };
  } catch (error) {
    console.error("Error updating email:", error);
    alert(`Error updating email:", ${error}`);
  }
}

const UpdateUsername = async ({ username, userData }) => {
  
  try {
    const user = appAuth.currentUser;

    if (user) {
      await updateProfile(user, { displayName: username });

      const { email, phoneNumber } = userData;
      console.log(userData);

      const dataToUpdate = {
        username: username,
        email: email,
        phoneNumber: phoneNumber,
        createdAt: new Date(),
      };
      await setDoc(newDocRef, dataToSet);
      console.log("Document successfully Updated.");
      return { success: true };
    }
  } catch (error) {
    console.error("Error Updating Username:", error.message);
    alert(`Error updating Username:, ${error.message}`);
    return { success: false, error: error.message };
  }
};

async function logoutUser() {
  try {
    await signOut(appAuth);
    return { success: true };
  } catch (error) {
    console.log(error.message);
  }
}

export { handleEmailUpdate, handlePasswordUpdate, logoutUser, UpdateUsername };
