import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { pb } from "./backend.js";
import { Company } from "../mgmt/Company.js";

const firebaseConfig = {
  apiKey: "AIzaSyD1ZzX4hWDVxnwImJUe-kUeV7MQ_LxU43Q",
  authDomain: "deeznulls.firebaseapp.com",
  projectId: "deeznulls",
  storageBucket: "deeznulls.appspot.com",
  messagingSenderId: "513135146161",
  appId: "1:513135146161:web:b0647dd5ef876cd44c9e90",
  measurementId: "G-3HD35TN0VH"
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
let user;

export let getUserID = () => user?.uid.slice(0, 15);
export let getUserName = () => user?.displayName;

auth.onAuthStateChanged(async (user_) => {
  user = user_;
});