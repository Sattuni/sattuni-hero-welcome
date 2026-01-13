/**
 * Catering-Pakete und Menü-Optionen
 * Diese Datei enthält alle verfügbaren Pakete und Gerichte für das Buchungssystem
 */

// ===== VORSPEISEN (für individuelles Menü) =====
export const APPETIZERS = [
  { id: 'hummus', name: 'Hummus', description: 'Cremige Kichererbsenpaste mit Tahini' },
  { id: 'baba-ganoush', name: 'Baba Ganoush', description: 'Gegrillte Auberginen mit Tahini' },
  { id: 'tabouleh', name: 'Tabouleh', description: 'Frischer Petersiliensalat' },
  { id: 'fattoush', name: 'Fattoush', description: 'Petersilie Granatapfelsalat' },
  { id: 'kichererbsensalat', name: 'Kichererbsensalat', description: 'Mit Zitrone & Kräutern' },
  { id: 'couscoussalat', name: 'Couscoussalat', description: 'Mit Tomaten & Koriander' },
  { id: 'ananas-gurken-salat', name: 'Ananas-Gurken-Salat', description: 'Erfrischender Salat' },
  { id: 'fatayer', name: 'Fatayer', description: 'Gefüllte Teigtaschen (Käse, Hähnchen, Rind oder Spinat)' },
  { id: 'kibbeh', name: 'Kibbeh', description: 'Knusprige Bulgur-Kroketten (Rind oder Kartoffel)' },
] as const;

// ===== HAUPTSPEISEN (für individuelles Menü) =====
export const MAIN_COURSES = [
  { id: 'haehnchenbrust', name: 'Hähnchenbruststreifen', description: 'Zarte Hähnchenbrust' },
  { id: 'rindfleischstreifen', name: 'Rindfleischstreifen', description: 'Zarte Rindfleischstreifen' },
  { id: 'ofen-haehnchenkeulen', name: 'Ofen-Hähnchenkeulen', description: 'Im Ofen gegart' },
  { id: 'lammschulter', name: 'Geschmorte Lammschulter', description: 'Langsam geschmort' },
  { id: 'lammhaxe', name: 'Lammhaxe', description: 'Zart geschmort' },
  { id: 'lachsfilets', name: 'Lachsfilets', description: 'Zartes Lachsfilet' },
  { id: 'garnelen', name: 'Garnelen mit Knoblauch und Zitrone', description: 'Knoblauch-Zitronen-Garnelen' },
  { id: 'hackfleischbaellchen', name: 'Hackfleischbällchen', description: 'Hausgemachte Fleischbällchen' },
  { id: 'gefuellte-gemueserollen', name: 'Gefüllte Gemüserollen', description: 'Vegetarische Rollen' },
] as const;

// ===== BEILAGEN (für individuelles Menü) =====
export const SIDE_DISHES = [
  { id: 'couscous-gemuese', name: 'Couscous mit Gemüse', description: 'Saisonales Gemüse' },
  { id: 'mahashi', name: 'Mahashi', description: 'Gefüllte Weinblätter & Zucchini' },
  { id: 'makloube', name: 'Makloube', description: 'Arabischer Gemüsereis' },
  { id: 'ofenkartoffeln', name: 'Ofenkartoffeln', description: 'Goldbraun gebacken' },
  { id: 'ofengemuese', name: 'Ofengemüse', description: 'Im Ofen geröstetes Gemüse' },
  { id: 'champignons', name: 'Champignons mit Knoblauch', description: 'Knoblauch-Champignons' },
] as const;

// ===== DESSERTS (für individuelles Menü) =====
export const DESSERTS = [
  { id: 'dessert', name: 'Dessert', description: 'Auswahl orientalischer Süßspeisen' },
] as const;

// ===== PAKET DISH ITEM =====
export interface PackageDishItem {
  name: string;
  description?: string;
}

