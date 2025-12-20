import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDz15p67h77MoVGlB6afvVtkhp_LpQoKnk",
  authDomain: "e-commerce-larzabalmontoya.firebaseapp.com",
  projectId: "e-commerce-larzabalmontoya",
  storageBucket: "e-commerce-larzabalmontoya.appspot.com",
  messagingSenderId: "478259620626",
  appId: "1:478259620626:web:93e020d8a7d0c9e01021cb",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
