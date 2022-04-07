const events = [
  {
    id: 1,
    name: "Lollapalooza",
    description:
      "Lollapalooza​ es un festival musical de los Estados Unidos que originalmente ofrecía bandas de rock alternativo, indie y punk rock; también hay actuaciones cómicas y de danza. Concebido en 1991 por Perry Farrell, cantante de Jane's Addiction, Lollapalooza se realizó anualmente hasta 1997 y fue revivido en 2003.",
    image:
      "https://pbs.twimg.com/profile_images/1500933654830276608/PBf2KquH_400x400.jpg",
    startDate: new Date(2022, 04, 21),
    endDate: new Date(2022, 04, 23),
    paymentDay: null,
    time: "17:00",
    location: "Hipódromo de Palermo, Buenos Aires",
    isPrivate: false,
    category: "Concert",
    destacado: true,
    pricePerPerson: 11000,
  },
  {
    id: 2,
    name: "Cosquín Rock",
    description:
      "El Cosquín Rock es un festival de música que se lleva a cabo anualmente, desde 2001, en la provincia de Córdoba, con una duración promedio de 2 a 3 días.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpE500YCm2dI6vMH2K6qMuPgMkDvJALf9RRg&usqp=CAU",

    startDate: new Date(2022, 04, 28),
    endDate: new Date(2022, 04, 30),
    paymentDay: null,
    time: "15:00",
    location: "Aeroclub Santa María de Punilla, Córdoba",
    isPrivate: false,
    category: "Concert",
    destacado: true,
    pricePerPerson: 9000,
  },
  {
    id: 3,
    name: "Quilmes Rock",
    description:
      "Quilmes Rock es una presentación musical anual patrocinada por Cervecería Quilmes y realizada en Argentina. Convoca tanto a artistas argentinos como así también de otras nacionalidades. ",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVjZhYW7SVyf8Akzzd-NNqmzXVEpJ6svC62Q&usqp=CAU",

    startDate: new Date(2022, 05, 21),
    endDate: new Date(2022, 05, 23),
    paymentDay: null,

    time: "16:00",
    location: "Tecnópolis, Buenos Aires",

    isPrivate: false,

    category: "Concert",
    destacado: true,
    pricePerPerson: 10500,
  },
  {
    id: 4,
    name: "Coldplay",
    description:
      "Coldplay es una banda británica de pop rock y rock alternativo formada en Londres en 1996.​​ Está integrada por Chris Martin, Jon Buckland, Guy Berryman y Will Champion. Es uno de los grupos más relevantes de principios de la década de los 2000. Wikipedia",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0Kt5VeujJ0DyJ2SXR956PDmi0sgAtcGKZhg&usqp=CAU",

    startDate: new Date(2022, 05, 10),
    endDate: new Date(2022, 05, 10),
    paymentDay: null,

    time: "18:00",
    location: "Estadio River Plate, Buenos Aires",

    isPrivate: false,

    category: "Concert",
    destacado: true,
    pricePerPerson: 15000,
  },
  {
    id: 5,
    name: "Cumpleaños Marcos",
    description:
      "Hola amigues, hago mi cumple el día 21 de Abril. Tienen todos los detalles en el evento. PD: El que no trae regalo, no entra.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEesccfOXtsDa18cKUjoB0aL8xtPr9-1gyWQ&usqp=CAU",

    startDate: new Date(2022, 04, 21),
    endDate: new Date(2022, 04, 21),
    paymentDay: null,

    time: "21:00",
    location: "Antares Nueva Córdoba -  San Lorenzo 79, Córdoba",

    isPrivate: true,

    category: "Social event",
    destacado: false,
  },
  {
    id: 6,
    name: "Cumpleaños Agustina",
    description:
      "Hola amigues, los invito a mi birthday. Tienen todos los detalles en el evento. PD: El que no trae regalo, no entra.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0TgWEh39xjel0fQfshgcY3TrSyn21hsj_Xg&usqp=CAU",

    startDate: new Date(2022, 05, 01),
    endDate: new Date(2022, 05, 01),
    paymentDay: null,

    time: "22:00",
    location: "Vidón-Bar - Achával Rodríguez 152, Córdoba",

    isPrivate: true,

    category: "Social event",
    destacado: false,
  },
  {
    id: 7,
    name: "Cumpleaños Maggy",
    description:
      "Hola amigues, los invito a mi birthday. Tienen todos los detalles en el evento. PD: El que no trae regalo, no entra.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREmFuC9yq-ZFwYGiyDNPXbjdyzB5gyNQHiGw&usqp=CAU",

    startDate: new Date(2022, 04, 21),
    endDate: new Date(2022, 04, 21),
    paymentDay: null,

    time: "22:30",
    location:
      "Cruz Espacio -  Av. Ramón Cárcano 120, Chateau Carreras, Córdoba",

    isPrivate: true,

    category: "Social event",
    destacado: false,
  },
  {
    id: 8,
    name: "Cumpleaños Gonzalo",
    description:
      "Hola amigues, los invito a mi birthday. Tienen todos los detalles en el evento. PD: El que no trae regalo, no entra.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCy-dcspdIfjaL6dDUiRTP_LnFWGcA0kszMw&usqp=CAU",

    startDate: new Date(2022, 03, 21),
    endDate: new Date(2022, 03, 21),
    paymentDay: null,

    time: "20:30",
    location: "Cervecería Capitán - Achával Rodríguez 244, Córdoba",

    isPrivate: true,

    category: "Social event",
    destacado: false,
  },
  {
    id: 9,
    name: "After Office Globant",
    description: "Muchaches, hacemos after después de la ofi, no falten...",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxc21-gVXu_MP75NtGhUb1ZgOUBul90D2XRg&usqp=CAU",

    startDate: new Date(2022, 04, 15),
    endDate: new Date(2022, 04, 15),
    paymentDay: null,

    time: "20:30",
    location: "Cervecería BarBeer - Hipólito Yrigoyen 81, Córdoba",

    isPrivate: true,

    category: "Social event",
    destacado: false,
  },
  {
    id: 10,
    name: "After Office Santex",
    description: "Muchaches, hacemos after después de la ofi, no falten...",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCy-dcspdIfjaL6dDUiRTP_LnFWGcA0kszMw&usqp=CAU",

    startDate: new Date(2022, 04, 18),
    endDate: new Date(2022, 04, 18),
    paymentDay: null,

    time: "17:30",
    location: "Cervecería Capitán - Achával Rodríguez 244, Córdoba",

    isPrivate: true,

    category: "Social event",
    destacado: false,
  },
  {
    id: 11,
    name: "After Office Apex",
    description: "Muchaches, hacemos after después de la ofi, no falten...",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpeUvbserY2xOoPDrsGXRBZJ_sbQB4c6pWQQ&usqp=CAU",

    startDate: new Date(2022, 04, 10),
    endDate: new Date(2022, 04, 10),
    paymentDay: null,

    time: "20:30",
    location: "Los Infernales - General Manuel Belgrano 631, Córdoba",

    isPrivate: true,

    category: "Social event",
    destacado: false,
  },
  {
    id: 12,
    name: "Futbol 7 - Juan",
    description:
      "Se arma fulbito, va a ser mixto. La idea es quedarnos a tomar algo después del partido.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPL4Q6vuNOp5wxqkn2QqFv1xhStEKW9__cpw&usqp=CAU",

    startDate: new Date(2022, 03, 21),
    endDate: new Date(2022, 03, 21),
    paymentDay: null,

    time: "21:00",
    location: "La Gran 7 -  Concepción Arenal, Córdoba",
    isPrivate: true,

    category: "Sports",
    destacado: false,
  },
  {
    id: 13,
    name: "Futbol 7 - Marcos",
    description:
      "Se arma fulbito, va a ser mixto. La idea es quedarnos a tomar algo después del partido.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPL4Q6vuNOp5wxqkn2QqFv1xhStEKW9__cpw&usqp=CAU",

    startDate: new Date(2022, 04, 01),
    endDate: new Date(2022, 04, 01),
    paymentDay: null,

    time: "20:00",
    location: "La Gran 7 -  Concepción Arenal, Córdoba",
    isPrivate: true,

    category: "Sports",
    destacado: false,
  },
  {
    id: 14,
    name: "Futbol 7 - Micaela",
    description:
      "Se arma fulbito, va a ser mixto. La idea es quedarnos a tomar algo después del partido.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPL4Q6vuNOp5wxqkn2QqFv1xhStEKW9__cpw&usqp=CAU",

    startDate: new Date(2022, 03, 21),
    endDate: new Date(2022, 03, 21),
    paymentDay: null,

    time: "21:00",
    location: "La Gran 7 -  Concepción Arenal, Córdoba",

    isPrivate: true,

    category: "Sports",
    destacado: false,
  },
  {
    id: 15,
    name: "Futbol 7 - Pedro",
    description:
      "Se arma fulbito, va a ser mixto. La idea es quedarnos a tomar algo después del partido.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPL4Q6vuNOp5wxqkn2QqFv1xhStEKW9__cpw&usqp=CAU",

    startDate: new Date(2022, 02, 21),
    endDate: new Date(2022, 02, 21),
    paymentDay: null,

    time: "20:00",
    location: "La Gran 7 -  Concepción Arenal, Córdoba",

    isPrivate: true,

    category: "Sports",
    destacado: false,
  },
  {
    id: 16,
    name: "Lista Flor ",
    description: "Nos juntamos a tomar algo",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyP3Hr_QSJrNZhIxvJnxi98mD4SFnUyoUD8sPiGEAWYTdHV4JIRIG9q5Y8Z8zWaxugiSE&usqp=CAU",

    startDate: new Date(2022, 05, 17),
    endDate: new Date(2022, 04, 18),
    paymentDay: null,

    time: "22:00",
    location: "Le Parc -  Av Vélez Sarsfield 753, Córdoba",

    isPrivate: true,

    category: "Social event",
    destacado: false,
  },
  {
    id: 17,
    name: "Lista Agus",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyP3Hr_QSJrNZhIxvJnxi98mD4SFnUyoUD8sPiGEAWYTdHV4JIRIG9q5Y8Z8zWaxugiSE&usqp=CAU",

    startDate: new Date(2022, 04, 11),
    endDate: new Date(2022, 04, 12),
    paymentDay: null,

    time: "22:00",
    location: "Bartó -   Av. Marcelo T. de Alvear 635, Córdoba",

    isPrivate: true,

    category: "Social event",
    destacado: false,
  },
  {
    id: 18,
    name: "Lista Cande",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyP3Hr_QSJrNZhIxvJnxi98mD4SFnUyoUD8sPiGEAWYTdHV4JIRIG9q5Y8Z8zWaxugiSE&usqp=CAU",
    startDate: new Date(2022, 04, 21),
    endDate: new Date(2022, 04, 21),
    time: "20:00",
    paymentDay: null,

    location: "María María -  Av. Marcelo T. de Alvear 386, Córdoba",

    isPrivate: true,

    category: "Social event",
    destacado: false,
  },
  {
    id: 19,
    name: "Spydi y sus amigos",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIWCNfj4tROoI0ZQRLa_dpI-_76pvNY-o5cQ&usqp=CAU",

    startDate: new Date(2022, 05, 12),
    endDate: new Date(2022, 05, 12),
    paymentDay: null,

    time: "22:15",
    location: "Hoyts Patio Olmos, Córdoba",

    isPrivate: false,

    category: "Cinema",
    destacado: true,
    pricePerPerson: 900,
  },
  {
    id: 20,
    name: "Batman",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.rNWoTqiGrlXCznxK5vnRpwHaEK%26pid%3DApi&f=1",

    startDate: new Date(2022, 04, 02),
    endDate: new Date(2022, 04, 03),
    paymentDay: null,

    time: "23:25",
    location: "Hoyts Nuevo Centro, Córdoba",

    isPrivate: false,

    category: "Cinema",
    destacado: true,
    pricePerPerson: 900,
  },
  {
    id: 21,
    name: "Spiderman",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIWCNfj4tROoI0ZQRLa_dpI-_76pvNY-o5cQ&usqp=CAU",
    startDate: new Date(2022, 04, 14),
    endDate: new Date(2022, 04, 15),
    time: "23:00",
    paymentDay: null,

    location: "Hoyts Nuevo Centro, Córdoba",

    isPrivate: false,

    category: "Cinema",
    pricePerPerson: 800,
  },
  {
    id: 22,
    name: "Kolombo",
    description:
      "El belga Olivier Grégoire, conocido como el «genio del groove», se ha convertido en uno de los artistas más reconocidos y respetados de la escena musical. Se destaca por su espíritu innovador y creativo, ingredientes clave para el éxito cosechado hasta el momento. No te duermas con las entradas, 17/6.",
    image: "https://virtualtkt.com/repo/images/VAG4X9.jpg",
    startDate: new Date(2022, 06, 17),
    endDate: new Date(2022, 06, 18),
    time: "23:25",
    paymentDay: null,

    location: "Visión Festival - Neuquén",

    isPrivate: false,

    category: "Party",
    pricePerPerson: 6000,
    destacado: true,
  },
  {
    id: 23,
    name: "Hernán Cattáneo",
    description:
      "Hernán Cattaneo es un DJ y productor argentino, que se dedica principalmente al Progressive House.​ En el año 2018, ganó el premio al mejor DJ en este género otorgado por DJ Awards de Ibiza.",
    image:
      "https://d3ugyf2ht6aenh.cloudfront.net/stores/536/860/products/libro-hernan-cattaneo1-4d6d150966d1dce0fa16230298728167-480-0.jpg",

    startDate: new Date(2022, 06, 14),
    endDate: new Date(2022, 06, 15),
    paymentDay: null,

    time: "00:00",
    location: "Río Electronic Music - Buenos Aires",

    isPrivate: false,

    category: "Party",
    pricePerPerson: 4500,
    destacado: true,
  },
  {
    id: 24,
    name: "Feria degustar",
    description:
      "El gobierno municipal invita a los vecinos y las vecinas a participar de esta la Feria donde podrán visitar puestos de artesanías y propuestas gastronómicas",
    image:
      "https://www.infobae.com/new-resizer/wd2nNWDrR-JsJvAgXNGQtbZeOvs=/1200x900/filters:format(webp:quality(85//s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/05/20114815/vinos-41.jpg",

    startDate: new Date(2022, 06, 12),
    endDate: new Date(2022, 06, 12),
    paymentDay: null,

    time: "23:25",
    location: "Palermo - Buenos Aires",

    isPrivate: false,

    category: "Gastronomy",

    pricePerPerson: 2100,
  },
  {
    id: 25,
    name: "Maldini Fest",
    description:
      "Maldini es un espacio donde predomina la buena vibra y el clima festivo. Bajo lucecitas, banderines y mesas al aire libre, propone ser la casa de encuentros entre amigos, familias y parejas, y se prepara para convertirse en uno de los principales spots de la ciudad en la temporada que está por comenzar.",
    image:
      "https://www.saavedraonline.com.ar/wp-content/uploads/2020/03/maldini.jpg",

    startDate: new Date(2022, 05, 14),
    endDate: new Date(2022, 05, 15),
    paymentDay: null,

    time: "23:25",
    location: "Saavedra - Buenos Aires",

    isPrivate: false,

    category: "Bar",
    pricePerPerson: 6000,
  },
  {
    id: 26,
    name: "Pltz",
    description:
      "PLTZ Street Pub abrió sus puertas el pasado viernes 4 de diciembre en el polo gastronómico del ex Paseo de la Infanta en Palermo a pasos del Rosedal. Con una propuesta diferente y disruptiva, que viene a responder a una necesidad tajante del público de reunirse en lugares descontracturados y versátiles. ",
    image:
      "https://i0.wp.com/revistag7.com/wp-content/uploads/2021/02/MG_6734_edicion_alta.jpg?fit=1080%2C720&ssl=1",
    startDate: new Date(2022, 06, 14),
    endDate: new Date(2022, 06, 15),
    time: "23:25",

    paymentDay: null,

    location: "Palermo - Buenos Aires",
    category: "Bar",
    isPrivate: false,
    pricePerPerson: 3000,
  },
  {
    id: 27,
    name: "Teatro Ciego",
    description:
      "Somos una compañía de teatro experta en contar historias en absoluta oscuridad. Cada obra es un mundo y una aventura en la que te invitamos a jugar mas allá.",
    image:
      "https://encolombia.com/wp-content/uploads/2021/07/Elementos-del-Teatro.jpg",

    startDate: new Date(2022, 04, 29),
    endDate: new Date(2022, 04, 29),
    paymentDay: null,

    time: "20:20",
    location: "Recoleta - Buenos Aires",

    isPrivate: false,

    category: "Social event",
    pricePerPerson: 1400,
  },
  {
    id: 28,
    name: "A ciegas Gourmet",
    description:
      "A Ciegas Gourmet Show teatral y musical gourmet en completa oscuridad. Jueves, viernes, sábados y domingos 21 hs. Valor de la entrada $3800.",
    image:
      "https://offloadmedia.feverup.com/madridsecreto.co/wp-content/uploads/2021/03/03044328/dining-in-the-dark-madrid-3.jpg",

    startDate: new Date(2022, 06, 14),
    endDate: new Date(2022, 06, 14),
    paymentDay: null,

    time: "20:25",
    location: "Recoleta - Buenos Aires",

    isPrivate: false,

    category: "Gastronomy",
    pricePerPerson: 3800,
    destacado: true,
  },
  {
    id: 29,
    name: "The Hobbit",
    description:
      "La trilogía de El hobbit, adaptación cinematográfica basada en la novela homónima, comprende tres películas épicas de fantasía, acción y aventuras: El hobbit: un viaje inesperado.",
    image: "https://wallpaperaccess.com/full/830842.jpg",

    startDate: new Date(2022, 06, 14),
    endDate: new Date(2022, 06, 15),
    paymentDay: null,

    time: "22:00",
    location: "Cinemark Palermo - Buenos Aires",

    isPrivate: false,

    category: "Cinema",
    pricePerPerson: 1000,
    destacado: true,
  },
  {
    id: 30,
    name: "Dune",
    description:
      "Arrakis, también denominado Dune, se ha convertido en el planeta más importante del universo. A su alrededor comienza una gigantesca lucha por el poder que culmina en una guerra interestelar.",
    image:
      "https://lh3.googleusercontent.com/-km726JvA5ds/YTlfBh2p8dI/AAAAAAAAOCo/3iyoTQtCoBArMzkOP2Q9tDgmfAneRwZJgCLcBGAsYHQ/w437-h640/E-xdddtWQAQ3YLh.jpg",

    startDate: new Date(2022, 06, 14),
    endDate: new Date(2022, 06, 14),
    paymentDay: null,

    time: "21:00",
    location: "IMAX - Buenos Aires",

    isPrivate: false,

    category: "Cinema",
    pricePerPerson: 900,
  },
];

module.exports = events;