// ===== PAKETE/MENÜS =====
export interface CateringPackage {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  detailedItems: {
    category?: string;
    items: PackageDishItem[];
  }[];
  pricePerPerson: number;
  minGuests: number;
  includesDessert: boolean;
  popular?: boolean;
  isVegetarian?: boolean;
}

export const CATERING_PACKAGES: CateringPackage[] = [
  {
    id: 'mezze-mix',
    name: 'Mezze Mix',
    subtitle: 'Orientalisches Fingerfood zum Teilen',
    description: 'Orientalisches Fingerfood zum Teilen – perfekt für lockere Events und Empfänge.',
    detailedItems: [
      {
        items: [
          { name: 'Belegte Brote', description: 'Mit Hummus, Baba Ghanoush, Frischkäse, Avocado & Fisch-Dips' },
          { name: 'Hausgemachte Fatayer', description: 'Gefüllte Teigtaschen (Käse, Hähnchen, Rind oder Spinat)' },
          { name: 'Knusprige Kibbeh', description: 'Grießbällchen mit Rind- oder Kartoffelfüllung' },
          { name: 'Frische Salatauswahl', description: 'Tabouleh, Fattoush & Couscoussalat' },
        ],
      },
    ],
    pricePerPerson: 26.75,
    minGuests: 20,
    includesDessert: false,
  },
  {
    id: 'gruene-levante',
    name: 'Grüne Levante',
    subtitle: 'Vegetarisch',
    description: 'Kalte vegetarische Vielfalt – ideal für gesundheitsbewusste Gäste.',
    detailedItems: [
      {
        items: [
          { name: 'Kichererbsensalat', description: 'Kichererbsen mit Eisberg, Tomaten, frischen Kräutern, Zitrone und feinem Tahini-Dressing.' },
          { name: 'Tabouleh', description: 'Frischer Petersiliensalat mit Tomaten, Bulgur und Zitronensaft.' },
          { name: 'Fattoush', description: 'Knackiger Petersiliensalat mit Granatapfel und Cranberries.' },
          { name: 'Hummus', description: 'Cremiges Kichererbsenpüree mit Tahini.' },
          { name: 'Baba Ghanoush', description: 'Geröstete Aubergine, fein püriert mit Tahini.' },
          { name: 'Mini-Fatayer', description: 'Goldbraun gebackene, gefüllte Teigtaschen (Spinat & Käse).' },
          { name: 'Kibbeh', description: 'Knusprige Grießbällchen mit herzhafter Kartoffelfüllung.' },
          { name: 'Gefüllte Gemüserollen / Wraps', description: 'Leicht gefüllte Rollen mit aromatischer Gemüsefüllung.' },
        ],
      },
    ],
    pricePerPerson: 24.61,
    minGuests: 20,
    includesDessert: false,
    isVegetarian: true,
  },
  {
    id: 'sattuni-klassik',
    name: 'Sattuni Klassik',
    subtitle: 'Kalt & warm kombiniert',
    description: 'Der perfekte Mix aus kalten und warmen Speisen für jede Gelegenheit.',
    detailedItems: [
      {
        items: [
          { name: 'Kichererbsensalat', description: 'Frisch mariniert mit Kräutern, Zitrone und Tahini.' },
          { name: 'Tabouleh', description: 'Petersilie, Tomaten, Bulgur und Zitrone – klassisch & frisch.' },
          { name: 'Fattoush', description: 'Petersiliensalat mit Granatapfel und Cranberries.' },
          { name: 'Hummus', description: 'Cremiger Klassiker aus Kichererbsen und Tahini.' },
          { name: 'Baba Ghanoush', description: 'Auberginencreme mit feiner Rauchnote.' },
          { name: 'Mini-Fatayer', description: 'Hausgemachte Teigtaschen (Spinat / Käse / Hähnchen / Hackfleisch).' },
          { name: 'Kibbeh', description: 'Knusprige Grießbällchen mit herzhafter Füllung (Kartoffel oder Hackfleisch).' },
          { name: 'Hähnchenbruststreifen', description: 'Zartes Hähnchen, serviert auf würzigem Reis.' },
          { name: 'Zarte Rindfleischstreifen', description: 'Saftig geschmortes Rindfleisch orientalisch gewürzt.' },
          { name: 'Couscous mit saisonalem Gemüse', description: 'Locker gedämpfter Couscous mit Ofen- und Marktgemüse.' },
        ],
      },
    ],
    pricePerPerson: 27.82,
    minGuests: 20,
    includesDessert: false,
    popular: true,
  },
  {
    id: 'sattuni-genuss',
    name: 'Sattuni Genuss',
    subtitle: 'Klassiker mit süßem Abschluss',
    description: 'Klassiker mit süßem Abschluss – inklusive Dessert.',
    detailedItems: [
      {
        items: [
          { name: 'Kichererbsensalat', description: 'Frisch mariniert mit Kräutern, Zitrone und Tahini.' },
          { name: 'Tabouleh', description: 'Petersilie, Tomaten, Bulgur und Zitrone – klassisch & frisch.' },
          { name: 'Fattoush', description: 'Petersiliensalat mit Granatapfel und Cranberries.' },
          { name: 'Hummus', description: 'Cremiger Klassiker aus Kichererbsen und Tahini.' },
          { name: 'Baba Ghanoush', description: 'Auberginencreme mit feiner Rauchnote.' },
          { name: 'Mini-Fatayer', description: 'Hausgemachte Teigtaschen (Spinat / Käse / Hähnchen / Hackfleisch).' },
          { name: 'Kibbeh', description: 'Knusprige Grießbällchen mit herzhafter Füllung (Kartoffel oder Hackfleisch).' },
          { name: 'Hähnchenbruststreifen', description: 'Zartes Hähnchen, serviert auf würzigem Reis.' },
          { name: 'Zarte Rindfleischstreifen', description: 'Saftig geschmortes Rindfleisch orientalisch gewürzt.' },
          { name: 'Couscous mit saisonalem Gemüse', description: 'Locker gedämpfter Couscous mit Ofen- und Marktgemüse.' },
          { name: 'Dessert', description: 'Die Zusammenstellung erfolgt flexibel und kann je nach Anlass, Gruppengröße und Wunsch variieren.' },
        ],
      },
    ],
    pricePerPerson: 29.96,
    minGuests: 20,
    includesDessert: true,
  },
  {
    id: 'sattuni-festmahl',
    name: 'Sattuni Festmahl',
    subtitle: 'Großzügiges Buffet – kalt & warm',
    description: 'Großzügiges Buffet mit kalten und warmen Speisen plus Dessert.',
    detailedItems: [
      {
        category: 'Kalte Vorspeisen',
        items: [
          { name: 'Tabouleh', description: 'Frischer Petersiliensalat mit Zitrone und Bulgur.' },
          { name: 'Fattoush', description: 'Knackiger Salat mit Granatapfel und Cranberries.' },
          { name: 'Hummus', description: 'Cremig, fein abgeschmeckt mit Tahini.' },
          { name: 'Baba Ghanoush', description: 'Geröstete Aubergine, mild und aromatisch.' },
          { name: 'Mini-Fatayer', description: 'Gefüllte Teigtaschen in verschiedenen Variationen.' },
          { name: 'Kibbeh', description: 'Knusprige Grießbällchen mit herzhafter Füllung.' },
          { name: 'Ananas-Gurken-Salat', description: 'Fruchtig-frisch mit Koriander und Limette.' },
          { name: 'Couscoussalat', description: 'Mit Tomaten, Koriander und feiner Würze.' },
        ],
      },
      {
        category: 'Warme Speisen',
        items: [
          { name: 'Mahashi', description: 'Gefüllte Weinblätter und Zucchini, klassisch gewürzt.' },
          { name: 'Makloube', description: 'Traditioneller arabischer Gemüse-Reis.' },
          { name: 'Ofenkartoffeln', description: 'Goldbraun gebacken und aromatisch gewürzt.' },
          { name: 'Couscous mit Ofengemüse', description: 'Herzhaft, warm und ausgewogen.' },
          { name: 'Hähnchenbruststreifen', description: 'Zart gegart und orientalisch gewürzt.' },
          { name: 'Rindfleischstreifen', description: 'Saftig und langsam geschmort.' },
          { name: 'Dessert', description: 'Die Zusammenstellung erfolgt flexibel und kann je nach Anlass, Gruppengröße und Wunsch variieren.' },
        ],
      },
    ],
    pricePerPerson: 36.38,
    minGuests: 40,
    includesDessert: true,
  },
  {
    id: 'sattuni-royal',
    name: 'Sattuni Royal',
    subtitle: 'Unsere umfangreichste Auswahl',
    description: 'Unser Premium-Erlebnis mit geschmorter Lammschulter und vollem Programm.',
    detailedItems: [
      {
        category: 'Kalte Vorspeisen',
        items: [
          { name: 'Tabouleh', description: 'Frischer Petersiliensalat mit Zitrone und Bulgur.' },
          { name: 'Fattoush', description: 'Knackiger Salat mit Granatapfel und Cranberries.' },
          { name: 'Hummus', description: 'Cremig, fein abgeschmeckt mit Tahini.' },
          { name: 'Baba Ghanoush', description: 'Geröstete Aubergine, mild und aromatisch.' },
          { name: 'Mini-Fatayer', description: 'Gefüllte Teigtaschen in verschiedenen Variationen.' },
          { name: 'Kibbeh', description: 'Knusprige Grießbällchen mit herzhafter Füllung.' },
          { name: 'Ananas-Gurken-Salat', description: 'Fruchtig-frisch mit Koriander und Limette.' },
          { name: 'Couscoussalat', description: 'Mit Tomaten, Koriander und feiner Würze.' },
        ],
      },
      {
        category: 'Warme Speisen',
        items: [
          { name: 'Mahashi', description: 'Gefüllte Weinblätter und Zucchini, klassisch gewürzt.' },
          { name: 'Makloube', description: 'Aromatischer Gemüsereis nach traditioneller Art.' },
          { name: 'Ofenkartoffeln', description: 'Knusprig gebacken.' },
          { name: 'Couscous mit Ofengemüse', description: 'Fein gewürzt und herzhaft.' },
          { name: 'Ofen-Hähnchenkeulen', description: 'Saftig gebacken mit orientalischen Gewürzen.' },
          { name: 'Geschmorte Lammschulter', description: 'Zart, intensiv und langsam gegart.' },
          { name: 'Dessert', description: 'Die Zusammenstellung erfolgt flexibel und kann je nach Anlass, Gruppengröße und Wunsch variieren.' },
        ],
      },
    ],
    pricePerPerson: 39.59,
    minGuests: 40,
    includesDessert: true,
    popular: true,
  },
];

// ===== TYPE EXPORTS =====
export type Appetizer = typeof APPETIZERS[number];
export type MainCourse = typeof MAIN_COURSES[number];
export type SideDish = typeof SIDE_DISHES[number];
export type Dessert = typeof DESSERTS[number];

// ===== CUSTOM MENU LIMITS =====
export const CUSTOM_MENU_LIMITS = {
  minGuests: 40,
  courses: 3,
} as const;

// ===== HELPER FUNCTIONS =====
export const getAppetizerById = (id: string) => APPETIZERS.find(a => a.id === id);
export const getMainCourseById = (id: string) => MAIN_COURSES.find(m => m.id === id);
export const getSideDishById = (id: string) => SIDE_DISHES.find(s => s.id === id);
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
