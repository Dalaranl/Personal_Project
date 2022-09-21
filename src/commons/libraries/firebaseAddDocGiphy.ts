import { getFirestore, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { firebaseApp } from "../../../pages/_app";

export default async function FirebaseAddDocGiphy(url: string, ip: any) {
  const firestore = getFirestore(firebaseApp);
  const DB = firestore;
  const docRef = doc(DB, "history", ip);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    await updateDoc(docRef, {history: [...docSnap.data().history, url]})

  } else {
    setDoc(doc(DB, "history", ip), {history: [url]});
  }
}
