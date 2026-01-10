/**
 * Catering-Pakete und Menü-Optionen
 * Diese Datei enthält alle verfügbaren Pakete und Gerichte für das Buchungssystem
 */

// ===== VORSPEISEN (für individuelles Menü) =====
export const APPETIZERS = [
  { id: 'hummus', name: 'Hummus', description: 'Cremige Kichererbsenpaste mit Tahini' },
  { id: 'baba-ganoush', name: 'Baba Ganoush', description: 'Geröstete Auberginencreme' },
  { id: 'tabouleh', name: 'Tabouleh', description: 'Frischer Petersiliensalat' },
  { id: 'fattoush', name: 'Fattoush', description: 'Levantinischer Brotsalat' },
  { id: 'kichererbsensalat', name: 'Kichererbsensalat', description: 'Mit Zitrone & Kräutern' },
  { id: 'couscoussalat', name: 'Couscoussalat', description: 'Mit Tomaten & Koriander' },
  { id: 'ananas-gurken-salat', name: 'Ananas-Gurken-Salat', description: 'Erfrischender Salat' },
  { id: 'fatayer', name: 'Fatayer', description: 'Gefüllte Teigtaschen (Käse, Hähnchen, Rind oder Spinat)' },
  { id: 'kibbeh', name: 'Kibbeh', description: 'Knusprige Bulgur-Kroketten (Rind oder Kartoffel)' },
  { id: 'gefuellte-gemueserollen', name: 'Gefüllte Gemüserollen', description: 'Vegetarische Rollen' },
] as const;

// ===== HAUPTSPEISEN (für individuelles Menü) =====
export const MAIN_COURSES = [
  { id: 'haehnchenbrust-reis', name: 'Hähnchenbruststreifen auf Reis', description: 'Zarte Hähnchenbrust auf orientalischem Reis' },
  { id: 'rindfleischstreifen', name: 'Rindfleischstreifen', description: 'Zarte Rindfleischstreifen' },
  { id: 'ofen-haehnchenkeulen', name: 'Ofen-Hähnchenkeulen', description: 'Im Ofen gegart' },
  { id: 'lammschulter', name: 'Geschmorte Lammschulter', description: 'Langsam geschmort' },
  { id: 'couscous-gemuese', name: 'Couscous mit Gemüse', description: 'Saisonales Gemüse' },
  { id: 'mahashi', name: 'Mahashi', description: 'Gefüllte Weinblätter & Zucchini' },
  { id: 'makloube', name: 'Makloube', description: 'Arabischer Gemüsereis' },
  { id: 'ofenkartoffeln', name: 'Ofenkartoffeln', description: 'Goldbraun gebacken' },
] as const;

// ===== DESSERTS (für individuelles Menü) =====
export const DESSERTS = [
  { id: 'baklava', name: 'Baklava', description: 'Blätterteig mit Pistazien und Honig' },
  { id: 'kunafa', name: 'Kunafa', description: 'Fadennudeln mit Käse und Sirup' },
  { id: 'muhallabia', name: 'Muhallabia', description: 'Milchpudding mit Rosenwasser' },
  { id: 'obstsalat', name: 'Frischer Obstsalat', description: 'Saisonale Früchte' },
  { id: 'orientalisches-dessert', name: 'Orientalisches Dessert', description: 'Auswahl orientalischer Süßspeisen' },
] as const;

// ===== PAKETE/MENÜS =====
export interface CateringPackage {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  detailedItems: {
    category?: string;
    items: string[];
  }[];
  pricePerPerson: number;
  minGuests: number;
  includesDessert: boolean;
  popular?: boolean;
  isVegetarian?: boolean;
}

