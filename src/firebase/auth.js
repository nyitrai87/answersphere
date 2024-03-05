import { createUserWithEmailAndPassword, GoogleAuthProvider, updateProfile, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, updatePassword } from "firebase/auth"
import {auth} from "./firebase"


// create user
export const doCreateUserWithEmailAndPassword = async (email, password, username) => {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(userCredential.user, { displayName: username });
    // If successful, return the userCredential object
    return userCredential;
}


// sign in user
export const doSignInWithEmailAndPassword = async (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
}


// sign in with google
export const doSignInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  const result = await signInWithPopup(auth, provider)

  // result.user --> save to firestore
  return result
}


// sign out
export const doSignOut = () => {
  return auth.signOut();
}


// password reset
// export const doPasswordReset = (email) => {
//   return sendPasswordResetEmail(auth, email);
// }
// export const doPasswordChange = (password) => {
//   return updatePassword(auth.currentUser, password);
// }
// export const doSendEmailVerification = () => {
//   return sendEmailVerification(auth.currentUser, {
//     url: `${window.location.origin}/home`,
//   })
// }
