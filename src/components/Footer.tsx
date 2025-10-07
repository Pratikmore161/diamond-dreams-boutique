import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-serif font-bold mb-4">Lumière</h3>
            <p className="text-sm text-muted-foreground">
              Crafting timeless elegance with exquisite fine jewelry since 1995.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold mb-4">Shop</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/shop?category=rings" className="text-muted-foreground hover:text-accent transition-colors">
                  Rings
                </Link>
              </li>
              <li>
                <Link to="/shop?category=necklaces" className="text-muted-foreground hover:text-accent transition-colors">
                  Necklaces
                </Link>
              </li>
              <li>
                <Link to="/shop?category=earrings" className="text-muted-foreground hover:text-accent transition-colors">
                  Earrings
                </Link>
              </li>
              <li>
                <Link to="/shop?category=bracelets" className="text-muted-foreground hover:text-accent transition-colors">
                  Bracelets
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Lumière Jewelry. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