export const CATERING_PACKAGES: CateringPackage[] = [
  {
    id: 'levantine-fingerfood',
    name: 'Menü 1 – Levantine Fingerfood Selection',
    subtitle: 'Orientalisches Fingerfood zum Teilen',
    description: 'Orientalisches Fingerfood zum Teilen – perfekt für lockere Events und Empfänge.',
    detailedItems: [
      {
        items: [
          'Belegte Brote mit Hummus, Baba Ghanoush, Frischkäse, Avocado & Fisch-Dips',
          'Hausgemachte Fatayer (Käse, Hähnchen, Rind oder Spinat)',
          'Knusprige Kibbeh (Rind oder Kartoffel)',
          'Frische Salatauswahl wie Tabouleh, Fattoush & Couscoussalat',
        ],
      },
    ],
    pricePerPerson: 26.75,
    minGuests: 20,
    includesDessert: false,
  },
  {
    id: 'green-levant',
    name: 'Menü 2 – Green Levant Buffet',
    subtitle: 'Vegetarisch',
    description: 'Kalte vegetarische Vielfalt – ideal für gesundheitsbewusste Gäste.',
    detailedItems: [
      {
        items: [
          'Kichererbsensalat mit Zitrone & Kräutern',
          'Tabouleh',
          'Fattoush mit Granatapfel & Pita-Chips',
          'Hummus & Baba Ghanoush',
          'Mini-Fatayer (Spinat & Käse)',
          'Kibbeh mit Kartoffelfüllung',
          'Gefüllte Gemüserollen',
        ],
      },
    ],
    pricePerPerson: 24.61,
    minGuests: 20,
    includesDessert: false,
    isVegetarian: true,
  },
  {
    id: 'levantine-classic',
    name: 'Menü 3 – Levantine Classic Buffet',
    subtitle: 'Kalt & warm kombiniert',
    description: 'Der perfekte Mix aus kalten und warmen Speisen für jede Gelegenheit.',
    detailedItems: [
      {
        items: [
          'Kichererbsensalat',
          'Tabouleh',
          'Fattoush',
          'Hummus & Baba Ghanoush',
          'Fatayer & Kibbeh',
          'Hähnchenbruststreifen auf orientalischem Reis',
          'Zarte Rindfleischstreifen',
          'Couscous mit saisonalem Gemüse',
        ],
      },
    ],
    pricePerPerson: 27.82,
    minGuests: 20,
    includesDessert: false,
    popular: true,
  },
  {
    id: 'levantine-comfort',
    name: 'Menü 4 – Levantine Comfort Buffet',
    subtitle: 'Klassiker mit süßem Abschluss',
    description: 'Klassiker mit süßem Abschluss – inklusive Dessert.',
    detailedItems: [
      {
        items: [
          'Tabouleh',
          'Fattoush',
          'Hummus & Baba Ghanoush',
          'Couscoussalat mit Tomaten & Koriander',
          'Fatayer & Kibbeh',
          'Hähnchenbruststreifen auf Reis',
          'Rindfleischstreifen',
          'Couscous mit Gemüse',
          'Dessert',
        ],
      },
    ],
    pricePerPerson: 29.96,
    minGuests: 20,
    includesDessert: true,
  },
  {
    id: 'oriental-feast',
    name: 'Menü 5 – Oriental Feast Buffet',
    subtitle: 'Großzügiges Buffet – kalt & warm',
    description: 'Großzügiges Buffet mit kalten und warmen Speisen plus Dessert.',
    detailedItems: [
      {
        category: 'Kalt',
        items: [
          'Kichererbsensalat',
          'Tabouleh',
          'Fattoush',
          'Ananas-Gurken-Salat',
          'Couscoussalat',
          'Hummus & Baba Ghanoush',
          'Fatayer & Kibbeh',
        ],
      },
      {
        category: 'Warm',
        items: [
          'Mahashi (gefüllte Weinblätter & Zucchini)',
          'Makloube (arabischer Gemüsereis)',
          'Ofenkartoffeln',
          'Couscous mit Gemüse',
          'Ofen-Hähnchenkeulen',
          'Rindfleischstreifen',
          'Dessert',
        ],
      },
    ],
    pricePerPerson: 36.38,
    minGuests: 40,
    includesDessert: true,
  },
  {
    id: 'premium-levant',
    name: 'Menü 6 – Premium Levant Buffet',
    subtitle: 'Unsere umfangreichste Auswahl',
    description: 'Unser Premium-Erlebnis mit geschmorter Lammschulter und vollem Programm.',
    detailedItems: [
      {
        category: 'Kalte Vorspeisen',
        items: [
          'Kichererbsensalat',
          'Tabouleh',
          'Fattoush',
          'Ananas-Gurken-Salat',
          'Couscoussalat',
          'Hummus & Baba Ghanoush',
          'Fatayer & Kibbeh',
        ],
      },
      {
        category: 'Warme Speisen',
        items: [
          'Mahashi',
          'Makloube',
          'Ofenkartoffeln',
          'Couscous mit Gemüse',
          'Ofen-Hähnchenkeulen',
          'Geschmorte Lammschulter',
          'Dessert',
        ],
      },
    ],
    pricePerPerson: 39.59,
    minGuests: 40,
    includesDessert: true,
    popular: true,
  },
];

// ===== CUSTOM MENU LIMITS =====
export const CUSTOM_MENU_LIMITS = {
  minGuests: 40,
  courses: 3,
} as const;

// ===== HELPER FUNCTIONS =====
export const getAppetizerById = (id: string) => APPETIZERS.find(a => a.id === id);
export const getMainCourseById = (id: string) => MAIN_COURSES.find(m => m.id === id);
export const getDessertById = (id: string) => DESSERTS.find(d => d.id === id);
export const getPackageById = (id: string) => CATERING_PACKAGES.find(p => p.id === id);

export const formatPrice = (price: number) => {
  return new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR',
  }).format(price);
};

export const calculateTotalPrice = (pricePerPerson: number, guestCount: number) => {
  return pricePerPerson * guestCount;
};
