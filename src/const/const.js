import Sandro from "@/assets/Sandro.png";
import Leonardo from "@/assets/Leonardo.png";
import Mikkilandgelo from "@/assets/Mikkilandgelo.png";
import Rembrandt from "@/assets/Rembrandt.png";

///Sandro
import venera1 from "@/assets/cardCarouselImage/venera1.jpg";
import venera2 from "@/assets/cardCarouselImage/venera2.jpg";
import venera3 from "@/assets/cardCarouselImage/venera3.jpg";

///Leonardo 
import vechera1 from "@/assets/cardCarouselImage/vechera1.jpg";
import vechera2 from "@/assets/cardCarouselImage/vechera2.jpg";
import vechera3 from "@/assets/cardCarouselImage/vechera3.jpg";

/// Mikkilandgelo
import adam1 from "@/assets/cardCarouselImage/adam1.jpg";
import adam2 from "@/assets/cardCarouselImage/adam2.jpg";
import adam3 from "@/assets/Mikkilandgelo.png";

/// Rembrandt

import anatomia1 from "@/assets/cardCarouselImage/anatomia1.jpg";
import anatomia2 from "@/assets/Rembrandt.png";


export const NAVIGATION_LIST = [
  { id: 1, title: "Каталог", link: "Catalog" },
  { id: 2, title: "Доставка", link: "Delivery" },
  { id: 3, title: "Оплата", link: "Pay" },
  { id: 4, title: "Контакты", link: "Contacts" },
  { id: 5, title: "О компании", link: "About Company" },
];

export const PICTURE_CARD_LIST = [
  {
    id: 1,
    name: "Рождение Венеры",
    author: "Сандро Боттичелли",
    description:
      "Выдающееся произведение Сандро Боттичелли, созданное около 1486 года. Картина изображает мифологическую сцену рождения богини Венеры, поднимающейся из морской пены.",
    image: Sandro,
    price: 1000000,
    sale: 2000000,
    status: "idle",
    images: [venera1,venera2,venera3],
  },
  {
    id: 2,
    name: "Тайная вечеря",
    author: "Леонардо да Винчи",
    description:
      "Знаменитая фреска Леонардо да Винчи, созданная в 1495–1498 годах на стене трапезной монастыря Санта-Мария-делле-Грацие в Милане.",
    image: Leonardo,
    price: 3000000,
    sale: null,
    status: "idle",
    images: [vechera1,vechera2,vechera3],
  },
  {
    id: 3,
    name: "Сотворение Адама",
    author: "Микеланджело",
    description:
      "Знаменитая фреска Микеланджело, созданная в 1512 году на потолке Сикстинской капеллы в Ватикане. Она изображает библейский сюжет из книги Бытия, где Бог протягивает руку для оживления Адама.",
    image: Mikkilandgelo,
    price: 5000000,
    sale: 6000000,
    status: "idle",
    images: [adam1,adam2,adam3],
  },
  {
    id: 4,
    name: "Урок анатомии",
    author: "Рембрандт",
    image: Rembrandt,
    description:"Это знаменитая картина, изображающая мастер-класс хирурга с учениками вокруг тела анатомируемого. Произведение отличается реалистичностью, драматизмом и мастерским использованием света и тени.",
    price: null,
    sale: null,
    status: "idle",
    images: [anatomia1,anatomia2,anatomia1],
  },
];

export const BUTTON_STATUS = {
  preloader: "Обработка",
  idle: "Купить",
  purchase: "В корзине",
};
