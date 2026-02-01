// Size multipliers for different bottle sizes
export const sizeOptions = [
  { size: '3ml', multiplier: 1, label: '3ml' },
  { size: '6ml', multiplier: 1.8, label: '6ml' },
  { size: '15ml', multiplier: 4, label: '15ml' },
  { size: '30ml', multiplier: 7, label: '30ml' },
];

export const products = [
  {
    id: 1,
    name: "Velvet Oud",
    basePrice: 350,
    price: 350,
    category: "Premium",
    gradient: "from-teal-900 to-emerald-700",
    description: "A luxurious blend of rare oud and velvet musk. Deep, mysterious, and irresistibly elegant.",
    notes: ["Oud", "Musk", "Amber", "Sandalwood"]
  },
  {
    id: 2,
    name: "Saffron Rose",
    basePrice: 280,
    price: 280,
    category: "Floral",
    gradient: "from-slate-700 to-slate-500",
    description: "Exquisite saffron threads intertwined with Bulgarian roses. A timeless romantic fragrance.",
    notes: ["Saffron", "Rose", "Jasmine", "Musk"]
  },
  {
    id: 3,
    name: "Midnight Amber",
    basePrice: 320,
    price: 320,
    category: "Woody",
    gradient: "from-cyan-900 to-teal-700",
    description: "Warm amber enhanced with precious woods. Perfect for evening occasions.",
    notes: ["Amber", "Cedar", "Vanilla", "Patchouli"]
  },
  {
    id: 4,
    name: "Desert Musk",
    basePrice: 250,
    price: 250,
    category: "Fresh",
    gradient: "from-emerald-800 to-teal-600",
    description: "Clean white musk with subtle desert herbs. Light, fresh, and captivating.",
    notes: ["White Musk", "Herbs", "Citrus", "Wood"]
  },
  {
    id: 5,
    name: "Royal Sandalwood",
    basePrice: 340,
    price: 340,
    category: "Premium",
    gradient: "from-indigo-900 to-indigo-700",
    description: "Pure Mysore sandalwood essence. Creamy, meditative, and incredibly soothing.",
    notes: ["Sandalwood", "Cream", "Vanilla", "Musk"]
  },
  {
    id: 6,
    name: "Jasmine Night",
    basePrice: 270,
    price: 270,
    category: "Floral",
    gradient: "from-purple-900 to-violet-700",
    description: "Night-blooming jasmine captured at peak fragrance. Intoxicating and sensual.",
    notes: ["Jasmine", "Ylang", "Tuberose", "Musk"]
  },
  {
    id: 7,
    name: "Cedar Essence",
    basePrice: 290,
    price: 290,
    category: "Woody",
    gradient: "from-teal-800 to-cyan-600",
    description: "Noble cedarwood with subtle spice notes. Strong, distinguished, and masculine.",
    notes: ["Cedar", "Spice", "Leather", "Vetiver"]
  },
  {
    id: 8,
    name: "Arabian Spice",
    basePrice: 310,
    price: 310,
    category: "Spicy",
    gradient: "from-slate-800 to-zinc-600",
    description: "Exotic spices from Arabian souks. Warm, inviting, and wonderfully complex.",
    notes: ["Cardamom", "Cinnamon", "Clove", "Oud"]
  },
  {
    id: 9,
    name: "White Lotus",
    basePrice: 260,
    price: 260,
    category: "Fresh",
    gradient: "from-sky-800 to-cyan-600",
    description: "Delicate lotus flowers floating on pristine water. Pure, serene, and elegant.",
    notes: ["Lotus", "Water Lily", "Green Tea", "Musk"]
  },
  {
    id: 10,
    name: "Black Oudh",
    basePrice: 350,
    price: 350,
    category: "Premium",
    gradient: "from-zinc-900 to-slate-700",
    description: "The darkest, richest oud from aged agarwood. Bold, intense, and unforgettable.",
    notes: ["Oud", "Leather", "Smoke", "Amber"]
  },
  {
    id: 11,
    name: "Golden Amber",
    basePrice: 300,
    price: 300,
    category: "Woody",
    gradient: "from-emerald-900 to-emerald-700",
    description: "Sun-kissed amber with golden warmth. Cozy, inviting, and beautifully balanced.",
    notes: ["Amber", "Honey", "Vanilla", "Musk"]
  },
  {
    id: 12,
    name: "Rose Garden",
    basePrice: 275,
    price: 275,
    category: "Floral",
    gradient: "from-violet-800 to-purple-600",
    description: "A stroll through Damascus rose gardens. Fresh, feminine, and absolutely divine.",
    notes: ["Rose", "Geranium", "Peony", "Musk"]
  },
  {
    id: 13,
    name: "Mystic Musk",
    basePrice: 285,
    price: 285,
    category: "Fresh",
    gradient: "from-indigo-800 to-blue-600",
    description: "Ethereal musk with mysterious depth. Alluring, soft, and incredibly long-lasting.",
    notes: ["Musk", "Incense", "Amber", "Powder"]
  },
  {
    id: 14,
    name: "Agarwood Elite",
    basePrice: 350,
    price: 350,
    category: "Premium",
    gradient: "from-stone-800 to-zinc-600",
    description: "Premium grade agarwood from ancient forests. The pinnacle of luxury fragrances.",
    notes: ["Agarwood", "Rose", "Saffron", "Musk"]
  },
  {
    id: 15,
    name: "Lavender Dreams",
    basePrice: 240,
    price: 240,
    category: "Floral",
    gradient: "from-violet-700 to-purple-500",
    description: "French lavender meets sweet dreams. Calming, relaxing, and beautifully aromatic.",
    notes: ["Lavender", "Vanilla", "Tonka", "Musk"]
  },
  {
    id: 16,
    name: "Patchouli Dark",
    basePrice: 295,
    price: 295,
    category: "Woody",
    gradient: "from-teal-900 to-emerald-700",
    description: "Deep Indonesian patchouli at its finest. Earthy, rich, and hypnotically sensual.",
    notes: ["Patchouli", "Oud", "Vetiver", "Musk"]
  },
  {
    id: 17,
    name: "Citrus Breeze",
    basePrice: 230,
    price: 230,
    category: "Fresh",
    gradient: "from-cyan-700 to-teal-500",
    description: "Vibrant citrus notes with ocean breeze. Energizing, uplifting, and refreshing.",
    notes: ["Bergamot", "Lemon", "Sea Salt", "Musk"]
  },
  {
    id: 18,
    name: "Frankincense Royal",
    basePrice: 330,
    price: 330,
    category: "Premium",
    gradient: "from-slate-900 to-zinc-700",
    description: "Sacred frankincense from Oman. Spiritual, precious, and deeply meditative.",
    notes: ["Frankincense", "Myrrh", "Oud", "Rose"]
  },
  {
    id: 19,
    name: "Tuberose Bliss",
    basePrice: 265,
    price: 265,
    category: "Floral",
    gradient: "from-indigo-700 to-violet-500",
    description: "Heady tuberose in full bloom. Narcotic, glamorous, and absolutely intoxicating.",
    notes: ["Tuberose", "Jasmine", "Gardenia", "Musk"]
  },
  {
    id: 20,
    name: "Vetiver Woods",
    basePrice: 280,
    price: 280,
    category: "Woody",
    gradient: "from-emerald-800 to-teal-600",
    description: "Smoky vetiver from Haitian roots. Grounding, sophisticated, and deeply masculine.",
    notes: ["Vetiver", "Cedar", "Smoke", "Leather"]
  },
  {
    id: 21,
    name: "Bergamot Fresh",
    basePrice: 245,
    price: 245,
    category: "Fresh",
    gradient: "from-sky-700 to-blue-500",
    description: "Italian bergamot at its brightest. Sparkling, elegant, and utterly refreshing.",
    notes: ["Bergamot", "Neroli", "Musk", "Cedar"]
  },
  {
    id: 22,
    name: "Ambergris Luxe",
    basePrice: 350,
    price: 350,
    category: "Premium",
    gradient: "from-slate-800 to-stone-600",
    description: "Rare ambergris essence from the seas. Animalic, warm, and exceptionally precious.",
    notes: ["Ambergris", "Musk", "Sandalwood", "Vanilla"]
  },
  {
    id: 23,
    name: "Magnolia Spring",
    basePrice: 255,
    price: 255,
    category: "Floral",
    gradient: "from-violet-600 to-purple-400",
    description: "Fresh magnolia blossoms in spring rain. Light, romantic, and effortlessly beautiful.",
    notes: ["Magnolia", "Lily", "Peony", "White Tea"]
  },
  {
    id: 24,
    name: "Tobacco Leather",
    basePrice: 315,
    price: 315,
    category: "Spicy",
    gradient: "from-zinc-800 to-slate-600",
    description: "Rich tobacco leaves and fine leather. Bold, distinguished, and timelessly elegant.",
    notes: ["Tobacco", "Leather", "Honey", "Vanilla"]
  },
];
