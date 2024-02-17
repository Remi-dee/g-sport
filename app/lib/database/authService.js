import { appAuth } from "@/app/fireBase/firebase";
import { updateEmail } from "firebase/auth";

async function handleEmailUpdate(newEmail) {
  try {
    await updateEmail(appAuth.currentUser, newEmail);
    alert("New email is" + newEmail);
    return { success: true };
  } catch (error) {
    console.error("Error updating email:", error);
    alert(`Error uapdating email:", ${error}`);
  }
}


export {handleEmailUpdate}