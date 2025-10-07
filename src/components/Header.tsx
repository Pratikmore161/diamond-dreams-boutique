import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';

export function Header() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const isActive = (path: string) => location.pathname === path;
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  
  return (
    <header 
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        scrolled 
          ? 'glass-effect shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          <Link 
            to="/" 
            className={`text-2xl font-serif font-bold tracking-tight transition-all duration-300 ${
              scrolled ? 'text-foreground scale-95' : 'text-white scale-100'
            }`}
          >
            Lumière
          </Link>
          
          <div className="hidden md:flex items-center space-x-10">
            <button 
              onClick={() => scrollToSection('collection')}
              className={`text-sm font-medium transition-all duration-300 hover:text-accent relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-accent after:transition-all hover:after:w-full ${
                scrolled ? 'text-foreground' : 'text-white'
              }`}
            >
              Collection
            </button>
            <button 
              onClick={() => scrollToSection('craftsmanship')}
              className={`text-sm font-medium transition-all duration-300 hover:text-accent relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-accent after:transition-all hover:after:w-full ${
                scrolled ? 'text-foreground' : 'text-white'
              }`}
            >
              Craftsmanship
            </button>
            <Link 
              to="/about" 
              className={`text-sm font-medium transition-all duration-300 hover:text-accent relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-accent after:transition-all hover:after:w-full ${
                isActive('/about') ? 'text-accent after:w-full' : scrolled ? 'text-foreground' : 'text-white'
              }`}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className={`text-sm font-medium transition-all duration-300 hover:text-accent relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-accent after:transition-all hover:after:w-full ${
                isActive('/contact') ? 'text-accent after:w-full' : scrolled ? 'text-foreground' : 'text-white'
              }`}
            >
              Contact
            </Link>
          </div>
          
          <Button 
            variant="gold" 
            size="sm"
            onClick={() => scrollToSection('contact-cta')}
            className="shadow-lg hover:shadow-xl"
          >
            Book Consultation
          </Button>
        </div>
      </nav>
    </header>
  );
}
