import { appAuth, firebaseConfig } from "@/app/fireBase/firebase";
import { completeSignUp } from "@/app/lib/database/authService";
import {
 
 
  useUserSession,
} from "@/app/lib/database/databaseService";
import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";

const handleSignUp = async ({ email, mobile, username, password }) => {
  try {
  
    const userCredential = await createUserWithEmailAndPassword(
      appAuth,
      email,
      password
    );
    const user = userCredential.user;
    const isVerified = await handleEmailVerification(user);
    if (user && isVerified.success) {
    
      await updateProfile(user, { displayName: username, phoneNumber: mobile });

      const newUser = {
        username,
        email,
        mobile,
      };

      const completeSignupResponse = await completeSignUp(newUser, user.uid);
      if (completeSignupResponse.success) {
        return { success: true, user };
      } else {
        return { success: false, error: completeSignupResponse.error };
      }
    }
  } catch (error) {
    console.error("Error signing up:", error.message);
    alert(`Error signing up:, ${error.message}`);
    return { success: false, error: error.message };
  }
};

const handleEmailVerification = async (user) => {
  try {
    await sendEmailVerification(user);
    alert(
      "Registration successful! Please check your email for verification after which you can pick your interests."
    );
    return { success: true };
  } catch (error) {
    console.error("Error sending verification email:", error.message);
  }
};

async function authSignUp(firstname, lastname, email, password, username) {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      appAuth,
      email,
      password
    );
    const user = userCredential.user;
    if (user) {
      await updateProfile(user, { displayName: `${firstname} ${lastname}` });

      const newUser = {
        firstname,
        lastname,
        email,
      };
      const completeSignupResponse = await completeSignUp(
        newUser,
        user.uid,
        username
      );
      if (completeSignupResponse.success) {
        return { success: true, user };
      } else {
        return { success: false, error: completeSignupResponse.error };
      }
    }
  } catch (error) {
    return { success: false, error: error.message };
  }
}

export { handleSignUp };


