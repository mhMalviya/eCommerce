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

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();

  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit(); //since this returns a promise. we are making this
  //method async and returning an await
};

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data(); //fetching the title and items from document
    return {
      routeName: encodeURI(title.toLowerCase()),
      //this was not stored in the document, hence we are sing the title
      id: doc.id, //this was also not in the document, but it comes along with the document
      title,
      items,
    };
  });

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
