const eventos = [
  {
    id: 1,
    nombre: 'Lollapalooza',
    image:
      'https://pbs.twimg.com/profile_images/1500933654830276608/PBf2KquH_400x400.jpg',
    fecha: '20-03-2022',
    hora: '17:00',
    Ubicación: 'Hipódromo de Palermo, Buenos Aires',
    Categoría: 'Concierto',
    privado: false,
  },
  {
    id: 2,
    nombre: 'Cosquín Rock',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpE500YCm2dI6vMH2K6qMuPgMkDvJALf9RRg&usqp=CAU',
    fecha: '12-02-2022',
    hora: '15:00',
    Ubicación: 'Aeroclub Santa María de Punilla, Córdoba',
    Categoría: 'Concierto',
    privado: false,
  },
  {
    id: 3,
    nombre: 'Quilmes Rock',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVjZhYW7SVyf8Akzzd-NNqmzXVEpJ6svC62Q&usqp=CAU',
    fecha: '30-04-2022',
    hora: '16:00',
    Ubicación: 'Tecnópolis, Buenos Aires',
    Categoría: 'Concierto',
    privado: false,
  },
  {
    id: 4,
    nombre: 'Coldplay',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0Kt5VeujJ0DyJ2SXR956PDmi0sgAtcGKZhg&usqp=CAU',
    fecha: '25-10-2022',
    hora: '18:00',
    Ubicación: 'Estadio River Plate, Buenos Aires',
    Categoría: 'Concierto',
    privado: false,
  },
  {
    id: 5,
    nombre: 'Cumpleaños Marcos',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEesccfOXtsDa18cKUjoB0aL8xtPr9-1gyWQ&usqp=CAU',
    fecha: '25-03-2022',
    hora: '21:00',
    Ubicación: 'Antares Nueva Córdoba -  San Lorenzo 79, Córdoba',
    Categoría: 'Fiesta Privada',
    privado: true,
  },
  {
    id: 6,
    nombre: 'Cumpleaños Agustina',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0TgWEh39xjel0fQfshgcY3TrSyn21hsj_Xg&usqp=CAU',
    fecha: '26-03-2022',
    hora: '22:00',
    Ubicación: 'Vidón-Bar - Achával Rodríguez 152, Córdoba',
    Categoría: 'Fiesta Privada',
    privado: true,
  },
  {
    id: 7,
    nombre: 'Cumpleaños Maggy',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREmFuC9yq-ZFwYGiyDNPXbjdyzB5gyNQHiGw&usqp=CAU',
    fecha: '25-03-2022',
    hora: '22:30',
    Ubicación:
      'Cruz Espacio -  Av. Ramón Cárcano 120, Chateau Carreras, Córdoba',
    Categoría: 'Fiesta Privada',
    privado: true,
  },
  {
    id: 8,
    nombre: 'Cumpleaños Gonzalo',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCy-dcspdIfjaL6dDUiRTP_LnFWGcA0kszMw&usqp=CAU',
    fecha: '28-03-2022',
    hora: '20:30',
    Ubicación: 'Cervecería Capitán - Achával Rodríguez 244, Córdoba',
    Categoría: 'Fiesta Privada',
    privado: true,
  },
  {
    id: 9,
    nombre: 'After Office Globant',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxc21-gVXu_MP75NtGhUb1ZgOUBul90D2XRg&usqp=CAU',
    fecha: '28-03-2022',
    hora: '20:30',
    Ubicación: 'Cervecería BarBeer - Hipólito Yrigoyen 81, Córdoba',
    Categoría: 'Evento Social',
    privado: true,
  },
  {
    id: 10,
    nombre: 'After Office Santex',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCy-dcspdIfjaL6dDUiRTP_LnFWGcA0kszMw&usqp=CAU',
    fecha: '30-03-2022',
    hora: '17:30',
    Ubicación: 'Cervecería Capitán - Achával Rodríguez 244, Córdoba',
    Categoría: 'Evento Social',
    privado: true,
  },
  {
    id: 11,
    nombre: 'After Office Apex',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpeUvbserY2xOoPDrsGXRBZJ_sbQB4c6pWQQ&usqp=CAU',
    fecha: '31-03-2022',
    hora: '20:30',
    Ubicación: 'Los Infernales - General Manuel Belgrano 631, Córdoba',
    Categoría: 'Evento Social',
    privado: true,
  },
  {
    id: 12,
    nombre: 'Futbol 7 - Juan',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPL4Q6vuNOp5wxqkn2QqFv1xhStEKW9__cpw&usqp=CAU',
    fecha: '25-03-2022',
    hora: '21:00',
    Ubicación: 'La Gran 7 -  Concepción Arenal, Córdoba',
    Categoría: 'Deportes',
    privado: true,
  },
  {
    id: 13,
    nombre: 'Futbol 7 - Marcos',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPL4Q6vuNOp5wxqkn2QqFv1xhStEKW9__cpw&usqp=CAU',
    fecha: '25-03-2022',
    hora: '20:00',
    Ubicación: 'La Gran 7 -  Concepción Arenal, Córdoba',
    Categoría: 'Deportes',
    privado: true,
  },
  {
    id: 14,
    nombre: 'Futbol 7 - Micaela',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPL4Q6vuNOp5wxqkn2QqFv1xhStEKW9__cpw&usqp=CAU',
    fecha: '26-03-2022',
    hora: '21:00',
    Ubicación: 'La Gran 7 -  Concepción Arenal, Córdoba',
    Categoría: 'Deportes',
    privado: true,
  },
  {
    id: 15,
    nombre: 'Futbol 7 - Pedro',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPL4Q6vuNOp5wxqkn2QqFv1xhStEKW9__cpw&usqp=CAU',
    fecha: '26-03-2022',
    hora: '20:00',
    Ubicación: 'La Gran 7 -  Concepción Arenal, Córdoba',
    Categoría: 'Deportes',
    privado: true,
  },
  {
    id: 16,
    nombre: 'Lista Flor ',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyP3Hr_QSJrNZhIxvJnxi98mD4SFnUyoUD8sPiGEAWYTdHV4JIRIG9q5Y8Z8zWaxugiSE&usqp=CAU',
    fecha: '26-03-2022',
    hora: '22:00',
    Ubicación: 'Le Parc -  Av Vélez Sarsfield 753, Córdoba',
    Categoría: 'Bar Experience',
    privado: true,
  },
  {
    id: 17,
    nombre: 'Lista Agus',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyP3Hr_QSJrNZhIxvJnxi98mD4SFnUyoUD8sPiGEAWYTdHV4JIRIG9q5Y8Z8zWaxugiSE&usqp=CAU',
    fecha: '26-03-2022',
    hora: '22:00',
    Ubicación: 'Bartó -   Av. Marcelo T. de Alvear 635, Córdoba',
    Categoría: 'Bar Experience',
    privado: true,
  },
  {
    id: 18,
    nombre: 'Lista Cande',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyP3Hr_QSJrNZhIxvJnxi98mD4SFnUyoUD8sPiGEAWYTdHV4JIRIG9q5Y8Z8zWaxugiSE&usqp=CAU',
    fecha: '26-03-2022',
    hora: '20:00',
    Ubicación: 'María María -  Av. Marcelo T. de Alvear 386, Córdoba',
    Categoría: 'Bar Experience',
    privado: true,
  },
  {
    id: 19,
    nombre: 'Spydi y sus amigos',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIWCNfj4tROoI0ZQRLa_dpI-_76pvNY-o5cQ&usqp=CAU',
    fecha: '30-03-2022',
    hora: '22:15',
    Ubicación: 'Hoyts Patio Olmos, Córdoba',
    Categoría: 'Cine',
    privado: false,
  },
  {
    id: 20,
    nombre: 'Batman',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIWCNfj4tROoI0ZQRLa_dpI-_76pvNY-o5cQ&usqp=CAU',
    fecha: '01-04-2022',
    hora: '23:25',
    Ubicación: 'Hoyts Nuevo Centro, Córdoba',
    Categoría: 'Cine',
    privado: false,
  },
  {
    id: 21,
    nombre: 'Spiderman',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIWCNfj4tROoI0ZQRLa_dpI-_76pvNY-o5cQ&usqp=CAU',
    fecha: '01-04-2022',
    hora: '23:00',
    Ubicación: 'Hoyts Nuevo Centro, Córdoba',
    Categoría: 'Cine',
    privado: false,
  },
  {
    id: 22,
    nombre: 'Kolombo',
    image:
      'https://virtualtkt.com/repo/images/VAG4X9.jpg',
    fecha: '01-05-2022',
    hora: '23:25',
    Ubicación: 'Visión Festival - Neuquén',
    Categoría: 'Fiesta',
    privado: false,
  },
  {
    id: 23,
    nombre: 'Hernán Cattáneo',
    image:
    "https://d3ugyf2ht6aenh.cloudfront.net/stores/536/860/products/libro-hernan-cattaneo1-4d6d150966d1dce0fa16230298728167-480-0.jpg",
    fecha: '01-04-2022',
    hora: '00:00',
    Ubicación: 'Río Electronic Music - Buenos Aires',
    Categoría: 'Fiesta',
    privado: false,
  },
  {
    id: 24,
    nombre: 'Feria degustar',
    image: "https://www.infobae.com/new-resizer/wd2nNWDrR-JsJvAgXNGQtbZeOvs=/1200x900/filters:format(webp):quality(85)//s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/05/20114815/vinos-41.jpg",
    fecha: '01-04-2022',
    hora: '23:25',
    Ubicación: 'Palermo - Buenos Aires',
    Categoría: 'Gastronomía',
    privado: false,
  },
  {
    id: 25,
    nombre: 'Maldini Fest',
    image:
    "https://www.saavedraonline.com.ar/wp-content/uploads/2020/03/maldini.jpg",
    fecha: '01-04-2022',
    hora: '23:25',
    Ubicación: 'Saavedra - Buenos Aires',
    Categoría: 'Fiesta',
    privado: false,
  },
  {
    id: 26,
    nombre: 'Pltz',
    image:
    "https://i0.wp.com/revistag7.com/wp-content/uploads/2021/02/MG_6734_edicion_alta.jpg?fit=1080%2C720&ssl=1",
    fecha: '01-04-2022',
    hora: '23:25',
    Ubicación: 'Palermo - Buenos Aires',
    Categoría: 'Bar',
    privado: false,
  },
  {
    id: 27,
    nombre: 'Teatro Ciego',
    image:
    "https://encolombia.com/wp-content/uploads/2021/07/Elementos-del-Teatro.jpg",
    fecha: '03-06-2022',
    hora: '20:20',
    Ubicación: 'Recoleta - Buenos Aires',
    Categoría: 'Teatro',
    privado: false,
  },
  {
    id: 28,
    nombre: 'A ciegas Gourmet',
    image:
    "https://offloadmedia.feverup.com/madridsecreto.co/wp-content/uploads/2021/03/03044328/dining-in-the-dark-madrid-3.jpg",
    fecha: '29-03-2022',
    hora: '20:25',
    Ubicación: 'Recoleta - Buenos Aires',
    Categoría: 'Restaurant',
    privado: false,
  },
  {
    id: 29,
    nombre: 'The Hobbit',
    image:
    "https://wallpaperaccess.com/full/830842.jpg",
    fecha: '20-04-2022',
    hora: '22:00',
    Ubicación: 'Cinemark Palermo - Buenos Aires',
    Categoría: 'Cine',
    privado: false,
  },
  {
    id: 30,
    nombre: 'Dune',
    image:
    "https://lh3.googleusercontent.com/-km726JvA5ds/YTlfBh2p8dI/AAAAAAAAOCo/3iyoTQtCoBArMzkOP2Q9tDgmfAneRwZJgCLcBGAsYHQ/w437-h640/E-xdddtWQAQ3YLh.jpg",
    fecha: '01-05-2022',
    hora: '21:00',
    Ubicación: 'IMAX - Buenos Aires',
    Categoría: 'Cine',
    privado: false,
  }
];

module.exports = eventos;
