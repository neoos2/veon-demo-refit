// All facts come from veon/client.json (ids in comments). Nothing here is invented.

export interface Branch {
  id: string;
  street: string; // C-005
  phoneDisplay: string;
  phoneHref: string;
  phoneShortLabel: string;
  hours: string[]; // C-007: schedule from the current homepage, to be confirmed by the client
  mapQuery: string;
  schemaHours: string[];
}

export const branches: Branch[] = [
  {
    id: "nauky",
    street: "пр.\u00A0Науки, 9\u00A0Д",
    phoneDisplay: "050 323 08 08",
    phoneHref: "tel:+380503230808",
    phoneShortLabel: "Науки",
    hours: ["Пн–пт: 10:00–19:00"],
    mapQuery: "Харків, проспект Науки, 9Д",
    schemaHours: ["Mo-Fr 10:00-19:00"],
  },
  {
    id: "traktorobudivnykiv",
    street: "пр.\u00A0Тракторобудівників, 1\u00A0Б",
    phoneDisplay: "050 343 60 40",
    phoneHref: "tel:+380503436040",
    phoneShortLabel: "Тракторобудівників",
    hours: ["Пн–пт: 9:00–19:00", "Сб: 9:00–17:00"],
    mapQuery: "Харків, проспект Тракторобудівників, 1Б",
    schemaHours: ["Mo-Fr 09:00-19:00", "Sa 09:00-17:00"],
  },
];

export const mapUrl = (q: string): string =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;

export const license = "Ліцензія МОЗ №3105/18-М"; // C-002

// C-010
export const indications: string[] = [
  "Біль і скутість у спині та суглобах",
  "Грижі міжхребцевих дисків",
  "Протрузії",
  "Артрози",
  "Сколіоз",
  "Біль у попереку при вагітності",
  "Реабілітація після травм і операцій",
  "Підготовка до ендопротезування",
  "Відновлення після ендопротезування",
];

export interface Service {
  id: string;
  title: string;
  text: string;
  price: number; // C-008
  oldPrice?: number;
  image: string;
  imageAlt: string;
  extra?: { title: string; items: string[] }; // C-011
}

// Descriptions are condensed from the texts on the client's current homepage.
export const services: Service[] = [
  {
    id: "consult",
    title: "Консультація лікаря",
    text: "Прийом веде лікар вищої категорії Кліментьєва Л. З. Можна пройти обстеження в ендокринолога, невролога, андролога.",
    price: 600,
    oldPrice: 700,
    image: "svc-consult",
    imageAlt: "Лікарка розмовляє з пацієнткою на консультації",
  },
  {
    id: "physio",
    title: "Лікувальна гімнастика",
    text: "Вправи й навантаження підбирають під діагноз і рівень підготовки. Заняття — на декомпресійних тренажерах.",
    price: 550,
    image: "svc-physio",
    imageAlt: "Реабілітологиня поправляє рух пацієнтки на тренажері",
  },
  {
    id: "kinesi",
    title: "Декомпресійна кінезотерапія",
    text: "Робота з обтяженням без компресійного тиску на хребет: зміцнює глибокі м'язи спини й знімає навантаження з дисків.",
    price: 550,
    image: "svc-kinesi",
    imageAlt: "Пацієнтка виконує вправу на м'ячі з тягою тренажера",
  },
  {
    id: "kids",
    title: "Дитячі програми",
    text: "Порушення постави: сколіоз, кіфоз, лордоз. Діти — з 10 років.",
    price: 350,
    oldPrice: 450,
    image: "svc-kids",
    imageAlt: "Тренерка займається з хлопчиком на килимку",
    extra: {
      title: "На пробне заняття візьміть",
      items: ["знімки: рентген, МРТ або КТ", "спортивну форму", "змінне взуття"],
    },
  },
];

// C-009 — актуальність пропозиції має підтвердити клієнт
export const military = {
  sessions: 12,
  price: 5400,
  regular: "10 800",
};

// C-013
export const doctor = {
  name: "Кліментьєва Людмила Зосимівна",
  role: "Лікар вищої категорії",
  years: 40,
  method: "Відновлювальна фізична терапія",
};

export const futureNote = "Розділ у розробці";
