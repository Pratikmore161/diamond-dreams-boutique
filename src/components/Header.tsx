import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';

export function Header() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const isActive = (path: string) => location.pathname === path;
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <header 
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? 'glass-effect border-b shadow-sm' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          <Link to="/" className="text-2xl font-serif font-bold tracking-tight">
            <span className={scrolled ? 'text-foreground' : 'text-white'}>Lumière</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('collection')}
              className={`text-sm font-medium transition-colors hover:text-accent ${
                scrolled ? 'text-foreground' : 'text-white'
              }`}
            >
              Collection
            </button>
            <button 
              onClick={() => scrollToSection('craftsmanship')}
              className={`text-sm font-medium transition-colors hover:text-accent ${
                scrolled ? 'text-foreground' : 'text-white'
              }`}
            >
              Craftsmanship
            </button>
            <Link 
              to="/about" 
              className={`text-sm font-medium transition-colors hover:text-accent ${
                isActive('/about') ? 'text-accent' : scrolled ? 'text-foreground' : 'text-white'
              }`}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className={`text-sm font-medium transition-colors hover:text-accent ${
                isActive('/contact') ? 'text-accent' : scrolled ? 'text-foreground' : 'text-white'
              }`}
            >
              Contact
            </Link>
          </div>
          
          <Button 
            variant="gold" 
            onClick={() => scrollToSection('contact-cta')}
          >
            Book Consultation
          </Button>
        </div>
      </nav>
    </header>
  );
}
