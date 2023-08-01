import db from "./firebase";
import { collection, getDocs } from "firebase/firestore/lite";

const getTimelines = async () => {
	const timelinesCollection = collection(db, "timelines");
	const snapshot = await getDocs(timelinesCollection);
	return snapshot.docs.map((doc) => doc.data());
};

export { getTimelines };
