import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Award, Shield, Sparkles } from 'lucide-react';
import { products } from '@/data/products';
import heroImage from '@/assets/hero-jewelry.jpg';
import collectionShowcase from '@/assets/collection-showcase.jpg';
import craftsmanshipImage from '@/assets/craftsmanship.jpg';

const Index = () => {
  const featuredProducts = products.filter(p => p.featured).slice(0, 3);
  
  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Luxury jewelry"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />
        </div>
        
        <div className="relative z-10 text-center text-white px-4 animate-fade-in-up">
          <div className="inline-block mb-6">
            <span className="px-4 py-2 rounded-full border border-white/30 backdrop-blur-sm text-sm font-medium">
              Est. 1995
            </span>
          </div>
          <h1 className="text-6xl md:text-8xl font-serif font-bold mb-6 animate-fade-in">
            Timeless
            <br />
            <span className="text-gradient">Elegance</span>
          </h1>
          <p className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto font-light opacity-90">
            Where exceptional craftsmanship meets eternal beauty
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="gold" size="lg" className="group">
              Explore Collection
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
              Book Consultation
            </Button>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-2">
            <div className="w-1 h-3 bg-white/50 rounded-full animate-glow" />
          </div>
        </div>
      </section>
      
      {/* Featured Collection */}
      <section id="collection" className="py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <span className="text-accent text-sm font-semibold tracking-wider uppercase mb-4 block">
              Curated Selection
            </span>
            <h2 className="text-5xl md:text-6xl font-serif font-bold mb-6">
              Signature Pieces
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Each piece tells a story of passion, precision, and timeless beauty
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {featuredProducts.map((product, index) => (
              <div 
                key={product.id} 
                className="group cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative aspect-square overflow-hidden rounded-lg bg-secondary mb-6">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-6 left-6 right-6 text-white">
                      <p className="text-sm mb-2 opacity-90">{product.description}</p>
                      <Button variant="gold" size="sm">
                        View Details
                      </Button>
                    </div>
                  </div>
                </div>
                
                <div className="text-center">
                  <h3 className="font-serif text-2xl font-medium mb-2 group-hover:text-accent transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground capitalize text-sm mb-3">{product.category}</p>
                  <p className="text-xl font-medium">${product.price.toLocaleString()}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Button variant="outline" size="lg" className="group">
              View Full Collection
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </section>
      
      {/* Showcase Section */}
      <section className="relative h-[600px] flex items-center">
        <div className="absolute inset-0">
          <img
            src={collectionShowcase}
            alt="Collection showcase"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-2xl text-white">
            <h2 className="text-5xl font-serif font-bold mb-6 animate-fade-in-up">
              Celebrating Life's
              <br />
              Precious Moments
            </h2>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              From engagements to anniversaries, our pieces are designed to commemorate 
              the moments that matter most.
            </p>
            <Button variant="gold" size="lg">
              Discover Your Story
            </Button>
          </div>
        </div>
      </section>
      
      {/* Craftsmanship Section */}
      <section id="craftsmanship" className="py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <span className="text-accent text-sm font-semibold tracking-wider uppercase mb-4 block">
                Excellence in Every Detail
              </span>
              <h2 className="text-5xl font-serif font-bold mb-6">
                Master Craftsmanship
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                Our master artisans bring decades of expertise to every piece. Each creation 
                undergoes meticulous inspection to ensure it meets our exacting standards.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
                We source only the finest materials—conflict-free diamonds, premium gold, 
                and rare gemstones—to create jewelry that lasts generations.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <Award className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Award-Winning Design</h3>
                    <p className="text-muted-foreground">Recognized globally for innovation and artistry</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <Shield className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Lifetime Guarantee</h3>
                    <p className="text-muted-foreground">Comprehensive warranty on all pieces</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <Sparkles className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Ethical Sourcing</h3>
                    <p className="text-muted-foreground">100% conflict-free and sustainable materials</p>
                  </div>
                </div>
              </div>
              
              <Button variant="gold" size="lg">
                Learn Our Process
              </Button>
            </div>
            
            <div className="order-1 md:order-2">
              <div className="relative rounded-lg overflow-hidden shadow-2xl">
                <img
                  src={craftsmanshipImage}
                  alt="Craftsmanship"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-serif font-bold text-accent mb-2">28+</div>
              <div className="text-muted-foreground">Years of Excellence</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-serif font-bold text-accent mb-2">10K+</div>
              <div className="text-muted-foreground">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-serif font-bold text-accent mb-2">100%</div>
              <div className="text-muted-foreground">Handcrafted</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-serif font-bold text-accent mb-2">∞</div>
              <div className="text-muted-foreground">Lifetime Warranty</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section id="contact-cta" className="py-32 bg-background">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <span className="text-accent text-sm font-semibold tracking-wider uppercase mb-4 block">
              Begin Your Journey
            </span>
            <h2 className="text-5xl md:text-6xl font-serif font-bold mb-6">
              Experience Lumière
            </h2>
            <p className="text-muted-foreground text-xl mb-12 leading-relaxed">
              Schedule a private consultation with our jewelry experts. Discover the perfect 
              piece or create something uniquely yours.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link to="/contact">
                <Button variant="gold" size="lg" className="group">
                  Book Private Consultation
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Button variant="outline" size="lg">
                Request Catalog
              </Button>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-8 justify-center text-sm text-muted-foreground">
              <div>
                <span className="block font-medium text-foreground mb-1">Phone</span>
                +1 (555) 123-4567
              </div>
              <div>
                <span className="block font-medium text-foreground mb-1">Showroom</span>
                New York • Beverly Hills • Miami
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
