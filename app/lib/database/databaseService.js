
import { appFirestore } from "@/app/fireBase/firebase";
import { doc, setDoc } from "firebase/firestore";




async function completeSignUp(user, uid) {
  const newDocRef = doc(appFirestore, user.username, uid);

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

export { completeSignUp };
