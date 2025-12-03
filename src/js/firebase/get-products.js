import {collection, getDocs,doc, getDoc } from "firebase/firestore";
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

export async function getProductId (id) {
  try {
    const item = await getDoc(doc(db, "products",id));

    if (!item.exists()) {
      return null;
    }

    return {
      id : item.id,
      ...item.data(),
    }
  } catch (err) {
    console.log(err);
    return null;
  }
}
