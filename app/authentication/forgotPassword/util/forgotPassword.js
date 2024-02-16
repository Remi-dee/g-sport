import { appAuth } from "@/app/fireBase/firebase";
import { sendPasswordResetEmail } from "firebase/auth";

async function handlePasswordReset(email) {
 

  try {
    const emailSent = await sendPasswordResetEmail(appAuth, email);
    alert("Password reset email sent!");
    console.log(emailSent);
    return { success: true };
  } catch (error) {
    console.error("Error sending reset email:", error.message);
  }
}

export { handlePasswordReset };
