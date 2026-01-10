/**
 * Catering-Pakete und Menü-Optionen
 * Diese Datei enthält alle verfügbaren Pakete und Gerichte für das Buchungssystem
 */

// ===== VORSPEISEN =====
export const APPETIZERS = [
  { id: 'hummus', name: 'Hummus', description: 'Cremige Kichererbsenpaste mit Tahini' },
  { id: 'baba-ganoush', name: 'Baba Ganoush', description: 'Geröstete Auberginencreme' },
  { id: 'muhammara', name: 'Muhammara', description: 'Walnuss-Paprika-Dip' },
  { id: 'tabouleh', name: 'Tabouleh', description: 'Frischer Petersiliensalat' },
  { id: 'fattoush', name: 'Fattoush', description: 'Levantinischer Brotsalat' },
  { id: 'labneh', name: 'Labneh', description: 'Cremiger Joghurt-Dip' },
  { id: 'foul', name: 'Foul', description: 'Würzige Bohnenpaste' },
  { id: 'kibbeh', name: 'Kibbeh', description: 'Gefüllte Bulgur-Kroketten' },
  { id: 'sambousek', name: 'Sambousek', description: 'Gefüllte Teigtaschen' },
  { id: 'falafel', name: 'Falafel', description: 'Knusprige Kichererbsenbällchen' },
  { id: 'halloumi', name: 'Halloumi', description: 'Gegrillter Halloumi-Käse' },
  { id: 'dolma', name: 'Dolma', description: 'Gefüllte Weinblätter' },
] as const;

// ===== HAUPTSPEISEN =====
export const MAIN_COURSES = [
  { id: 'shawarma-huhn', name: 'Shawarma Huhn', description: 'Mariniertes Hähnchen vom Spieß' },
  { id: 'shawarma-lamm', name: 'Shawarma Lamm', description: 'Zartes Lammfleisch vom Spieß' },
  { id: 'kofta', name: 'Kofta', description: 'Gewürzte Hackfleischspieße' },
  { id: 'shish-taouk', name: 'Shish Taouk', description: 'Marinierte Hähnchenspieße' },
  { id: 'mixed-grill', name: 'Mixed Grill', description: 'Auswahl gegrillter Fleischsorten' },
  { id: 'lamb-chops', name: 'Lammkoteletts', description: 'Gegrillte Lammkoteletts' },
  { id: 'mansaf', name: 'Mansaf', description: 'Traditionelles Lammgericht mit Joghurt' },
  { id: 'makloubeh', name: 'Makloubeh', description: 'Reis mit Gemüse und Fleisch' },
  { id: 'vegetarische-platte', name: 'Vegetarische Platte', description: 'Auswahl vegetarischer Gerichte' },
  { id: 'falafel-bowl', name: 'Falafel Bowl', description: 'Bowl mit Falafel und Gemüse' },
] as const;

// ===== DESSERTS =====
export const DESSERTS = [
  { id: 'baklava', name: 'Baklava', description: 'Blätterteig mit Pistazien und Honig' },
  { id: 'kunafa', name: 'Kunafa', description: 'Fadennudeln mit Käse und Sirup' },
  { id: 'maamoul', name: 'Maamoul', description: 'Gefüllte Grießkekse' },
  { id: 'halva', name: 'Halva', description: 'Süße Sesampaste' },
  { id: 'muhallabia', name: 'Muhallabia', description: 'Milchpudding mit Rosenwasser' },
  { id: 'frischer-obstsalat', name: 'Frischer Obstsalat', description: 'Saisonale Früchte' },
] as const;

// ===== PAKETE/MENÜS =====
export interface CateringPackage {
  id: string;
  name: string;
  description: string;
  courses: number;
  appetizers: string[];
  mainCourses: string[];
  desserts: string[];
  pricePerPerson: number;
  popular?: boolean;
}

export const CATERING_PACKAGES: CateringPackage[] = [
  {
    id: 'mezze-klassik',
    name: 'Mezze Klassik',
    description: 'Traditionelle orientalische Vorspeisen mit zwei herzhaften Hauptgerichten',
    courses: 2,
    appetizers: ['hummus', 'baba-ganoush', 'tabouleh', 'falafel', 'fattoush', 'labneh', 'muhammara'],
    mainCourses: ['shawarma-huhn', 'kofta'],
    desserts: [],
    pricePerPerson: 24.90,
  },
  {
    id: 'mezze-premium',
    name: 'Mezze Premium',
    description: 'Erweiterte Vorspeisen-Auswahl mit Premium-Hauptgerichten und süßem Abschluss',
    courses: 3,
    appetizers: ['hummus', 'baba-ganoush', 'muhammara', 'tabouleh', 'kibbeh', 'sambousek', 'halloumi'],
    mainCourses: ['shawarma-lamm', 'shish-taouk'],
    desserts: ['baklava', 'kunafa'],
    pricePerPerson: 34.90,
    popular: true,
  },
  {
    id: 'festlich',
    name: 'Festlich',
    description: 'Unser Festmenü mit exquisiten Spezialitäten für besondere Anlässe',
    courses: 3,
    appetizers: ['hummus', 'baba-ganoush', 'muhammara', 'kibbeh', 'dolma', 'halloumi', 'tabouleh'],
    mainCourses: ['mixed-grill', 'lamb-chops'],
    desserts: ['baklava', 'muhallabia'],
    pricePerPerson: 44.90,
  },
  {
    id: 'vegetarisch',
    name: 'Vegetarisch',
    description: 'Vollwertiges vegetarisches Menü mit vielfältigen Aromen',
    courses: 3,
    appetizers: ['hummus', 'baba-ganoush', 'muhammara', 'tabouleh', 'fattoush', 'labneh', 'falafel'],
    mainCourses: ['vegetarische-platte', 'falafel-bowl'],
    desserts: ['baklava', 'frischer-obstsalat'],
    pricePerPerson: 29.90,
  },
  {
    id: 'business-lunch',
    name: 'Business Lunch',
    description: 'Professionelles Catering für Geschäftsveranstaltungen und Meetings',
    courses: 2,
    appetizers: ['hummus', 'tabouleh', 'fattoush', 'falafel', 'labneh', 'halloumi', 'sambousek'],
    mainCourses: ['shish-taouk', 'shawarma-huhn'],
    desserts: [],
    pricePerPerson: 27.90,
  },
  {
    id: 'oriental-deluxe',
    name: 'Oriental Deluxe',
    description: 'Das ultimative orientalische Erlebnis mit allen Highlights unserer Küche',
    courses: 3,
    appetizers: ['hummus', 'baba-ganoush', 'muhammara', 'kibbeh', 'sambousek', 'dolma', 'halloumi'],
    mainCourses: ['mixed-grill', 'mansaf'],
    desserts: ['baklava', 'kunafa'],
    pricePerPerson: 49.90,
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
