import { getFirestore, collection, addDoc } from "firebase/firestore/lite";
import { firebaseApp } from "../../../pages/_app";

export default async function FirebaseAddDocGiphy(url: string, ip: any) {
  const history = collection(getFirestore(firebaseApp), `history/ip/${ip}`);

  await addDoc(history, {
    urlHistory: url,
  });
}
