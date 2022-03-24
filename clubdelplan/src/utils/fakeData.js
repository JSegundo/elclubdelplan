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
  },
];

module.exports = eventos;
