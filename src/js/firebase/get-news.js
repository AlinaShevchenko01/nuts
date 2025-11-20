import { collection, getDocs } from "firebase/firestore";
import { db } from "@/js/firebase/firebase.js";

export async function getNews() {
  try {
    const queryNews = await getDocs(collection(db, "news"));
    return queryNews.docs.map((doc) => doc.data());
  } catch (err) {
    console.log(err);
    return [];
  }
}
