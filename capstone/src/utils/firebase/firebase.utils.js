import { initializeApp } from "firebase/app"; // create an app instance config that points to the instance created on the firebase platform
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import {
  getFirestore,
  doc, // getting document instance
  getDoc, // getting document data
  setDoc, // setting document data
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCYMFSpwHGEJNJgcqfATSfGVtHsgqzElW4",
  authDomain: "crwn-clothing-db-40e6e.firebaseapp.com",
  projectId: "crwn-clothing-db-40e6e",
  storageBucket: "crwn-clothing-db-40e6e.appspot.com",
  messagingSenderId: "154869893357",
  appId: "1:154869893357:web:72718060ec078da12fe4e4",
};

const firebaseApp = initializeApp(firebaseConfig);
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation
) => {
  if (!userAuth) return;
  const userDocRef = doc(db, "users", userAuth.uid); // document instance
  const userSnapShot = await getDoc(userDocRef); // userData access
  // console.log(userDocRef);
  // console.log(userSnapShot.exists()); // if user exists

  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    // if user data doesn't exist
    // create or set the document with the data from userAuth in my collection
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("error creating the user: ", error.message);
    }
  }

  //check if user data exists
  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  // console.log('details are: '+email+' '+password)
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  // console.log('details are: '+email+' '+password)
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => signOut(auth);

export const onAuthStateChangedListener = (callback) => {

  onAuthStateChanged(auth, callback);
}
