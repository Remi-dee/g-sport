"use client";

import { appAuth, appFirestore } from "@/app/fireBase/firebase";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import { useState } from "react";

function UseUserSession() {
  const [userDetails, setUserDetails] = useState({});
  async function getUserDetails() {
    const user = appAuth.currentUser;
    if (user == null) {
      throw new Error("User not found!");
    }

    const userEmail = user.email;
    const userUid = user.uid;

    const owner = doc(appFirestore, userUid, user.displayName);

    const ownerSnap = await getDoc(owner);
    if (ownerSnap.exists()) {
      setUserDetails(ownerSnap.data());
    } else {
      console.log(`Session with ID ${userUid} does not exist`);
    }
  }
  return { userDetails, getUserDetails };
}

async function updateUserDetails(newEmail) {
  const user = appAuth.currentUser;
  if (user == null) {
    throw new Error("User not found!");
  }

  const owner = doc(appFirestore, user.uid, user.displayName);

  try {
    const sessionData = {
      email: newEmail,
    };
    const docRef = await updateDoc(owner, sessionData);
    return { success: true };
  } catch (error) {
    console.error("Error adding document: ", error);
  }
}

export { UseUserSession, updateUserDetails };
