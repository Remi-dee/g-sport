import { appAuth, appFirestore } from "@/app/fireBase/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";

async function completeSignUp(user, uid) {
  const newDocRef = doc(appFirestore, user.email, user.uid);

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

async function getUserDetails() {
  const user = appAuth.currentUser;
  if (user == null) {
    throw new Error("User not found!");
  }

  const userEmail = user.email;
  const userUid = user.uid;

  const owner = doc(appFirestore, `${userEmail}/${userUid}`);

  const ownerSnap = await getDoc(owner);
  if (!ownerSnap.exists()) {
    console.log("Document data:", ownerSnap.data());
    return ownerSnap.data();
  } else {
    throw new Error(`Session with ID ${userUid} does not exist`);
  }
}

export { completeSignUp, getUserDetails };

// const docRef = doc(db, "cities", "SF");
// const docSnap = await getDoc(docRef);

// if (docSnap.exists()) {
//   console.log("Document data:", docSnap.data());
// } else {
//   // docSnap.data() will be undefined in this case
//   console.log("No such document!");
// }
