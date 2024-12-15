import { createUserWithEmailAndPassword, updateProfile} from "firebase/auth";
import {auth} from "../utils/firebase"


export default async function UseCreateUser (email, password, name, photoUrl){
    try{
     await createUserWithEmailAndPassword(auth, email, password)
     await updateProfile(auth.currentUser, {
      displayName:name,
      photoURL:photoUrl
     })
     return null;
    }
    catch(error){
     const errorCode = error.code;
     const errorMessage = error.message;
     return errorCode + "-" + errorMessage;
    }
}