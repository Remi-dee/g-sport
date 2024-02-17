
import { appAuth, appFirestore } from "@/app/fireBase/firebase";
import { doc, setDoc } from "firebase/firestore";




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

  const userEmail = user.email
  const userUid = user.uid

  const owner = doc(appFirestore, `${userEmail}/${userUid}`);

  const ownerSnap = await getDoc(owner);
  if (!ownerSnap.exists()) {
    throw new Error(`Session with ID ${userUid} does not exist`);
  }

  try {
    const sessionId = codersSnap.data().sessionId;

    const userSession = doc(coders, `SESSION/${sessionId}`);

    const sessionData = await getDoc(userSession);
    onSnapshot(userSession, (querySnapShot) => {
      const docData = querySnapShot.data();
      setStoreSession(docData);
    });
  } catch (error) {
    console.error("Error retrieving document: ", error);
  }
}

export { completeSignUp };
