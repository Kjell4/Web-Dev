export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  rating: number;
  link: string;
  img: string[];
  category: string;
  likes: number;
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
    img: ['https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/h3d/h8e/64208874405918.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/hfe/h17/64208876634142.jpg?format=gallery-medium'],
    category: 'Smartphones',
    likes: 0
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
    img: ['https://resources.cdn-kaspi.kz/img/m/p/h9a/h35/64082972704798.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/hf9/h31/64082981224478.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/h9b/hed/64082975653918.jpg?format=gallery-medium'],
    category: 'PCs and Laptops',
    likes: 0
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
    img: ['https://resources.cdn-kaspi.kz/img/m/p/h89/haa/64373052571678.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/h5d/h65/64373055684638.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/h06/h47/64373056897054.jpg?format=gallery-medium'],
    category: 'PCs and Laptops',
    likes: 0
  },
  {
    id: 4,
    name: 'Системный блок Tehnicom gaming pro 474 черный',
    price: 314999,
    description: `установленная ОС: Win 10
    процессор: Intel Core i5-10400f
    размер оперативной памяти: 32.0 Гб
    объем SSD: 1000.0 Гб
    видеопроцессор: NVIDIA GeForce RTX 2060 Super
    форм-фактор корпуса: Midi-Tower`,
    rating: 5.0,
    link: 'https://kaspi.kz/shop/p/tehnicom-gaming-pro-474-chernyi-109309517/?c=750000000',
    img: ['https://resources.cdn-kaspi.kz/img/m/p/h4b/hf5/81988895801374.png?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/hd6/h91/81988895965214.png?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/h04/h4a/81988896161822.png?format=gallery-medium'],
    category: 'PCs and Laptops',
    likes: 0
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
    img: ['https://resources.cdn-kaspi.kz/img/m/p/h60/hd6/84099014230046.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/h6a/h09/84099014295582.jpg?format=gallery-medium'],
    category: 'TVs',
    likes: 0
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
    img: ['https://resources.cdn-kaspi.kz/img/m/p/hc1/h65/83559848181790.png?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/hfb/hf5/83559848214558.png?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/h0e/h4d/83559847952414.jpg?format=gallery-medium'],
    category: 'Smartphones',
    likes: 0
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
    img: ['https://resources.cdn-kaspi.kz/img/m/p/h75/hbc/81335343775774.png?format=gallery-large','https://resources.cdn-kaspi.kz/img/m/p/h3a/hac/81335343939614.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/h25/h7e/81335344136222.png?format=gallery-medium'],
    category: 'Smartphones',
    likes: 0
  },
  {
    id: 8,
    name: 'Смартфон Xiaomi Redmi Note 12 6 ГБ/128 ГБ голубой',
    price: 67867,
    description: `технология NFC: Нет
    цвет: голубой
    тип экрана: AMOLED, сенсорный, Corning Gorilla Glass 3
    диагональ: 6.67 дюйм
    размер оперативной памяти: 6 ГБ
    процессор: 8-ядерный Qualcomm Snapdragon 685
    объем встроенной памяти: 128.0 ГБ
    емкость аккумулятора: 5000.0 мАч`,
    rating: 4.7,
    link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-12-6-gb-128-gb-goluboi-109772311/?c=750000000',
    img: ['https://resources.cdn-kaspi.kz/img/m/p/hb3/h06/79840503595038.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/h50/hb5/79840504119326.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/h90/h43/79840505692190.jpg?format=gallery-medium'],
    category: 'Smartphones',
    likes: 0
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
    img: ['https://resources.cdn-kaspi.kz/img/m/p/h20/h21/64344048762910.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/h18/hae/64344053186590.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/h8e/h8a/64344057544734.jpg?format=gallery-medium'],
    category: 'Headphones',
    likes: 0
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
    img: ['https://resources.cdn-kaspi.kz/img/m/p/h20/h04/81139689324574.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/hed/hdc/81139690700830.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/h4b/h7d/81139689914398.jpg?format=gallery-medium'],
    category: 'PCs and Laptops',
    likes: 0
  },
  {
    id: 11,
    name: 'Смартфон Samsung Galaxy A24 6 ГБ/128 ГБ черный',
    price: 87899,
    description: `технология NFC: Да
    цвет: черный
    тип экрана: Super AMOLED, сенсорный
    диагональ: 6.5 дюйм
    размер оперативной памяти: 6 ГБ
    процессор: 8-ядерный MediaTek Helio G99
    объем встроенной памяти: 128.0 ГБ
    емкость аккумулятора: 5000.0 мАч`,
    rating: 4.5,
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-a24-6-gb-128-gb-chernyi-110343531/?c=750000000',
    img: ['https://resources.cdn-kaspi.kz/img/m/p/hdc/h12/80750151303198.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/hfb/haa/80750151368734.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/h1d/hed/80750151565342.jpg?format=gallery-medium'],
    category: 'Smartphones',
    likes: 0
  },
  {
    id: 12,
    name: 'Наушники Apple AirPods Pro 2nd generation with Wireless MagSafe Charging Case белый',
    price: 109981,
    description: `тип: наушники
    вид: внутриканальные
    подключение: беспроводное
    тип акустического оформления: закрытые
    тип крепления: без крепления
    система активного шумоподавления: Да
    микрофон: Да`,
    rating: 4.9,
    link: 'https://kaspi.kz/shop/p/apple-airpods-pro-2nd-generation-with-wireless-magsafe-charging-case-belyi-113677582/?c=750000000',
    img: ['https://resources.cdn-kaspi.kz/img/m/p/ha3/h07/84108189630494.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/h03/h0e/84108189696030.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/h14/h8a/84108189761566.jpg?format=gallery-medium'],
    category: 'Headphones',
    likes: 0
  },
  {
    id: 13,
    name: 'Наушники JBL Tune 510BT черный',
    price: 19299,
    description: `тип: гарнитура
    вид: накладные
    подключение: беспроводное
    тип акустического оформления: закрытые
    тип крепления: оголовье
    система активного шумоподавления: Нет
    микрофон: Да`,
    rating: 4.8,
    link: 'https://kaspi.kz/shop/p/jbl-tune-510bt-chernyi-101420081/?c=750000000',
    img: ['https://resources.cdn-kaspi.kz/img/m/p/hef/h29/64030233788446.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/h36/ha0/64030236114974.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/he5/he2/64030238048286.jpg?format=gallery-medium'],
    category: 'Headphones',
    likes: 0
  },
  {
    id: 14,
    name: 'Наушники Beats Solo 3 Wireless черный',
    price: 82106,
    description: `тип: гарнитура
    вид: накладные
    подключение: беспроводное
    тип акустического оформления: закрытые
    тип крепления: оголовье
    система активного шумоподавления: Нет
    микрофон: Нет`,
    rating: 4.5,
    link: 'https://kaspi.kz/shop/p/beats-solo-3-wireless-chernyi-4801909/?c=750000000',
    img: ['https://resources.cdn-kaspi.kz/img/m/p/h32/h49/63774399856670.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/h82/h73/63774400446494.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/hd5/h1a/63774401101854.jpg?format=gallery-medium'],
    category: 'Headphones',
    likes: 0
  },
  {
    id: 15,
    name: 'Наушники Realme Buds T100 синий',
    price: 9998,
    description: `тип: гарнитура
    вид: внутриканальные
    подключение: беспроводное
    тип акустического оформления: закрытые
    тип крепления: без крепления
    система активного шумоподавления: Нет
    микрофон: Да`,
    rating: 4.8,
    link: 'https://kaspi.kz/shop/p/realme-buds-t100-sinii-109855444/?c=750000000',
    img: ['https://resources.cdn-kaspi.kz/img/m/p/h68/hcc/80008401027102.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/h9a/h4b/80008401551390.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/h14/hb2/80008402075678.jpg?format=gallery-medium'],
    category: 'Headphones',
    likes: 0
  },
  {
    id: 16,
    name: 'Системный блок Tehnicom FPS max 288 черный',
    price: 459999,
    description: `установленная ОС: ОС не установлена
    процессор: Intel Core i5 12400f
    размер оперативной памяти: 32.0 Гб
    объем SSD: 512.0 Гб
    видеопроцессор: GeForce RTX 4060
    объем HDD: 1000.0 Гб
    форм-фактор корпуса: Midi-Tower`,
    rating: 5.0,
    link: 'https://kaspi.kz/shop/p/tehnicom-fps-max-288-chernyi-101084634/?c=750000000',
    img: ['https://resources.cdn-kaspi.kz/img/m/p/h20/h2f/83020103385118.png?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/h58/h74/83020104007710.png?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/h29/hd4/83020104171550.png?format=gallery-medium'],
    category: 'PCs and Laptops',
    likes: 0
  },
  {
    id: 17,
    name: 'Телевизор Haier 50 Smart TV AX Pro 127 см серебристый',
    price: 359990,
    description: `тип: LED-телевизор
    диагональ: 50.0 дюйм
    разрешение: 3840x2160
    поддержка HD: 4K UHD
    технология Smart TV: Да
    wi-Fi: Да
    входы: аудио, ,композитный, ,HDMI, ,USB, ,антенный`,
    rating: 4.2,
    link: 'https://kaspi.kz/shop/p/haier-50-smart-tv-ax-pro-127-sm-serebristyi-116516893/?c=750000000',
    img: ['https://resources.cdn-kaspi.kz/img/m/p/h98/h2c/85130002432030.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/h82/hb5/85130002497566.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/h6f/h2f/85130002628638.jpg?format=gallery-medium'],
    category: 'TVs',
    likes: 0
  },
  {
    id: 18,
    name: 'Телевизор Samsung UE55CU8000UXUZ черный',
    price: 404990,
    description: `тип: LED-телевизор
    диагональ: 55.0 дюйм
    разрешение: 3840x2160
    поддержка HD: 4K UHD
    технология Smart TV: Да
    wi-Fi: Да
    входы: HDMI`,
    rating: 4.5,
    link: 'https://kaspi.kz/shop/p/samsung-ue55cu8000uxuz-chernyi-116669054/?c=750000000',
    img: ['https://resources.cdn-kaspi.kz/img/m/p/h40/hda/85181955670046.png?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/haf/h4d/85181955735582.png?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/hcd/h40/85181955801118.png?format=gallery-medium'],
    category: 'TVs',
    likes: 0
  },
  {
    id: 19,
    name: 'Телевизор Hisense 65A85K черный',
    price: 1498980,
    description: `тип: OLED-телевизор
    диагональ: 65.0 дюйм
    разрешение: 3840x2160
    поддержка HD: 4K UHD
    технология Smart TV: Да
    wi-Fi: Да
    входы: HDMI, ,USB`,
    rating: 4.8,
    link: 'https://kaspi.kz/shop/p/hisense-65a85k-chernyi-116485752/?c=750000000',
    img: ['https://resources.cdn-kaspi.kz/img/m/p/hec/h12/85120319488030.png?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/h24/h69/85120319553566.png?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/h04/hd2/85120319619102.png?format=gallery-medium'],
    category: 'TVs',
    likes: 0
  },
  {
    id: 20,
    name: 'Телевизор LG 65QNED756RA 165 см черный',
    price: 644890,
    description: `тип: QNED-телевизор
    диагональ: 65.0 дюйм
    разрешение: 3840x2160
    поддержка HD: 4K UHD
    технология Smart TV: Да
    wi-Fi: Да
    входы: HDMI, ,Bluetooth, ,Ethernet (RJ-45), ,антенный`,
    rating: 4.8,
    link: 'https://kaspi.kz/shop/p/lg-65qned756ra-165-sm-chernyi-115113825/?c=750000000',
    img: ['https://resources.cdn-kaspi.kz/img/m/p/hfe/hec/84644179378206.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/ha0/h94/84644179443742.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/hbb/h75/84644179509278.jpg?format=gallery-medium'],
    category: 'TVs',
    likes: 0
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/