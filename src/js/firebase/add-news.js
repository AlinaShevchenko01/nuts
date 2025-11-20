import { doc, setDoc } from "firebase/firestore";
import { db } from "./firebase.js";

const news = [
  {
    id: "1",
    photo: {
      imgSrcSet: "/img/pages/main/main-photo-9.webp",
      imgSrc: "/img/pages/main/main-photo-9.png",
    },
    date: "12.09.2019",
    title: "Центр поддержки экспорта, в студии Павел Тулба",
  },

  {
    id: "2",
    photo: {
      imgSrcSet: "/img/pages/main/main-photo-10.webp",
      imgSrc: "/img/pages/main/main-photo-10.png",
    },
    video: "/video/about-company-o.mp4",
    date: "19.10.2019",
    title: "В Одесской области состоялся масштабный торгово - экспортный форум",
  },

  {
    id: "3",
    photo: {
      imgSrcSet: "/img/pages/main/main-photo-11.webp",
      imgSrc: "/img/pages/main/main-photo-11.png",
    },
    date: "21.01.2020",
    title: "Сертификация органического производителя",
  },

  {
    id: "4",
    photo: {
      imgSrcSet: "/img/pages/main/main-photo-12.webp",
      imgSrc: "/img/pages/main/main-photo-12.png",
    },
    video: "/video/about-company-o.mp4",
    date: "30.03.2020",
    title: "Инновации в технологии собирания урожая",
  },
];

export async function addNews() {
  try {
    for (const oneNews of news) {
      const item = doc(db, "news", oneNews.id);
      await setDoc(item, oneNews);
    }
  } catch (err) {
    console.log(err);
  }
}
