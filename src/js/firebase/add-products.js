import { doc, setDoc } from "firebase/firestore";
import { db } from "./firebase.js";

const products = [
  {
    id: "0091",
    type: "Грецкий орех",
    name: "Грецкий орех кондитерский",
    characteristics: ["sweet", "confectionery", "peeled"],
    weight: 40,
    packType: "vacuum",
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
    type: "Грецкий орех",
    name: "Грецкий орех в глазури",
    characteristics: ["sweet", "honey", "peeled"],
    weight: 40,
    packType: "vacuum",
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
    type: "Грецкий орех",
    name: "Грецкий орех соленый",
    characteristics: ["salty", "classic", "peeled"],
    weight: 40,
    packType: "vacuum",
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
    type: "Грецкий орех",
    name: "Грецкий орех с молочным вкусом",
    characteristics: ["milky", "classic", "crushed"],
    weight: 80,
    packType: " container",
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
    type: "Грецкий орех",
    name: "Грецкий орех в медовой глазури",
    characteristics: ["honey", "classic", "crushed"],
    weight: 40,
    packType: "container",
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
    type: "Грецкий орех",
    name: "Грецкий орех соленый",
    characteristics: ["salty", "classic", "crushed"],
    weight: 40,
    packType: "container",
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
    type: "Арахис",
    name: "Арахис соленый",
    characteristics: ["salty", "classic", "peeled"],
    weight: 40,
    packType: "vacuum",
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
    type: "Фундук",
    name: "Фундук со вкусом сыра",
    characteristics: ["salty", "cheese", "roasted", "peeled"],
    weight: 100,
    packType: "box",
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
    type: "Фисташка",
    name: "Фисташка со вкусом сыра",
    characteristics: ["salty", "cheese", "roasted"],
    weight: 100,
    packType: "box",
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
    type: "Грецкий орех",
    name: "Грецкий орех со вкусом сыра",
    characteristics: ["salty", "cheese", "peeled"],
    weight: 100,
    packType: "box",
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
    type: "Арахис",
    name: "Арахис со вкусом сыра",
    characteristics: ["salty", "cheese", "peeled"],
    weight: 100,
    packType: "box",
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
    type: "Арахис",
    name: "Арахис со вкусом бекона",
    characteristics: ["salty", "bacon", "peeled"],
    weight: 100,
    packType: "box",
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
    type: "Фисташка",
    name: "Фисташка со вкусом бекона",
    characteristics: ["salty", "bacon", "roasted"],
    weight: 100,
    packType: "box",
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
    type: "Грецкий орех",
    name: "Грецкий орех в малиновом сиропе",
    characteristics: ["raspberry", "peeled", "roasted"],
    weight: 180,
    packType: "jar",
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
    type: "Микс орехов",
    name: "Микс орехов в меде",
    characteristics: ["honey", "peeled", "roasted"],
    weight: 180,
    packType: "jar",
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
    type: "Микс орехов",
    name: "Микс орехов в малиновом сиропе",
    characteristics: ["raspberry", "peeled", "roasted"],
    weight: 180,
    packType: "jar",
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
