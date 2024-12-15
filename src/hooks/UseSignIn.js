import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";

export default async function UseSignIn(email, password) {

 try{
  await signInWithEmailAndPassword(auth, email, password)
  return null;
 }
 catch(error){
  const errorCode = error.code;
  const errorMessage = error.message;
  return errorCode + "-" + errorMessage;
 }
}
