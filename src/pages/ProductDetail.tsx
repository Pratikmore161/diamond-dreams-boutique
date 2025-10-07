import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { products } from '@/data/products';
import { useCart } from '@/contexts/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const product = products.find(p => p.id === id);
  
  if (!product) {
    return (
      <main className="container mx-auto px-4 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-serif font-bold mb-4">Product Not Found</h1>
          <Link to="/shop">
            <Button variant="gold">Return to Shop</Button>
          </Link>
        </div>
      </main>
    );
  }
  
  const handleAddToCart = () => {
    addToCart(product);
  };
  
  return (
    <main className="container mx-auto px-4 py-12">
      <Button 
        variant="ghost" 
        onClick={() => navigate(-1)}
        className="mb-8"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back
      </Button>
      
      <div className="grid md:grid-cols-2 gap-12">
        <div className="aspect-square rounded-lg overflow-hidden bg-secondary">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover"
          />
        </div>
        
        <div className="space-y-6">
          <div>
            <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2">
              {product.category}
            </p>
            <h1 className="text-4xl font-serif font-bold mb-4">{product.name}</h1>
            <p className="text-3xl font-medium text-accent mb-6">
              ${product.price.toLocaleString()}
            </p>
          </div>
          
          <div className="prose prose-sm">
            <p className="text-muted-foreground leading-relaxed">
              {product.description}
            </p>
          </div>
          
          <div className="space-y-4 pt-6">
            <Button 
              variant="gold" 
              size="lg" 
              className="w-full"
              onClick={handleAddToCart}
            >
              Add to Cart
            </Button>
            
            <div className="border-t pt-6 space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Material</span>
                <span className="font-medium">18K Gold</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Authenticity</span>
                <span className="font-medium">Certified</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Warranty</span>
                <span className="font-medium">Lifetime</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductDetail;
