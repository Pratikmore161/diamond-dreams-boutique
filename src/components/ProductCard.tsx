import { Link } from 'react-router-dom';
import { Product } from '@/types/product';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  
  return (
    <div className="group">
      <Link to={`/product/${product.id}`}>
        <div className="aspect-square overflow-hidden rounded-lg bg-secondary mb-4">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </Link>
      
      <div className="space-y-2">
        <Link to={`/product/${product.id}`}>
          <h3 className="font-serif text-lg font-medium group-hover:text-accent transition-colors">
            {product.name}
          </h3>
        </Link>
        <p className="text-foreground font-medium">${product.price.toLocaleString()}</p>
        <Button 
          variant="gold" 
          size="sm" 
          className="w-full"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
}
