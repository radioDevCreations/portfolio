import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
	apiKey: "AIzaSyD5EidEOBBckR37WMbi5HXuTmzvl226bh0",
	authDomain: "radekrozmus-5ebb5.firebaseapp.com",
	projectId: "radekrozmus-5ebb5",
	storageBucket: "radekrozmus-5ebb5.appspot.com",
	messagingSenderId: "840251127077",
	appId: "1:840251127077:web:abe4e359bf20c4001796cc",
	measurementId: "G-8ZMN7X7979",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
