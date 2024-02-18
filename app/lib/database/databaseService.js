"use client"

import { appAuth, appFirestore } from "@/app/fireBase/firebase";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import { useState } from "react";

async function completeSignUp(user, uid) {
  const newDocRef = doc(appFirestore, uid, user.username);

  const dataToSet = {
    username: user.username,
    email: user.email,
    phoneNumber: user.mobile,
    createdAt: new Date(),
  };

  try {
    await setDoc(newDocRef, dataToSet);
    console.log("Document successfully written.");
    return { success: true };
  } catch (error) {
    console.error("Error writing document: ", error);
    return { success: false, error: error.message };
  }
}
function UseUserSession() {
  const [userDetails, setUserDetails] = useState({});
  async function getUserDetails() {
    const user = appAuth.currentUser;
    if (user == null) {
      throw new Error("User not found!");
    }

    const userEmail = user.email;
    const userUid = user.uid;
    console.log("this is" + userUid);
    const owner = doc(appFirestore, userUid, user.displayName);

    const ownerSnap = await getDoc(owner);
    if (ownerSnap.exists()) {
      console.log("Document data:", ownerSnap.data());
      setUserDetails(ownerSnap.data());
    } else {
      throw new Error(`Session with ID ${userUid} does not exist`);
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

export { completeSignUp, UseUserSession, updateUserDetails };
