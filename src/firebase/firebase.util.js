import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCTXAsWYyb_TwzYckwkRu_kdvzG55ca888",
  authDomain: "grwm-bd992.firebaseapp.com",
  projectId: "grwm-bd992",
  storageBucket: "grwm-bd992.appspot.com",
  messagingSenderId: "518412310377",
  appId: "1:518412310377:web:7ceb07cc065c3f513f4ff8",
  measurementId: "G-7KKV8LXHRF",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const signInwithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
