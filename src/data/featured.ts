import { Product } from '../types';

export const TRENDING_ITEMS: Product[] = [
  {
    id: 1,
    name: "Premium Denim Jacket",
    price: 89.99,
    description: "Classic denim jacket with modern styling",
    image: "https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef",
    category: "jackets"
  },
  {
    id: 2,
    name: "Casual Linen Shirt",
    price: 45.99,
    description: "Breathable linen shirt perfect for summer",
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c",
    category: "shirts"
  },
  {
    id: 3,
    name: "Designer Sweater",
    price: 69.99,
    description: "Cozy knit sweater for cold weather",
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27",
    category: "sweaters"
  }
];

export const CATEGORIES = [
  {
    name: "Summer Collection",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f",
    description: "Light and breezy styles for hot days"
  },
  {
    name: "Winter Essentials",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b",
    description: "Warm and cozy pieces for cold weather"
  },
  {
    name: "Formal Wear",
    image: "https://images.unsplash.com/photo-1490725263030-1f0521cec8ec",
    description: "Elegant attire for special occasions"
  }
];