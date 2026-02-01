// Mock wine data for all categories
export const WINE_LIST = [
  // Red Wines
  {
    id: 1,
    name: "Reserve Sangiovese",
    category: "red",
    shortDescription: "A bold expression of Tuscany's most noble grape, aged in French oak for 18 months.",
    price: "$89",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    name: "Estate Cabernet",
    category: "red",
    shortDescription: "Deep, structured, with notes of blackcurrant and cedar. A wine of remarkable complexity.",
    price: "$125",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    name: "Heritage Merlot",
    category: "red",
    shortDescription: "Velvety and approachable, with soft tannins and flavors of plum and dark cherry.",
    price: "$75",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 4,
    name: "Old Vine Syrah",
    category: "red",
    shortDescription: "Intense and peppery, from vines planted in 1952. A true expression of terroir.",
    price: "$95",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 5,
    name: "Pinot Noir Reserve",
    category: "red",
    shortDescription: "Elegant and refined, with delicate red fruit and earthy undertones.",
    price: "$110",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 6,
    name: "Barbera d'Asti",
    category: "red",
    shortDescription: "Bright acidity balanced with rich fruit. Perfect for pairing with Italian cuisine.",
    price: "$65",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=800"
  },
  
  // White Wines
  {
    id: 7,
    name: "Estate Chardonnay",
    category: "white",
    shortDescription: "Buttery and rich, with notes of vanilla and toasted oak from barrel fermentation.",
    price: "$85",
    image: "https://images.unsplash.com/photo-1559158068-9ad6a7c717cf?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 8,
    name: "Sauvignon Blanc",
    category: "white",
    shortDescription: "Crisp and refreshing, with vibrant citrus and tropical fruit characteristics.",
    price: "$55",
    image: "https://images.unsplash.com/photo-1559158068-9ad6a7c717cf?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 9,
    name: "Pinot Grigio",
    category: "white",
    shortDescription: "Light and mineral-driven, with subtle pear and white flower notes.",
    price: "$48",
    image: "https://images.unsplash.com/photo-1559158068-9ad6a7c717cf?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 10,
    name: "Riesling Reserve",
    category: "white",
    shortDescription: "Aromatic and balanced, with stone fruit and a hint of petrol complexity.",
    price: "$72",
    image: "https://images.unsplash.com/photo-1559158068-9ad6a7c717cf?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 11,
    name: "Viognier",
    category: "white",
    shortDescription: "Full-bodied and floral, with apricot and honeysuckle on the palate.",
    price: "$68",
    image: "https://images.unsplash.com/photo-1559158068-9ad6a7c717cf?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 12,
    name: "Albariño",
    category: "white",
    shortDescription: "Bright and saline, with zesty citrus and a clean, mineral finish.",
    price: "$58",
    image: "https://images.unsplash.com/photo-1559158068-9ad6a7c717cf?auto=format&fit=crop&q=80&w=800"
  },
  
  // Rosé Wines
  {
    id: 13,
    name: "Provence Rosé",
    category: "rose",
    shortDescription: "Pale salmon in color, with delicate strawberry and rose petal notes.",
    price: "$45",
    image: "https://images.unsplash.com/photo-1558001373-7b93ee48ffa0?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 14,
    name: "Grenache Rosé",
    category: "rose",
    shortDescription: "Fresh and fruity, with watermelon and citrus zest. Perfect for summer.",
    price: "$42",
    image: "https://images.unsplash.com/photo-1558001373-7b93ee48ffa0?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 15,
    name: "Pinot Noir Rosé",
    category: "rose",
    shortDescription: "Elegant and dry, with notes of red berries and a crisp, clean finish.",
    price: "$52",
    image: "https://images.unsplash.com/photo-1558001373-7b93ee48ffa0?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 16,
    name: "Cinsault Rosé",
    category: "rose",
    shortDescription: "Light-bodied and aromatic, with floral and red fruit characteristics.",
    price: "$38",
    image: "https://images.unsplash.com/photo-1558001373-7b93ee48ffa0?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 17,
    name: "Sangiovese Rosato",
    category: "rose",
    shortDescription: "Italian-style rosé with bright acidity and cherry notes. Food-friendly.",
    price: "$48",
    image: "https://images.unsplash.com/photo-1558001373-7b93ee48ffa0?auto=format&fit=crop&q=80&w=800"
  },
  
  // Beer
  {
    id: 18,
    name: "Valley IPA",
    category: "beer",
    shortDescription: "Hoppy and aromatic, with citrus and pine notes. Brewed with local hops.",
    price: "$12",
    image: "https://images.unsplash.com/photo-1535958636474-b021ee887b13?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 19,
    name: "Estate Lager",
    category: "beer",
    shortDescription: "Crisp and clean, with a smooth finish. Our signature craft lager.",
    price: "$10",
    image: "https://images.unsplash.com/photo-1535958636474-b021ee887b13?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 20,
    name: "Barrel-Aged Stout",
    category: "beer",
    shortDescription: "Rich and complex, aged in wine barrels. Notes of coffee and dark chocolate.",
    price: "$18",
    image: "https://images.unsplash.com/photo-1535958636474-b021ee887b13?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 21,
    name: "Wheat Ale",
    category: "beer",
    shortDescription: "Light and refreshing, with hints of banana and clove. Unfiltered.",
    price: "$11",
    image: "https://images.unsplash.com/photo-1535958636474-b021ee887b13?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 22,
    name: "Saison",
    category: "beer",
    shortDescription: "Farmhouse-style ale with peppery spice and fruity esters.",
    price: "$14",
    image: "https://images.unsplash.com/photo-1535958636474-b021ee887b13?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 23,
    name: "Pilsner",
    category: "beer",
    shortDescription: "Classic European-style pilsner with noble hop character.",
    price: "$10",
    image: "https://images.unsplash.com/photo-1535958636474-b021ee887b13?auto=format&fit=crop&q=80&w=800"
  }
];

// Category metadata for hero sections
export const CATEGORY_INFO = {
  red: {
    title: "Red Wines",
    subtitle: "Robust & Earthy Selection",
    description: "Our red wine collection showcases the depth and complexity of carefully selected varietals, each expressing the unique character of our terroir through patient aging and traditional winemaking techniques.",
    heroImage: "https://images.unsplash.com/photo-1510850402719-e4c78a483946?auto=format&fit=crop&q=80&w=2070"
  },
  white: {
    title: "White Wines",
    subtitle: "Crisp & Mineral Selection",
    description: "From bright, citrus-driven expressions to rich, barrel-fermented styles, our white wines capture the freshness and elegance of carefully tended vineyards.",
    heroImage: "https://images.unsplash.com/photo-1559158068-9ad6a7c717cf?auto=format&fit=crop&q=80&w=2070"
  },
  rose: {
    title: "Rosé Wines",
    subtitle: "Fresh & Floral Selection",
    description: "Delicate and refreshing, our rosé collection offers the perfect balance of fruit and acidity, crafted for moments of effortless elegance.",
    heroImage: "https://images.unsplash.com/photo-1558001373-7b93ee48ffa0?auto=format&fit=crop&q=80&w=2070"
  },
  beer: {
    title: "Craft Beer",
    subtitle: "Artisan & Cold Selection",
    description: "Small-batch craft ales brewed with precision and passion, showcasing local ingredients and innovative techniques.",
    heroImage: "https://images.unsplash.com/photo-1535958636474-b021ee887b13?auto=format&fit=crop&q=80&w=2070"
  }
};

