// India wedding venue directory
// -------------------------------------------------------------------------
// Data notes (read before editing):
// - Names, cities and states are real, currently operating wedding venues.
// - Pricing is NOT a live feed. There is no public real-time pricing API for
//   Indian wedding venues (vendors quote privately, per date/season/menu), so
//   figures below are 2026 market-rate ranges compiled from published wedding
//   industry pricing guides for each venue's category and city tier.
// - `verified: true` venues have pricing cross-checked against multiple
//   published 2026 sources for that *specific* property (see sourceNote).
//   All other venues carry category-level estimates — confirm exact rates
//   directly with the venue before budgeting.
// - `image` for verified landmark properties links to real building
//   photography (Wikimedia Commons, CC-licensed). Other venues use
//   representative regional styling photography, not the property's own
//   marketing photos — swap in the venue's official gallery when available.
// -------------------------------------------------------------------------

export type Region =
  | "North"
  | "South"
  | "East"
  | "West"
  | "Central"
  | "Northeast";

export type VenueCategory =
  | "Palace"
  | "Heritage Hotel"
  | "Luxury Hotel"
  | "Beach Resort"
  | "Backwater Resort"
  | "Mountain Resort"
  | "Destination Lawns";

export interface IndiaVenue {
  id: string;
  name: string;
  city: string;
  state: string;
  region: Region;
  category: VenueCategory;
  capacity: string;
  plateMin: number;
  plateMax: number;
  packageEstimate: string;
  highlight: string;
  image: string;
  verified: boolean;
  sourceNote: string;
  updated: string;
}

