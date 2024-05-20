// crudOperations.js
import { db } from './firebaseConfig';
import { collection, doc, addDoc, getDocs, updateDoc, deleteDoc } from "firebase/firestore";

const usersDocRef = doc(db, "fenti", "users");
const userCollectionRef = collection(usersDocRef, "userCollection");

const createUser = async (user) => {
  try {
    const docRef = await addDoc(userCollectionRef, user);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

const readUsers = async () => {
  const querySnapshot = await getDocs(userCollectionRef);
  const users = [];
  querySnapshot.forEach((doc) => {
    users.push({ id: doc.id, ...doc.data() });
  });
  return users;
};

const updateUser = async (id, updatedUser) => {
  const userDoc = doc(userCollectionRef, id);
  await updateDoc(userDoc, updatedUser);
};

const deleteUser = async (id) => {
  const userDoc = doc(userCollectionRef, id);
  await deleteDoc(userDoc);
};

export { createUser, readUsers, updateUser, deleteUser };
