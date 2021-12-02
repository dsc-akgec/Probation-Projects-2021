import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBQGt-M71Xv7rCcVS3KvbRNzHqPLoHfm4s",
  authDomain: "e-commerce-c3544.firebaseapp.com",
  projectId: "e-commerce-c3544",
  storageBucket: "e-commerce-c3544.appspot.com",
  messagingSenderId: "843620204886",
  appId: "1:843620204886:web:0f6be662458c430698d6f7",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
