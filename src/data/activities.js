export const activities = [
    {
      id: 1,
      name: "Visita a la Catedral",
      price: 7,
      // Fixa't que ara fem servir require i els punts ../
      image: require('../assets/catedral.jpg'), 
      description: "Entrada a la nau gòtica més ampla del món i el claustre."
    },
    {
      id: 2,
      name: "Ruta de Joc de Trons",
      price: 18,
      image: require('../assets/jocdetrons.jpg'),
      description: "Recorre els escenaris on es va rodar la sèrie (Braavos)."
    },
    {
      id: 3,
      name: "Banys Àrabs",
      price: 3,
      image: require('../assets/banys.jpg'),
      description: "Descobreix l'arquitectura romànica del segle XII."
    },
    {
      id: 4,
      name: "Passejada per la Muralla",
      price: 12,
      image: require('../assets/muralla.jpg'),
      description: "Tour guiat amb les millors vistes panoràmiques de la ciutat."
    }
];