import { collection, addDoc, deleteDoc, doc } from "firebase/firestore";
import { auth, firestore } from "./firebase-setup";

export async function writeToDB(goal) {
  try {
    const docRef = await addDoc(collection(firestore, "goals"), {...goal, user:auth.currentUser.uid});
  } catch (err) {
    console.log(err);
  }
}

export async function deleteFromDB(key) {
  try {
    await deleteDoc(doc(firestore, "goals", key));
  } catch (err) {
    console.log(err);
  }
}