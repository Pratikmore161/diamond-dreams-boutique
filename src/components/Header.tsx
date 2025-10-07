import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';

export function Header() {
  const location = useLocation();
  const { totalItems } = useCart();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="text-2xl font-serif font-bold tracking-tight">
            Lumière
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`text-sm font-medium transition-colors hover:text-accent ${
                isActive('/') ? 'text-accent' : 'text-foreground'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/shop" 
              className={`text-sm font-medium transition-colors hover:text-accent ${
                isActive('/shop') ? 'text-accent' : 'text-foreground'
              }`}
            >
              Shop
            </Link>
            <Link 
              to="/about" 
              className={`text-sm font-medium transition-colors hover:text-accent ${
                isActive('/about') ? 'text-accent' : 'text-foreground'
              }`}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className={`text-sm font-medium transition-colors hover:text-accent ${
                isActive('/contact') ? 'text-accent' : 'text-foreground'
              }`}
            >
              Contact
            </Link>
          </div>
          
          <Link to="/cart">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingBag className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-accent text-accent-foreground text-xs flex items-center justify-center font-medium">
                  {totalItems}
                </span>
              )}
            </Button>
          </Link>
        </div>
      </nav>
    </header>
  );
}
