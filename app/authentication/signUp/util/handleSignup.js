import { appAuth, firebaseConfig } from "@/app/fireBase/firebase";
import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";

const handleSignUp = async ({ email, password }) => {
  try {
    console.log(email, "see it", password);
    const userCredential = await createUserWithEmailAndPassword(
      appAuth,
      email,
      password
    );
    const user = userCredential.user;
    await handleEmailVerification(user);

    console.log("User signed up:", user);
    return { success: true, user };
  } catch (error) {
    console.error("Error signing up:", error.message);
    alert(`Error signing up:, ${error.message}`);
    return { success: false, error: error.message };
  }
};

export { handleSignUp };

const handleEmailVerification = async (user) => {
  try {
    await sendEmailVerification(user);
    alert(
      "Registration successful! Please check your email for verification after which you can pick your interests."
    );
  } catch (error) {
    console.error("Error sending verification email:", error.message);
  }
};
