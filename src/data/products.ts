import { Product } from '@/types/product';
import productRing1 from '@/assets/product-ring-1.jpg';
import productRing2 from '@/assets/product-ring-2.jpg';
import productNecklace1 from '@/assets/product-necklace-1.jpg';
import productNecklace2 from '@/assets/product-necklace-2.jpg';
import productEarrings1 from '@/assets/product-earrings-1.jpg';
import productBracelet1 from '@/assets/product-bracelet-1.jpg';

export const products: Product[] = [
  {
    id: '1',
    name: 'Eternal Brilliance Ring',
    description: 'A stunning gold diamond ring with intricate detailing, perfect for engagements or special occasions.',
    price: 2499,
    category: 'rings',
    image: productRing1,
    featured: true,
  },
  {
    id: '2',
    name: 'Rose Gold Solitaire',
    description: 'Elegant rose gold engagement ring featuring a brilliant cut diamond in a classic setting.',
    price: 3299,
    category: 'rings',
    image: productRing2,
    featured: true,
  },
  {
    id: '3',
    name: 'Classic Pearl Necklace',
    description: 'Timeless pearl necklace with graduated pearls, a statement of elegance and sophistication.',
    price: 1899,
    category: 'necklaces',
    image: productNecklace1,
    featured: true,
  },
  {
    id: '4',
    name: 'Golden Pendant Necklace',
    description: 'Luxurious gold chain necklace with an ornate diamond-studded pendant.',
    price: 2199,
    category: 'necklaces',
    image: productNecklace2,
  },
  {
    id: '5',
    name: 'Diamond Stud Earrings',
    description: 'Classic diamond stud earrings set in gold, perfect for everyday elegance.',
    price: 1599,
    category: 'earrings',
    image: productEarrings1,
    featured: true,
  },
  {
    id: '6',
    name: 'Lattice Diamond Bracelet',
    description: 'Exquisite gold bracelet with intricate lattice design and diamonds throughout.',
    price: 2799,
    category: 'bracelets',
    image: productBracelet1,
  },
];
