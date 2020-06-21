import firebase from "firebase/app";
import "firebase/firestore"; //for Data Base
import "firebase/auth"; //for Authentication

const config = {
  apiKey: "AIzaSyDg41dYMA_IqU8cxObAsFg6a5ZcMxJjJOE",
  authDomain: "cotton-trails.firebaseapp.com",
  databaseURL: "https://cotton-trails.firebaseio.com",
  projectId: "cotton-trails",
  storageBucket: "cotton-trails.appspot.com",
  messagingSenderId: "403397029289",
  appId: "1:403397029289:web:0f4d379065fca8243f68b8",
  measurementId: "G-XZHN06FEK6",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return; //If the object is null, means no one is logged in, exit from the function

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

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
