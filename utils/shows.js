import { images } from "../constants";

const shows = [
    {
        id: 1,
        name: 'Noche Urbana',
        bar: "Temple Bar",
        description: "Prepárate para una noche llena de ritmo y vibras urbanas en el emblemático bar Temple. Este evento especial, titulado 'Noche Urbana en Temple', promete ofrecer una experiencia musical única que fusiona los géneros de rap, reguetón y trap en un ambiente íntimo y acogedor.",
        direction: 'Costa Rica 4677, CABA',
        genres: "Rap, Regueton, Trap",
        bands: 2,
        date: "04/11/2023",
        time: 23,
        items: "Rider, bateria",
        scenarioAvailable: "Si",
        public: "De pie",
        charter: "$100.000",
        sellsPercent: "No aplica",
        additionalCosts: "A cargo del artista",
        food: "Incluida",
        payMethod: "Transferencia",
        image: images.temple
    },
    {
        id: 2,
        name: 'Fiesta Electro',
        bar: 'Pulse Club',
        description: '¡Únete a la mejor fiesta de música electrónica en el Pulse Club! Experimenta una noche llena de ritmos electrónicos, luces deslumbrantes y DJ en vivo.',
        direction: 'Avenida del Éxito 123, Ciudad Electrónica',
        genres: 'Música Electrónica',
        bands: 1,
        date: '10/12/2023',
        time: 22,
        items: 'Controlador DJ',
        scenarioAvailable: 'Sí',
        public: 'De pie',
        charter: '$80,000',
        sellsPercent: '10%',
        additionalCosts: 'A cargo del bar',
        food: 'No incluida',
        payMethod: 'Efectivo',
        image: images.temple
      },
      {
        id: 3,
        name: 'Rock en Vivo',
        bar: 'Rock Central',
        description: 'Una noche de rock en estado puro. Ven a Rock Central y disfruta de las actuaciones en vivo de las mejores bandas de rock de la región.',
        direction: 'Calle del Rock 567, Rockville',
        genres: 'Rock',
        bands: 3,
        date: '15/12/2023',
        time: 20,
        items: 'Amplificadores, Batería, Micrófonos',
        scenarioAvailable: 'Sí',
        public: 'De pie',
        charter: '$120,000',
        sellsPercent: '5%',
        additionalCosts: 'A cargo del bar',
        food: 'Incluida',
        payMethod: 'Transferencia',
        image: images.temple
      },
      {
        id: 4,
        name: 'Noche de Jazz',
        bar: 'Jazz Lounge',
        description: 'Adéntrate en el mundo del jazz en Jazz Lounge. Disfruta de una noche mágica con las melodías suaves y envolventes de destacados músicos de jazz.',
        direction: 'Calle del Jazz 789, Jazztown',
        genres: 'Jazz',
        bands: 1,
        date: '20/12/2023',
        time: 21,
        items: 'Piano de cola, Contrabajo, Batería',
        scenarioAvailable: 'Sí',
        public: 'Sentado',
        charter: '$90,000',
        sellsPercent: '8%',
        additionalCosts: 'A cargo del bar',
        food: 'Incluida',
        payMethod: 'Efectivo',
        image: images.temple
      },
      {
        id: 5,
        name: 'Noche de Salsa',
        bar: 'Salsa Fiesta',
        description: 'Baila al ritmo de la salsa y la bachata en Salsa Fiesta. Una noche caliente llena de música, baile y diversión.',
        direction: 'Calle de la Salsa 456, Bailatón',
        genres: 'Salsa, Bachata',
        bands: 1,
        date: '25/12/2023',
        time: 19,
        items: 'Orquesta de salsa completa',
        scenarioAvailable: 'Sí',
        public: 'De pie',
        charter: '$70,000',
        sellsPercent: '15%',
        additionalCosts: 'A cargo del bar',
        food: 'No incluida',
        payMethod: 'Transferencia',
        image: images.temple
      },
      {
        id: 6,
        name: 'Noche de Indie Rock',
        bar: 'Indie Loft',
        description: 'Descubre las últimas tendencias del indie rock en Indie Loft. Bandas emergentes y sonidos alternativos te esperan en esta velada única.',
        direction: 'Calle del Indie 234, Alternatopolis',
        genres: 'Indie Rock',
        bands: 2,
        date: '30/12/2023',
        time: 20,
        items: 'Amplificadores, Batería, Teclados',
        scenarioAvailable: 'Sí',
        public: 'De pie',
        charter: '$110,000',
        sellsPercent: '7%',
        additionalCosts: 'A cargo del bar',
        food: 'Incluida',
        payMethod: 'Efectivo',
        image: images.temple
      },
      {
        id: 7,
        name: 'Noche de Flamenco',
        bar: 'Flamenco Tablao',
        description: 'Déjate llevar por la pasión y el arte del flamenco en Flamenco Tablao. Experimenta la danza y la música española en su máxima expresión.',
        direction: 'Plaza del Flamenco 101, Andalucía',
        genres: 'Flamenco',
        bands: 1,
        date: '05/01/2024',
        time: 19,
        items: 'Guitarra flamenca, Cajón, Palmas',
        scenarioAvailable: 'Sí',
        public: 'Sentado',
        charter: '$85,000',
        sellsPercent: '12%',
        additionalCosts: 'A cargo del bar',
        food: 'No incluida',
        payMethod: 'Transferencia',
        image: images.temple
      },
      {
        id: 8,
        name: 'Noche de Hip-Hop',
        bar: 'Hip-Hop Arena',
        description: 'La cultura del hip-hop se toma el escenario en Hip-Hop Arena. Disfruta de freestyles, baile y rimas afiladas.',
        direction: 'Avenida del Hip-Hop 333, Rap City',
        genres: 'Hip-Hop',
        bands: 2,
        date: '10/01/2024',
        time: 21,
        items: 'Micrófonos, DJ Setup',
        scenarioAvailable: 'Sí',
        public: 'De pie',
        charter: '$95,000',
        sellsPercent: '10%',
        additionalCosts: 'A cargo del bar',
        food: 'Incluida',
        payMethod: 'Efectivo',
        image: images.temple
      },
      {
        id: 9,
        name: 'Noche de Blues',
        bar: 'Blues House',
        description: 'Sumérgete en el blues en Blues House. Músicos apasionados te llevarán en un viaje emocional con sus guitarras y armonías desgarradoras.',
        direction: 'Calle del Blues 987, Bluesville',
        genres: 'Blues',
        bands: 1,
        date: '15/01/2024',
        time: 20,
        items: 'Guitarra de blues, Armónica, Bajo',
        scenarioAvailable: 'Sí',
        public: 'Sentado',
        charter: '$75,000',
        sellsPercent: '8%',
        additionalCosts: 'A cargo del bar',
        food: 'Incluida',
        payMethod: 'Transferencia',
        image: images.temple
      },
      {
        id: 10,
        name: 'Noche de Reggae',
        bar: 'Reggae Beach',
        description: 'Siente la brisa del mar y disfruta de las vibraciones relajadas del reggae en Reggae Beach. Música y buen rollo en un entorno playero.',
        direction: 'Playa del Reggae, Caribe Surf',
        genres: 'Reggae',
        bands: 1,
        date: '20/01/2024',
        time: 18,
        items: 'Batería, Percusión, Bajo',
        scenarioAvailable: 'Sí',
        public: 'De pie',
        charter: '$80,000',
        sellsPercent: '15%',
        additionalCosts: 'A cargo del bar',
        food: 'No incluida',
        payMethod: 'Efectivo',
        image: images.temple
      },
];

export { shows };