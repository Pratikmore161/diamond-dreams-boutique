export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'rings' | 'necklaces' | 'earrings' | 'bracelets';
  image: string;
  featured?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}
