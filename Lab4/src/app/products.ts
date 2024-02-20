export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  rating: number;
  link: string;
  img: string[];
}

export const products = [
  {
    id: 1,
    name: 'Смартфон Apple iPhone 13 128Gb Midnight черный',
    price: 291024,
    description:`технология NFC: Да \n
    цвет: черный \n
    тип экрана: OLED, Super Retina XDR \n
    диагональ: 6.1 дюйм \n
    размер оперативной памяти: 4 ГБ \n
    процессор: 6-ядерный Apple A15 Bionic \n
    объем встроенной памяти: 128.0 ГБ \n
    емкость аккумулятора: 3095.0 мАч`,
    rating: 4.9,
    link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-midnight-chernyi-102298404/?c=750000000',
    img: ['https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/h3d/h8e/64208874405918.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/hfe/h17/64208876634142.jpg?format=gallery-medium']
  },
  {
    id: 2,
    name: 'Ноутбук Apple MacBook Air 13 MGN93 серебристый',
    price: 416156,
    description: `диагональ экрана: 13.3 дюйм
    процессор: Apple M1
    видеокарта: Apple M1
    размер оперативной памяти: 8.0 Гб
    тип жесткого диска: SSD
    общий объем накопителей: 256.0 Гб`,
    rating: 4.9,
    link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-mgn93-serebristyi-100798912/?c=750000000',
    img: ['https://resources.cdn-kaspi.kz/img/m/p/h9a/h35/64082972704798.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/hf9/h31/64082981224478.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/h9b/hed/64082975653918.jpg?format=gallery-medium']
  },
  {
    id: 3,
    name: 'Ноутбук Lenovo IdeaPad 3 15IGL05 81WQ00EMRK серый',
    price: 153733,
    description: `диагональ экрана: 15.6 дюйм
    процессор: Intel Celeron N4020
    видеокарта: Intel UHD Graphics 600
    размер оперативной памяти: 4.0 Гб
    тип жесткого диска: SSD
    общий объем накопителей: 256.0 Гб`,
    rating: 4.2,
    link: 'https://kaspi.kz/shop/p/lenovo-ideapad-3-15igl05-81wq00emrk-seryi-102878742/?c=750000000',
    img: ['https://resources.cdn-kaspi.kz/img/m/p/h89/haa/64373052571678.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/h5d/h65/64373055684638.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/h06/h47/64373056897054.jpg?format=gallery-medium']
  },
  {
    id: 4,
    name: 'Видеокарта GIGABYTE GeForce RTX 3090 Gaming OC GV-N3090GAMING OC-24GD 24GB',
    price: 2054853,
    description: `серия: GeForce RTX 30 Series
    частота графического процессора: 1755 МГц
    объем видеопамяти: 24.0 Гб
    тип видеопамяти: GDDR6X
    длина видеокарты: 320.0 мм
    рекомендуемая мощность блока питания: 750.0 Вт`,
    rating: 5.0,
    link: 'https://kaspi.kz/shop/p/gigabyte-geforce-rtx-3090-gaming-oc-gv-n3090gaming-oc-24gd-24gb-101809936/?c=750000000',
    img: ['https://resources.cdn-kaspi.kz/img/m/p/h4c/h9e/64182967173150.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/hba/h96/64182969827358.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/h15/he6/64183073570846.jpg?format=gallery-medium']
  },
  {
    id: 5,
    name: 'Телевизор Sony XR65A80L 165 см черный',
    price: 1799990,
    description: `тип: QLED-телевизор
    диагональ: 65.0 дюйм
    разрешение: 3840x2160
    поддержка HD: 4K HDR
    технология Smart TV: Да
    wi-Fi: Да
    входы: Bluetooth, ,Ethernet (RJ-45), ,USB, ,AV, ,HDMI`,
    rating: 4.8,
    link: 'https://kaspi.kz/shop/p/sony-xr65a80l-165-sm-chernyi-113640145/?c=750000000',
    img: ['https://resources.cdn-kaspi.kz/img/m/p/h60/hd6/84099014230046.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/h6a/h09/84099014295582.jpg?format=gallery-medium']
  },
  {
    id: 6,
    name: 'Смартфон Apple iPhone 15 Pro Max 256Gb серый',
    price: 614617,
    description: `технология NFC: Да
    цвет: серый
    тип экрана: OLED, Super Retina XDR display
    диагональ: 6.7 дюйм
    размер оперативной памяти: 8 ГБ
    процессор: 6-ядерный Apple A17 Pro
    объем встроенной памяти: 256.0 ГБ
    емкость аккумулятора: 4422.0 мАч`,
    rating: 5,
    link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-seryi-113138420/?c=750000000',
    img: ['https://resources.cdn-kaspi.kz/img/m/p/hc1/h65/83559848181790.png?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/hfb/hf5/83559848214558.png?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/h0e/h4d/83559847952414.jpg?format=gallery-medium']
  },
  {
    id: 7,
    name: 'Смартфон Xiaomi Redmi 12 4G 8 ГБ/256 ГБ черный',
    price: 72163,
    description: `технология NFC: Нет
    цвет: черный
    тип экрана: IPS, сенсорный
    диагональ: 6.79 дюйм
    размер оперативной памяти: 8 ГБ
    процессор: 8-ядерный MediaTek Helio G88
    объем встроенной памяти: 256.0 ГБ
    емкость аккумулятора: 5000.0 мАч`,
    rating: 4.4,
    link: 'https://kaspi.kz/shop/p/xiaomi-redmi-12-4g-8-gb-256-gb-chernyi-110918152/?c=750000000',
    img: ['https://resources.cdn-kaspi.kz/img/m/p/h75/hbc/81335343775774.png?format=gallery-large','https://resources.cdn-kaspi.kz/img/m/p/h3a/hac/81335343939614.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/h25/h7e/81335344136222.png?format=gallery-medium']
  },
  {
    id: 8,
    name: 'Смарт-часы Apple Watch Series 8 45 мм Aluminum starlight-бежевый',
    price: 186363,
    description: `поддержка платформ: iOS
    материал корпуса: алюминий
    цвет корпуса: starlight
    форма корпуса: прямоугольная
    интерфейсы: Bluetooth, ,Wi-Fi, ,NFC
    технология экрана: OLED
    объем встроенной памяти: 32 Гб
    время работы: в обычном режиме: 18 часов, в режиме энергосбережения: 36 часов`,
    rating: 4.7,
    link: 'https://kaspi.kz/shop/p/apple-watch-series-8-45-mm-aluminum-starlight-bezhevyi-106585021/?c=750000000',
    img: ['https://resources.cdn-kaspi.kz/img/m/p/hd4/h1c/64378501791774.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/h2b/h50/64378504642590.jpg?format=gallery-medium']
  },
  {
    id: 9,
    name: 'Наушники Marshall Major IV черный',
    price: 57899,
    description: `тип: гарнитура
    вид: накладные
    подключение: беспроводное
    тип акустического оформления: закрытые
    тип крепления: оголовье
    система активного шумоподавления: Нет
    микрофон: Да`,
    rating: 4.9,
    link: 'https://kaspi.kz/shop/p/marshall-major-iv-chernyi-102138144/?c=750000000',
    img: ['https://resources.cdn-kaspi.kz/img/m/p/h20/h21/64344048762910.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/h18/hae/64344053186590.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/h8e/h8a/64344057544734.jpg?format=gallery-medium']
  },
  {
    id: 10,
    name: 'Системный блок Tehnicom cyber sport 383 черный',
    price: 369999,
    description: `установленная ОС: Win 10
    процессор: Intel Core i3-10100f
    размер оперативной памяти: 32.0 Гб
    объем SSD: 512.0 Гб
    видеопроцессор: NVIDIA GeForce GTX 1660 super
    форм-фактор корпуса: Midi-Tower`,
    rating: 4.8,
    link: 'https://kaspi.kz/shop/p/tehnicom-cyber-sport-383-chernyi-110729335/?c=750000000',
    img: ['https://resources.cdn-kaspi.kz/img/m/p/h20/h04/81139689324574.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/hed/hdc/81139690700830.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/h4b/h7d/81139689914398.jpg?format=gallery-medium']
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/