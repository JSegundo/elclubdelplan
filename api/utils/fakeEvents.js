const events = [
  {
    id: 1,
    name: "Lollapalooza",
    description: "lorem ipsum...",
    image:
      "https://pbs.twimg.com/profile_images/1500933654830276608/PBf2KquH_400x400.jpg",
    startDate: new Date(2022, 04, 21),
    endDate: new Date(2022, 04, 23),
    paymentDay: null,
    time: "17:00",
    location: "Hipódromo de Palermo, Buenos Aires",
    category: "Concert",
    private: false,
    destacado: true,
    totalPrice: 11000,
  },
  {
    id: 2,
    name: "Cosquín Rock",
    description: "lorem ipsum...",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpE500YCm2dI6vMH2K6qMuPgMkDvJALf9RRg&usqp=CAU",

    startDate: new Date(2022, 04, 28),
    endDate: new Date(2022, 04, 30),
    paymentDay: null,

    time: "15:00",
    location: "Aeroclub Santa María de Punilla, Córdoba",
    category: "Concert",
    private: false,
    destacado: true,
    totalPrice: 9000,
  },
  {
    id: 3,
    name: "Quilmes Rock",
    description: "lorem ipsum...",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVjZhYW7SVyf8Akzzd-NNqmzXVEpJ6svC62Q&usqp=CAU",

    startDate: new Date(2022, 05, 21),
    endDate: new Date(2022, 05, 23),
    paymentDay: null,

    time: "16:00",
    location: "Tecnópolis, Buenos Aires",
    category: "Concert",
    private: false,
    destacado: true,
    totalPrice: 10500,
  },
  {
    id: 4,
    name: "Coldplay",
    description: "lorem ipsum...",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0Kt5VeujJ0DyJ2SXR956PDmi0sgAtcGKZhg&usqp=CAU",

    startDate: new Date(2022, 05, 10),
    endDate: new Date(2022, 05, 10),
    paymentDay: null,

    time: "18:00",
    location: "Estadio River Plate, Buenos Aires",
    category: "Concert",
    private: false,
    destacado: true,
    totalPrice: 15000,
  },
  {
    id: 5,
    name: "Cumpleaños Marcos",
    description: "lorem ipsum...",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEesccfOXtsDa18cKUjoB0aL8xtPr9-1gyWQ&usqp=CAU",

    startDate: new Date(2022, 04, 21),
    endDate: new Date(2022, 04, 21),
    paymentDay: null,

    time: "21:00",
    location: "Antares Nueva Córdoba -  San Lorenzo 79, Córdoba",
    category: "Social event",
    private: true,
    destacado: false,
  },
  {
    id: 6,
    name: "Cumpleaños Agustina",
    description: "lorem ipsum...",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0TgWEh39xjel0fQfshgcY3TrSyn21hsj_Xg&usqp=CAU",

    startDate: new Date(2022, 05, 01),
    endDate: new Date(2022, 05, 01),
    paymentDay: null,

    time: "22:00",
    location: "Vidón-Bar - Achával Rodríguez 152, Córdoba",
    category: "Social event",
    private: true,
    destacado: false,
  },
  {
    id: 7,
    name: "Cumpleaños Maggy",
    description: "lorem ipsum...",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREmFuC9yq-ZFwYGiyDNPXbjdyzB5gyNQHiGw&usqp=CAU",

    startDate: new Date(2022, 04, 21),
    endDate: new Date(2022, 04, 21),
    paymentDay: null,

    time: "22:30",
    location:
      "Cruz Espacio -  Av. Ramón Cárcano 120, Chateau Carreras, Córdoba",
    category: "Social event",
    private: true,
    destacado: false,
  },
  {
    id: 8,
    name: "Cumpleaños Gonzalo",
    description: "lorem ipsum...",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCy-dcspdIfjaL6dDUiRTP_LnFWGcA0kszMw&usqp=CAU",

    startDate: new Date(2022, 03, 21),
    endDate: new Date(2022, 03, 21),
    paymentDay: null,

    time: "20:30",
    location: "Cervecería Capitán - Achával Rodríguez 244, Córdoba",
    category: "Social event",
    private: true,
    destacado: false,
  },
  {
    id: 9,
    name: "After Office Globant",
    description: "lorem ipsum...",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxc21-gVXu_MP75NtGhUb1ZgOUBul90D2XRg&usqp=CAU",

    startDate: new Date(2022, 04, 15),
    endDate: new Date(2022, 04, 15),
    paymentDay: null,

    time: "20:30",
    location: "Cervecería BarBeer - Hipólito Yrigoyen 81, Córdoba",
    category: "Social event",
    private: true,
    destacado: false,
  },
  {
    id: 10,
    name: "After Office Santex",
    description: "lorem ipsum...",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCy-dcspdIfjaL6dDUiRTP_LnFWGcA0kszMw&usqp=CAU",

    startDate: new Date(2022, 04, 18),
    endDate: new Date(2022, 04, 18),
    paymentDay: null,

    time: "17:30",
    location: "Cervecería Capitán - Achával Rodríguez 244, Córdoba",
    category: "Social event",
    private: true,
    destacado: false,
  },
  {
    id: 11,
    name: "After Office Apex",
    description: "lorem ipsum...",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpeUvbserY2xOoPDrsGXRBZJ_sbQB4c6pWQQ&usqp=CAU",

    startDate: new Date(2022, 04, 10),
    endDate: new Date(2022, 04, 10),
    paymentDay: null,

    time: "20:30",
    location: "Los Infernales - General Manuel Belgrano 631, Córdoba",
    category: "Social event",
    private: true,
    destacado: false,
  },
  {
    id: 12,
    name: "Futbol 7 - Juan",
    description: "lorem ipsum...",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPL4Q6vuNOp5wxqkn2QqFv1xhStEKW9__cpw&usqp=CAU",

    startDate: new Date(2022, 03, 21),
    endDate: new Date(2022, 03, 21),
    paymentDay: null,

    time: "21:00",
    location: "La Gran 7 -  Concepción Arenal, Córdoba",
    category: "Sports",
    private: true,
    destacado: false,
  },
  {
    id: 13,
    name: "Futbol 7 - Marcos",
    description: "lorem ipsum...",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPL4Q6vuNOp5wxqkn2QqFv1xhStEKW9__cpw&usqp=CAU",

    startDate: new Date(2022, 04, 01),
    endDate: new Date(2022, 04, 01),
    paymentDay: null,

    time: "20:00",
    location: "La Gran 7 -  Concepción Arenal, Córdoba",
    category: "Sports",
    private: true,
    destacado: false,
  },
  {
    id: 14,
    name: "Futbol 7 - Micaela",
    description: "lorem ipsum...",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPL4Q6vuNOp5wxqkn2QqFv1xhStEKW9__cpw&usqp=CAU",

    startDate: new Date(2022, 03, 21),
    endDate: new Date(2022, 03, 21),
    paymentDay: null,

    time: "21:00",
    location: "La Gran 7 -  Concepción Arenal, Córdoba",
    category: "Sports",
    private: true,
    destacado: false,
  },
  {
    id: 15,
    name: "Futbol 7 - Pedro",
    description: "lorem ipsum...",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPL4Q6vuNOp5wxqkn2QqFv1xhStEKW9__cpw&usqp=CAU",

    startDate: new Date(2022, 02, 21),
    endDate: new Date(2022, 02, 21),
    paymentDay: null,

    time: "20:00",
    location: "La Gran 7 -  Concepción Arenal, Córdoba",
    category: "Sports",
    private: true,
    destacado: false,
  },
  {
    id: 16,
    name: "Lista Flor ",
    description: "lorem ipsum...",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyP3Hr_QSJrNZhIxvJnxi98mD4SFnUyoUD8sPiGEAWYTdHV4JIRIG9q5Y8Z8zWaxugiSE&usqp=CAU",

    startDate: new Date(2022, 05, 17),
    endDate: new Date(2022, 04, 18),
    paymentDay: null,

    time: "22:00",
    location: "Le Parc -  Av Vélez Sarsfield 753, Córdoba",
    category: "Social event",
    private: true,
    destacado: false,
  },
  {
    id: 17,
    name: "Lista Agus",
    description: "lorem ipsum...",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyP3Hr_QSJrNZhIxvJnxi98mD4SFnUyoUD8sPiGEAWYTdHV4JIRIG9q5Y8Z8zWaxugiSE&usqp=CAU",

    startDate: new Date(2022, 04, 11),
    endDate: new Date(2022, 04, 12),
    paymentDay: null,

    time: "22:00",
    location: "Bartó -   Av. Marcelo T. de Alvear 635, Córdoba",
    category: "Social event",
    private: true,
    destacado: false,
  },
  {
    id: 18,
    name: "Lista Cande",
    description: "lorem ipsum...",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyP3Hr_QSJrNZhIxvJnxi98mD4SFnUyoUD8sPiGEAWYTdHV4JIRIG9q5Y8Z8zWaxugiSE&usqp=CAU",
    startDate: new Date(2022, 04, 21),
    endDate: new Date(2022, 04, 21),
    time: "20:00",
    paymentDay: null,

    location: "María María -  Av. Marcelo T. de Alvear 386, Córdoba",
    category: "Social event",
    private: true,
    destacado: false,
  },
  {
    id: 19,
    name: "Spydi y sus amigos",
    description: "lorem ipsum...",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIWCNfj4tROoI0ZQRLa_dpI-_76pvNY-o5cQ&usqp=CAU",

    startDate: new Date(2022, 05, 12),
    endDate: new Date(2022, 05, 12),
    paymentDay: null,

    time: "22:15",
    location: "Hoyts Patio Olmos, Córdoba",
    category: "Cinema",
    private: false,
    destacado: true,
    totalPrice: 900,
  },
  {
    id: 20,
    name: "Batman",
    description: "lorem ipsum...",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.rNWoTqiGrlXCznxK5vnRpwHaEK%26pid%3DApi&f=1",

    startDate: new Date(2022, 04, 02),
    endDate: new Date(2022, 04, 03),
    paymentDay: null,

    time: "23:25",
    location: "Hoyts Nuevo Centro, Córdoba",
    category: "Cinema",
    private: false,
    destacado: true,
    totalPrice: 900,
  },
  {
    id: 21,
    name: "Spiderman",
    description: "lorem ipsum...",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIWCNfj4tROoI0ZQRLa_dpI-_76pvNY-o5cQ&usqp=CAU",
    startDate: new Date(2022, 04, 14),
    endDate: new Date(2022, 04, 15),
    time: "23:00",
    paymentDay: null,

    location: "Hoyts Nuevo Centro, Córdoba",
    category: "Cinema",
    private: false,
    totalPrice: 800,
  },
  {
    id: 22,
    name: "Kolombo",
    description: "lorem ipsum...",
    image: "https://virtualtkt.com/repo/images/VAG4X9.jpg",
    startDate: new Date(2022, 06, 17),
    endDate: new Date(2022, 06, 18),
    time: "23:25",
    paymentDay: null,

    location: "Visión Festival - Neuquén",
    category: "Party",
    private: false,
    totalPrice: 6000,
    destacado: true,
  },
  {
    id: 23,
    name: "Hernán Cattáneo",
    description: "lorem ipsum...",
    image:
      "https://d3ugyf2ht6aenh.cloudfront.net/stores/536/860/products/libro-hernan-cattaneo1-4d6d150966d1dce0fa16230298728167-480-0.jpg",

    startDate: new Date(2022, 06, 14),
    endDate: new Date(2022, 06, 15),
    paymentDay: null,

    time: "00:00",
    location: "Río Electronic Music - Buenos Aires",
    category: "Party",
    private: false,
    totalPrice: 4500,
    destacado: true,
  },
  {
    id: 24,
    name: "Feria degustar",
    description: "lorem ipsum...",
    image:
      "https://www.infobae.com/new-resizer/wd2nNWDrR-JsJvAgXNGQtbZeOvs=/1200x900/filters:format(webp:quality(85//s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/05/20114815/vinos-41.jpg",

    startDate: new Date(2022, 06, 12),
    endDate: new Date(2022, 06, 12),
    paymentDay: null,

    time: "23:25",
    location: "Palermo - Buenos Aires",
    category: "Gastronomy",

    private: false,
    totalPrice: 2100,
  },
  {
    id: 25,
    name: "Maldini Fest",
    description: "lorem ipsum...",
    image:
      "https://www.saavedraonline.com.ar/wp-content/uploads/2020/03/maldini.jpg",

    startDate: new Date(2022, 05, 14),
    endDate: new Date(2022, 05, 15),
    paymentDay: null,

    time: "23:25",
    location: "Saavedra - Buenos Aires",
    category: "Bar",
    private: false,
    totalPrice: 6000,
  },
  {
    id: 26,
    name: "Pltz",
    description: "lorem ipsum...",
    image:
      "https://i0.wp.com/revistag7.com/wp-content/uploads/2021/02/MG_6734_edicion_alta.jpg?fit=1080%2C720&ssl=1",
    startDate: new Date(2022, 06, 14),
    endDate: new Date(2022, 06, 15),
    time: "23:25",

    paymentDay: null,

    location: "Palermo - Buenos Aires",
    category: "Bar",
    private: false,
    totalPrice: 3000,
  },
  {
    id: 27,
    name: "Teatro Ciego",
    description: "lorem ipsum...",
    image:
      "https://encolombia.com/wp-content/uploads/2021/07/Elementos-del-Teatro.jpg",

    startDate: new Date(2022, 04, 29),
    endDate: new Date(2022, 04, 29),
    paymentDay: null,

    time: "20:20",
    location: "Recoleta - Buenos Aires",
    category: "Social event",
    private: false,
    totalPrice: 1400,
  },
  {
    id: 28,
    name: "A ciegas Gourmet",
    description: "lorem ipsum...",
    image:
      "https://offloadmedia.feverup.com/madridsecreto.co/wp-content/uploads/2021/03/03044328/dining-in-the-dark-madrid-3.jpg",

    startDate: new Date(2022, 06, 14),
    endDate: new Date(2022, 06, 14),
    paymentDay: null,

    time: "20:25",
    location: "Recoleta - Buenos Aires",
    category: "Gastronomy",
    private: false,
    totalPrice: 600,
    destacado: true,
  },
  {
    id: 29,
    name: "The Hobbit",
    description: "lorem ipsum...",
    image: "https://wallpaperaccess.com/full/830842.jpg",

    startDate: new Date(2022, 06, 14),
    endDate: new Date(2022, 06, 15),
    paymentDay: null,

    time: "22:00",
    location: "Cinemark Palermo - Buenos Aires",
    category: "Cinema",
    private: false,
    totalPrice: 1000,
    destacado: true,
  },
  {
    id: 30,
    name: "Dune",
    description: "lorem ipsum...",
    image:
      "https://lh3.googleusercontent.com/-km726JvA5ds/YTlfBh2p8dI/AAAAAAAAOCo/3iyoTQtCoBArMzkOP2Q9tDgmfAneRwZJgCLcBGAsYHQ/w437-h640/E-xdddtWQAQ3YLh.jpg",

    startDate: new Date(2022, 06, 14),
    endDate: new Date(2022, 06, 14),
    paymentDay: null,

    time: "21:00",
    location: "IMAX - Buenos Aires",
    category: "Cinema",
    private: false,
    totalPrice: 900,
  },
];

module.exports = events;