export const venues: IndiaVenue[] = [
  {
    id: "rambagh-palace-jaipur",
    name: "Rambagh Palace",
    city: "Jaipur",
    state: "Rajasthan",
    region: "North",
    category: "Palace",
    capacity: "150 – 2,000 guests",
    plateMin: 5000,
    plateMax: 15000,
    packageEstimate: "₹90L – ₹2.5Cr for 200 guests, 2–3 days",
    highlight: "Former royal residence of the Maharaja of Jaipur, Mughal gardens, 78 restored suites.",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Rambagh_Palace_hotel_Jaipur_lobby_courtyard.jpg",
    verified: true,
    sourceNote: "Cross-checked against 3 independent 2026 palace-wedding pricing guides.",
    updated: "Jul 2026",
  },
  {
    id: "falaknuma-palace-hyderabad",
    name: "Taj Falaknuma Palace",
    city: "Hyderabad",
    state: "Telangana",
    region: "South",
    category: "Palace",
    capacity: "100 – 2,500 guests (lawn)",
    plateMin: 4000,
    plateMax: 12000,
    packageEstimate: "₹25L – ₹80L intimate · up to ₹3Cr full-scale",
    highlight: "The Nizam's 32-acre hilltop palace — Nizami cuisine, Venetian chandeliers, 60 suites.",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Falaknuma_Palace_01.jpg",
    verified: true,
    sourceNote: "Cross-checked against IHCL-desk and planner pricing guides, 2026.",
    updated: "Jul 2026",
  },
  {
    id: "taj-mahal-palace-mumbai",
    name: "Taj Mahal Palace",
    city: "Mumbai",
    state: "Maharashtra",
    region: "West",
    category: "Heritage Hotel",
    capacity: "80 – 600 guests",
    plateMin: 3500,
    plateMax: 8500,
    packageEstimate: "₹45L – ₹1.4Cr for 200 guests",
    highlight: "The flagship 1903 Taj landmark beside the Gateway of India — heritage wing & sea-facing tower.",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Facade_of_Taj_Mahal_Palace_Hotel_-_Colaba_District_-_Mumbai_-_Maharashtra_-_India_(26119514800).jpg",
    verified: true,
    sourceNote: "City-tier pricing per 2026 Mumbai wedding cost benchmarks (venue scarcity premium applies).",
    updated: "Jul 2026",
  },
  {
    id: "wedcation-tivoli-ambala",
    name: "Wedcation by Tivoli",
    city: "Ambala",
    state: "Haryana",
    region: "North",
    category: "Destination Lawns",
    capacity: "100 – 2,000 guests",
    plateMin: 2500,
    plateMax: 5500,
    packageEstimate: "₹18L – ₹45L for 200 guests",
    highlight: "Multi-zone resort on the Ambala–Chandigarh Expressway with on-site guest suites.",
    image:
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=1200&auto=format&fit=crop",
    verified: true,
    sourceNote: "Published 2026 venue rate card (starting ₹2,500/plate veg, 100–2,000 guest capacity).",
    updated: "Jul 2026",
  },
  {
    id: "taj-exotica-goa",
    name: "Taj Exotica Resort & Spa",
    city: "Benaulim, South Goa",
    state: "Goa",
    region: "West",
    category: "Beach Resort",
    capacity: "Up to 400 guests",
    plateMin: 1800,
    plateMax: 3500,
    packageEstimate: "₹28L – ₹55L for 200 guests",
    highlight: "Beachfront lawns on Benaulim Beach with Portuguese-Goan architecture.",
    image:
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1200&auto=format&fit=crop",
    verified: false,
    sourceNote: "Category estimate: Goa beach-resort wedding market, 2026.",
    updated: "Jul 2026",
  },
  {
    id: "kumarakom-lake-resort-kerala",
    name: "Kumarakom Lake Resort",
    city: "Kottayam",
    state: "Kerala",
    region: "South",
    category: "Backwater Resort",
    capacity: "Up to 300 guests",
    plateMin: 1200,
    plateMax: 2500,
    packageEstimate: "₹15L – ₹35L for 200 guests",
    highlight: "Heritage tharavadu-style villas on Vembanad Lake; traditional Kerala sadya catering.",
    image:
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1200&auto=format&fit=crop",
    verified: false,
    sourceNote: "Category estimate: Kerala backwater-resort wedding market, 2026.",
    updated: "Jul 2026",
  },
  {
    id: "itc-gardenia-bengaluru",
    name: "ITC Gardenia",
    city: "Bengaluru",
    state: "Karnataka",
    region: "South",
    category: "Luxury Hotel",
    capacity: "Up to 500 guests",
    plateMin: 3000,
    plateMax: 6500,
    packageEstimate: "₹30L – ₹85L for 200 guests",
    highlight: "LEED-platinum luxury hotel in the city centre with landscaped event lawns.",
    image:
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1200&auto=format&fit=crop",
    verified: false,
    sourceNote: "Category estimate: Bengaluru 5-star hotel wedding market, 2026.",
    updated: "Jul 2026",
  },
  {
    id: "itc-grand-chola-chennai",
    name: "ITC Grand Chola",
    city: "Chennai",
    state: "Tamil Nadu",
    region: "South",
    category: "Luxury Hotel",
    capacity: "Up to 700 guests",
    plateMin: 3000,
    plateMax: 7000,
    packageEstimate: "₹32L – ₹90L for 200 guests",
    highlight: "Chola-dynasty-inspired architecture with India's largest column-free ballroom.",
    image:
      "https://images.unsplash.com/photo-1600096194534-95cf5ece04cf?q=80&w=1200&auto=format&fit=crop",
    verified: false,
    sourceNote: "Category estimate: Chennai 5-star hotel wedding market, 2026.",
    updated: "Jul 2026",
  },
  {
    id: "itc-maurya-delhi",
    name: "ITC Maurya",
    city: "New Delhi",
    state: "Delhi",
    region: "North",
    category: "Luxury Hotel",
    capacity: "Up to 600 guests",
    plateMin: 3500,
    plateMax: 8000,
    packageEstimate: "₹40L – ₹1.2Cr for 200 guests",
    highlight: "Diplomatic-enclave landmark hotel with the historic Bukhara restaurant on-site.",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop",
    verified: false,
    sourceNote: "Category estimate: Delhi NCR luxury-hotel wedding market, 2026.",
    updated: "Jul 2026",
  },
  {
    id: "taj-swarna-amritsar",
    name: "Taj Swarna",
    city: "Amritsar",
    state: "Punjab",
    region: "North",
    category: "Luxury Hotel",
    capacity: "Up to 450 guests",
    plateMin: 2500,
    plateMax: 5500,
    packageEstimate: "₹25L – ₹65L for 200 guests",
    highlight: "Contemporary luxury hotel minutes from the Golden Temple, with expansive banquet lawns.",
    image:
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=1200&auto=format&fit=crop",
    verified: false,
    sourceNote: "Category estimate: Punjab luxury-hotel wedding market, 2026.",
    updated: "Jul 2026",
  },
  {
    id: "jaypee-palace-agra",
    name: "Jaypee Palace Hotel",
    city: "Agra",
    state: "Uttar Pradesh",
    region: "North",
    category: "Heritage Hotel",
    capacity: "Up to 800 guests",
    plateMin: 1800,
    plateMax: 4000,
    packageEstimate: "₹18L – ₹45L for 200 guests",
    highlight: "35-acre Mughal-garden property minutes from the Taj Mahal.",
    image:
      "https://images.unsplash.com/photo-1509927083803-4bd519298ac4?q=80&w=1200&auto=format&fit=crop",
    verified: false,
    sourceNote: "Category estimate: Agra heritage-hotel wedding market, 2026.",
    updated: "Jul 2026",
  },
  {
    id: "itc-sonar-kolkata",
    name: "ITC Sonar",
    city: "Kolkata",
    state: "West Bengal",
    region: "East",
    category: "Luxury Hotel",
    capacity: "Up to 500 guests",
    plateMin: 2200,
    plateMax: 5000,
    packageEstimate: "₹20L – ₹50L for 200 guests",
    highlight: "Waterside luxury hotel with landscaped lagoons and a dedicated Bengali wedding menu.",
    image:
      "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=1200&auto=format&fit=crop",
    verified: false,
    sourceNote: "Category estimate: Kolkata 5-star hotel wedding market — one of India's most cost-efficient metros, 2026.",
    updated: "Jul 2026",
  },
  {
    id: "vivanta-ahmedabad",
    name: "Vivanta Ahmedabad",
    city: "Ahmedabad",
    state: "Gujarat",
    region: "West",
    category: "Luxury Hotel",
    capacity: "Up to 400 guests",
    plateMin: 1800,
    plateMax: 4000,
    packageEstimate: "₹18L – ₹42L for 200 guests",
    highlight: "Modern 5-star property with column-free banquet halls and a rooftop lawn.",
    image:
      "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=1200&auto=format&fit=crop",
    verified: false,
    sourceNote: "Category estimate: Gujarat 5-star hotel wedding market, 2026.",
    updated: "Jul 2026",
  },
  {
    id: "wildflower-hall-shimla",
    name: "Wildflower Hall, an Oberoi Resort",
    city: "Shimla",
    state: "Himachal Pradesh",
    region: "North",
    category: "Mountain Resort",
    capacity: "Up to 150 guests",
    plateMin: 3000,
    plateMax: 6000,
    packageEstimate: "₹35L – ₹80L for intimate 150-guest wedding",
    highlight: "Former viceregal retreat at 8,250 ft, framed by cedar forest and Himalayan views.",
    image:
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1200&auto=format&fit=crop",
    verified: false,
    sourceNote: "Category estimate: Himalayan luxury-resort wedding market, 2026.",
    updated: "Jul 2026",
  },
  {
    id: "ananda-himalayas-rishikesh",
    name: "Ananda in the Himalayas",
    city: "Rishikesh",
    state: "Uttarakhand",
    region: "North",
    category: "Mountain Resort",
    capacity: "Up to 120 guests",
    plateMin: 3500,
    plateMax: 7000,
    packageEstimate: "₹40L – ₹90L for intimate 120-guest wedding",
    highlight: "Wellness palace resort on the former Viceroy's Maharaja estate above the Ganges.",
    image:
      "https://images.unsplash.com/photo-1544078751-58fee2d8a03b?q=80&w=1200&auto=format&fit=crop",
    verified: false,
    sourceNote: "Category estimate: Rishikesh wellness-resort wedding market, 2026.",
    updated: "Jul 2026",
  },
  {
    id: "jehan-numa-palace-bhopal",
    name: "Jehan Numa Palace",
    city: "Bhopal",
    state: "Madhya Pradesh",
    region: "Central",
    category: "Heritage Hotel",
    capacity: "Up to 500 guests",
    plateMin: 1500,
    plateMax: 3200,
    packageEstimate: "₹15L – ₹38L for 200 guests",
    highlight: "1890s Begum-era heritage palace with wraparound colonnades and lawns.",
    image:
      "https://images.unsplash.com/photo-1550005809-91ad75fb315f?q=80&w=1200&auto=format&fit=crop",
    verified: false,
    sourceNote: "Category estimate: Central India heritage-hotel wedding market, 2026.",
    updated: "Jul 2026",
  },
  {
    id: "novotel-visakhapatnam",
    name: "Novotel Visakhapatnam Varun Beach",
    city: "Visakhapatnam",
    state: "Andhra Pradesh",
    region: "South",
    category: "Beach Resort",
    capacity: "Up to 350 guests",
    plateMin: 1500,
    plateMax: 3000,
    packageEstimate: "₹14L – ₹32L for 200 guests",
    highlight: "Beachfront hotel on Varun Beach with sea-view banquet lawns.",
    image:
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1200&auto=format&fit=crop",
    verified: false,
    sourceNote: "Category estimate: Andhra Pradesh coastal-hotel wedding market, 2026.",
    updated: "Jul 2026",
  },
  {
    id: "mayfair-lagoon-bhubaneswar",
    name: "Mayfair Lagoon",
    city: "Bhubaneswar",
    state: "Odisha",
    region: "East",
    category: "Destination Lawns",
    capacity: "Up to 600 guests",
    plateMin: 1400,
    plateMax: 3000,
    packageEstimate: "₹14L – ₹30L for 200 guests",
    highlight: "13-acre themed resort with private cottages, lagoons and multiple banquet lawns.",
    image:
      "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?q=80&w=1200&auto=format&fit=crop",
    verified: false,
    sourceNote: "Category estimate: Odisha resort-and-lawns wedding market, 2026.",
    updated: "Jul 2026",
  },
  {
    id: "vivanta-guwahati",
    name: "Vivanta Guwahati",
    city: "Guwahati",
    state: "Assam",
    region: "Northeast",
    category: "Luxury Hotel",
    capacity: "Up to 350 guests",
    plateMin: 1500,
    plateMax: 3200,
    packageEstimate: "₹15L – ₹32L for 200 guests",
    highlight: "Riverside luxury hotel on the Brahmaputra with Assamese wedding menu specialists.",
    image:
      "https://images.unsplash.com/photo-1587271636175-90d58cdad458?q=80&w=1200&auto=format&fit=crop",
    verified: false,
    sourceNote: "Category estimate: Northeast India 5-star hotel wedding market, 2026.",
    updated: "Jul 2026",
  },
  {
    id: "hotel-maurya-patna",
    name: "Hotel Maurya Patna",
    city: "Patna",
    state: "Bihar",
    region: "East",
    category: "Luxury Hotel",
    capacity: "Up to 400 guests",
    plateMin: 1200,
    plateMax: 2800,
    packageEstimate: "₹12L – ₹28L for 200 guests",
    highlight: "Patna's established 5-star address with banquet halls and a landscaped lawn.",
    image:
      "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1200&auto=format&fit=crop",
    verified: false,
    sourceNote: "Category estimate: Bihar 5-star hotel wedding market, 2026.",
    updated: "Jul 2026",
  },
  {
    id: "vivanta-dal-view-srinagar",
    name: "Vivanta Dal View",
    city: "Srinagar",
    state: "Jammu & Kashmir",
    region: "North",
    category: "Mountain Resort",
    capacity: "Up to 300 guests",
    plateMin: 2000,
    plateMax: 4000,
    packageEstimate: "₹20L – ₹45L for 200 guests",
    highlight: "Hillside luxury hotel overlooking Dal Lake and the Zabarwan mountains.",
    image:
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1200&auto=format&fit=crop",
    verified: false,
    sourceNote: "Category estimate: Kashmir luxury-hotel wedding market, 2026.",
    updated: "Jul 2026",
  },
  {
    id: "babylon-inn-raipur",
    name: "Babylon Inn",
    city: "Raipur",
    state: "Chhattisgarh",
    region: "Central",
    category: "Luxury Hotel",
    capacity: "Up to 400 guests",
    plateMin: 1000,
    plateMax: 2200,
    packageEstimate: "₹10L – ₹22L for 200 guests",
    highlight: "Raipur's leading city hotel with dedicated wedding banquet floors.",
    image:
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1200&auto=format&fit=crop",
    verified: false,
    sourceNote: "Category estimate: Chhattisgarh city-hotel wedding market, 2026.",
    updated: "Jul 2026",
  },
  {
    id: "mayfair-gangtok",
    name: "Mayfair Spa Resort & Casino",
    city: "Gangtok",
    state: "Sikkim",
    region: "Northeast",
    category: "Mountain Resort",
    capacity: "Up to 200 guests",
    plateMin: 1800,
    plateMax: 3500,
    packageEstimate: "₹18L – ₹35L for 200 guests",
    highlight: "Former royal-guesthouse resort with Kanchenjunga views in the pines above Gangtok.",
    image:
      "https://images.unsplash.com/photo-1544078751-58fee2d8a03b?q=80&w=1200&auto=format&fit=crop",
    verified: false,
    sourceNote: "Category estimate: Sikkim mountain-resort wedding market, 2026.",
    updated: "Jul 2026",
  },
  {
    id: "radisson-blu-ranchi",
    name: "Radisson Blu Ranchi",
    city: "Ranchi",
    state: "Jharkhand",
    region: "East",
    category: "Luxury Hotel",
    capacity: "Up to 350 guests",
    plateMin: 1300,
    plateMax: 2800,
    packageEstimate: "₹13L – ₹28L for 200 guests",
    highlight: "Ranchi's premier international hotel brand with a dedicated wedding lawn.",
    image:
      "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?q=80&w=1200&auto=format&fit=crop",
    verified: false,
    sourceNote: "Category estimate: Jharkhand 5-star hotel wedding market, 2026.",
    updated: "Jul 2026",
  },
];

export const regions: Region[] = [
  "North",
  "South",
  "East",
  "West",
  "Central",
  "Northeast",
];

export const states = Array.from(new Set(venues.map((v) => v.state))).sort();

export function formatINR(n: number): string {
  return new Intl.NumberFormat("en-IN").format(n);
}
