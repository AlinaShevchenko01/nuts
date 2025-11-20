import { collection, getDocs } from "firebase/firestore";
import { db } from "@/js/firebase/firebase.js";

export async function getProducts() {
  try {
    const queryProducts = await getDocs(collection(db, "products"));
    return queryProducts.docs.map((doc) => doc.data());
  } catch (err) {
    console.log(err);
    return [];
  }
}
