import { doc, setDoc } from "firebase/firestore";
import { db } from "./firebase.js";

const products = [
  {
    id: "0091",
    name: "Грецкий орех кондитерский",
    characteristics: ["сладкий", "кондитерский", "очищенный"],
    weight: 40,
    packType: "вакуумная",
    price: 30,
    salePercent: 0.91,
    photo: [
      {
        imgSrcSet: "/img/items/item-1.webp",
        imgSrc: "/img/items/item-1.png",
      },
      {
        imgSrcSet: "/img/items/item-back-2.webp",
        imgSrc: "/img/items/item-back-2.png",
      },
    ],
    itemFlag: "sale",
    inStoke: true,
    composition:
      "Ядро грецкого ореха, вымытого очищенного от кожуры, сахар. Идеально подойдет для выпечки",
    energyValue: "320",
  },

  {
    id: "0092",
    name: "Грецкий орех в глазури",
    characteristics: ["сладкий", "медовый", "очищенный"],
    weight: 40,
    packType: "вакуумная",
    price: 35,
    salePercent: 1,
    photo: [
      {
        imgSrcSet: "/img/items/item-2.webp",
        imgSrc: "/img/items/item-2.png",
      },
      {
        imgSrcSet: "/img/items/item-back-2.webp",
        imgSrc: "/img/items/item-back-2.png",
      },
    ],
    itemFlag: "new",
    inStoke: true,
    composition:
      "Ядро грецкого ореха, вымытого очищенного от кожуры, мед гречаный. Идеально  при простуде",
    energyValue: "330",
  },

  {
    id: "0093",
    name: "Грецкий орех соленый",
    characteristics: ["соленый", "классический", "очищенный"],
    weight: 40,
    packType: "вакуумная",
    price: 30,
    salePercent: 1,
    photo: [
      {
        imgSrcSet: "/img/items/item-3.webp",
        imgSrc: "/img/items/item-3.png",
      },
      {
        imgSrcSet: "/img/items/item-back-2.webp",
        imgSrc: "/img/items/item-back-2.png",
      },
    ],
    itemFlag: "basic",
    inStoke: true,
    composition:
      "Ядро грецкого ореха, вымытого очищенного от кожуры, соль экстра (раствор 7%). Вечная классика",
    energyValue: "300",
  },

  {
    id: "0094",
    name: "Грецкий орех с молочным вкусом",
    characteristics: ["молочный", "классический", "дробленый"],
    weight: 80,
    packType: "контейнер",
    price: 75,
    salePercent: 1,
    photo: [
      {
        imgSrcSet: "/img/items/item-4.webp",
        imgSrc: "/img/items/item-4.png",
      },
      {
        imgSrcSet: "/img/items/item-back-2.webp",
        imgSrc: "/img/items/item-back-2.png",
      },
    ],
    itemFlag: "basic",
    inStoke: true,
    composition:
      "Ядро грецкого ореха, вымытого очищенного от кожуры, дробленое в мелкую фракцию. Со вкусом топленого молока",
    energyValue: "480",
  },

  {
    id: "0095",
    name: "Грецкий орех в медовой глазури",
    characteristics: ["медовый", "классический", "дробленый"],
    weight: 40,
    packType: "контейнер",
    price: 80,
    salePercent: 0.91,
    photo: [
      {
        imgSrcSet: "/img/items/item-5.webp",
        imgSrc: "/img/items/item-5.png",
      },
      {
        imgSrcSet: "/img/items/item-back-2.webp",
        imgSrc: "/img/items/item-back-2.png",
      },
    ],
    itemFlag: "sale",
    inStoke: true,
    composition:
      "Ядро грецкого ореха, вымытого очищенного от кожуры, дробленое в мелкую фракцию. Со вкусом гречаного меда",
    energyValue: "490",
  },

  {
    id: "0096",
    name: "Грецкий орех соленый",
    characteristics: ["соленый", "классический", "дробленый"],
    weight: 40,
    packType: "контейнер",
    price: 75,
    salePercent: 1,
    photo: [
      {
        imgSrcSet: "/img/items/item-6.webp",
        imgSrc: "/img/items/item-6.png",
      },
      {
        imgSrcSet: "/img/items/item-back-2.webp",
        imgSrc: "/img/items/item-back-2.png",
      },
    ],
    itemFlag: "basic",
    inStoke: true,
    composition:
      "Ядро грецкого ореха, вымытого очищенного от кожуры, соль экстра (раствор 7%)",
    energyValue: "320",
  },

  {
    id: "0097",
    name: "Арахис соленый",
    characteristics: ["соленый", "классический", "очищенный"],
    weight: 40,
    packType: "вакуумная",
    price: 50,
    salePercent: 1,
    photo: [
      {
        imgSrcSet: "/img/items/item-1.webp",
        imgSrc: "/img/items/item-1.png",
      },
      {
        imgSrcSet: "/img/items/item-back-2.webp",
        imgSrc: "/img/items/item-back-2.png",
      },
    ],
    itemFlag: "basic",
    inStoke: true,
    composition:
      "Арахис, вымытый и очищенный от кожуры, соль экстра (раствор 7%)",
    energyValue: "530",
  },

  {
    id: "0098",
    name: "Фундук со вкусом сыра",
    characteristics: ["соленый", "сырный", "жареный", "очищеный"],
    weight: 100,
    packType: "коробка",
    price: 145,
    salePercent: 1,
    photo: [
      {
        imgSrcSet: "/img/items/item-1.webp",
        imgSrc: "/img/items/item-1.png",
      },
      {
        imgSrcSet: "/img/items/item-back-2.webp",
        imgSrc: "/img/items/item-back-2.png",
      },
    ],
    itemFlag: "basic",
    inStoke: true,
    composition:
      "Фундук со вкусом сыра - это хрустящая текстура, насыщенный вкус и легкое сырное послевкусие",
    energyValue: "630",
  },

  {
    id: "0099",
    name: "Фисташка со вкусом сыра",
    characteristics: ["соленый", "сырный", "жареный"],
    weight: 100,
    packType: "коробка",
    price: 95,
    salePercent: 1,
    photo: [
      {
        imgSrcSet: "/img/items/item-1.webp",
        imgSrc: "/img/items/item-1.png",
      },
      {
        imgSrcSet: "/img/items/item-back-2.webp",
        imgSrc: "/img/items/item-back-2.png",
      },
    ],
    itemFlag: "basic",
    inStoke: true,
    composition:
      "Фисташка со вкусом сыра - это хрустящая текстура, насыщенный вкус и легкое сырное послевкусие",
    energyValue: "630",
  },

  {
    id: "0100",
    name: "Грецкий орех со вкусом сыра",
    characteristics: ["соленый", "сырный", "чищеный"],
    weight: 100,
    packType: "коробка",
    price: 105,
    salePercent: 1,
    photo: [
      {
        imgSrcSet: "/img/items/item-1.webp",
        imgSrc: "/img/items/item-1.png",
      },
      {
        imgSrcSet: "/img/items/item-back-2.webp",
        imgSrc: "/img/items/item-back-2.png",
      },
    ],
    itemFlag: "basic",
    inStoke: true,
    composition:
      "Грецкий орех со вкусом сыра - это хрустящая текстура, насыщенный вкус и легкое сырное послевкусие",
    energyValue: "630",
  },

  {
    id: "0101",
    name: "Арахис со вкусом сыра",
    characteristics: ["соленый", "сырный", "чищеный"],
    weight: 100,
    packType: "коробка",
    price: 95,
    salePercent: 1,
    photo: [
      {
        imgSrcSet: "/img/items/item-1.webp",
        imgSrc: "/img/items/item-1.png",
      },
      {
        imgSrcSet: "/img/items/item-back-2.webp",
        imgSrc: "/img/items/item-back-2.png",
      },
    ],
    itemFlag: "new",
    inStoke: true,
    composition:
      "Арахис со вкусом сыра - это хрустящая текстура, насыщенный вкус и легкое сырное послевкусие",
    energyValue: "630",
  },

  {
    id: "0102",
    name: "Арахис со вкусом бекона",
    characteristics: ["соленый", "бекон", "чищеный"],
    weight: 100,
    packType: "коробка",
    price: 95,
    salePercent: 1,
    photo: [
      {
        imgSrcSet: "/img/items/item-1.webp",
        imgSrc: "/img/items/item-1.png",
      },
      {
        imgSrcSet: "/img/items/item-back-2.webp",
        imgSrc: "/img/items/item-back-2.png",
      },
    ],
    itemFlag: "new",
    inStoke: true,
    composition:
      "Арахис со вкусом сыра - это хрустящая текстура, насыщенный вкус и запах бекона",
    energyValue: "630",
  },

  {
    id: "0103",
    name: "Фисташка со вкусом бекона",
    characteristics: ["соленый", "бекон", "жареный"],
    weight: 100,
    packType: "коробка",
    price: 95,
    salePercent: 1,
    photo: [
      {
        imgSrcSet: "/img/items/item-1.webp",
        imgSrc: "/img/items/item-1.png",
      },
      {
        imgSrcSet: "/img/items/item-back-2.webp",
        imgSrc: "/img/items/item-back-2.png",
      },
    ],
    itemFlag: "basic",
    inStoke: true,
    composition:
      "Фисташка со вкусом бекона - это хрустящая текстура, насыщенный вкус и запах бекона",
    energyValue: "630",
  },

  {
    id: "0104",
    name: "Грецкий орех в малиновом сиропе",
    characteristics: ["малиновый", "очищеный", "жареный"],
    weight: 180,
    packType: "баночка",
    price: 180,
    salePercent: 1,
    photo: [
      {
        imgSrcSet: "/img/items/item-1.webp",
        imgSrc: "/img/items/item-1.png",
      },
      {
        imgSrcSet: "/img/items/item-back-2.webp",
        imgSrc: "/img/items/item-back-2.png",
      },
    ],
    itemFlag: "basic",
    inStoke: true,
    composition:
      "Жареный и очищеный грецкий орех, залитый домашним малиновым сиропом",
    energyValue: "730",
  },

  {
    id: "0105",
    name: "Микс орехов в меде",
    characteristics: ["медовый", "очищеный", "жареный"],
    weight: 180,
    packType: "баночка",
    price: 260,
    salePercent: 1,
    photo: [
      {
        imgSrcSet: "/img/items/item-1.webp",
        imgSrc: "/img/items/item-1.png",
      },
      {
        imgSrcSet: "/img/items/item-back-2.webp",
        imgSrc: "/img/items/item-back-2.png",
      },
    ],
    itemFlag: "basic",
    inStoke: true,
    composition:
      "Микс орехов в меде - чищеные орехи четырех видов: грецкий, арахис, фундук, миндаль, и гречаный мед",
    energyValue: "830",
  },

  {
    id: "0106",
    name: "Микс орехов в малиновом сиропе",
    characteristics: ["малиновый", "очищеный", "жареный"],
    weight: 180,
    packType: "баночка",
    price: 300,
    salePercent: 1,
    photo: [
      {
        imgSrcSet: "/img/items/item-1.webp",
        imgSrc: "/img/items/item-1.png",
      },
      {
        imgSrcSet: "/img/items/item-back-2.webp",
        imgSrc: "/img/items/item-back-2.png",
      },
    ],
    itemFlag: "basic",
    inStoke: true,
    composition:
      "Микс орехов в малиновом сиропе - чищеные орехи четырех видов: грецкий, арахис, фундук, миндаль, и домашний малиновый сироп",
    energyValue: "820",
  },
];

export async function addProducts() {
  try {
    for (const product of products) {
      const item = doc(db, "products", product.id);
      await setDoc(item, product);
    }
  } catch (err) {
    console.log(err);
  }
}
