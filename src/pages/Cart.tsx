import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';

const Cart = () => {
  const { items, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart();
  
  if (items.length === 0) {
    return (
      <main className="container mx-auto px-4 py-12">
        <div className="text-center py-20">
          <h1 className="text-4xl font-serif font-bold mb-4">Your Cart is Empty</h1>
          <p className="text-muted-foreground mb-8">
            Discover our exquisite collection and find your perfect piece.
          </p>
          <Link to="/shop">
            <Button variant="gold" size="lg">
              Continue Shopping
            </Button>
          </Link>
        </div>
      </main>
    );
  }
  
  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-serif font-bold mb-8">Shopping Cart</h1>
      
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          {items.map((item) => (
            <div key={item.id} className="flex gap-4 border rounded-lg p-4">
              <Link to={`/product/${item.id}`} className="flex-shrink-0">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded"
                />
              </Link>
              
              <div className="flex-1 space-y-2">
                <Link to={`/product/${item.id}`}>
                  <h3 className="font-serif font-medium text-lg hover:text-accent transition-colors">
                    {item.name}
                  </h3>
                </Link>
                <p className="text-muted-foreground text-sm capitalize">{item.category}</p>
                <p className="font-medium">${item.price.toLocaleString()}</p>
                
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  >
                    <Minus className="h-3 w-3" />
                  </Button>
                  <span className="w-8 text-center font-medium">{item.quantity}</span>
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    <Plus className="h-3 w-3" />
                  </Button>
                </div>
              </div>
              
              <div className="flex flex-col items-end justify-between">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => removeFromCart(item.id)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
                <p className="font-medium">
                  ${(item.price * item.quantity).toLocaleString()}
                </p>
              </div>
            </div>
          ))}
          
          <Button variant="outline" onClick={clearCart} className="w-full">
            Clear Cart
          </Button>
        </div>
        
        <div className="lg:col-span-1">
          <div className="border rounded-lg p-6 space-y-4 sticky top-20">
            <h2 className="text-2xl font-serif font-bold">Order Summary</h2>
            
            <div className="space-y-2 border-b pb-4">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="font-medium">${totalPrice.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Shipping</span>
                <span className="font-medium">Free</span>
              </div>
            </div>
            
            <div className="flex justify-between text-lg font-bold">
              <span>Total</span>
              <span>${totalPrice.toLocaleString()}</span>
            </div>
            
            <Button variant="gold" size="lg" className="w-full">
              Proceed to Checkout
            </Button>
            
            <Link to="/shop">
              <Button variant="outline" className="w-full">
                Continue Shopping
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Cart;
