import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Award, Shield, Sparkles, Check } from 'lucide-react';
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
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/70" />
          <img
            src={heroImage}
            alt="Luxury jewelry"
            className="h-full w-full object-cover scale-105 animate-[scale-in_1.5s_ease-out]"
          />
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
          <div className="inline-block mb-6 animate-fade-in">
            <span className="px-6 py-2 rounded-full border border-white/40 glass-effect text-sm font-medium tracking-wider">
              ESTABLISHED 1995
            </span>
          </div>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-bold mb-8 animate-fade-in-up section-title">
            Timeless
            <br />
            <span className="text-gradient inline-block mt-2">Elegance</span>
          </h1>
          
          <p className="text-xl md:text-2xl lg:text-3xl mb-12 max-w-3xl mx-auto font-light leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Where exceptional craftsmanship meets eternal beauty
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Button variant="gold" size="lg" className="group text-base px-10 py-6 h-auto shadow-2xl">
              Explore Collection
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-2" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-white text-white hover:bg-white hover:text-primary glass-effect text-base px-10 py-6 h-auto"
            >
              Book Consultation
            </Button>
          </div>
        </div>
        
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-8 h-14 border-2 border-white/60 rounded-full flex justify-center p-2">
            <div className="w-2 h-4 bg-white/60 rounded-full animate-glow" />
          </div>
        </div>
      </section>
      
      {/* Trust Badges */}
      <section className="py-12 bg-secondary border-y">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 text-center">
            <div className="flex items-center gap-3">
              <Check className="h-6 w-6 text-accent" />
              <span className="text-sm font-medium">Lifetime Warranty</span>
            </div>
            <div className="flex items-center gap-3">
              <Check className="h-6 w-6 text-accent" />
              <span className="text-sm font-medium">Ethical Sourcing</span>
            </div>
            <div className="flex items-center gap-3">
              <Check className="h-6 w-6 text-accent" />
              <span className="text-sm font-medium">Expert Artisans</span>
            </div>
            <div className="flex items-center gap-3">
              <Check className="h-6 w-6 text-accent" />
              <span className="text-sm font-medium">Free Consultation</span>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Collection */}
      <section id="collection" className="py-32 bg-background relative">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 via-transparent to-transparent pointer-events-none" />
        
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-20 animate-fade-in-up">
            <span className="text-accent text-sm font-bold tracking-[0.3em] uppercase mb-6 block">
              CURATED SELECTION
            </span>
            <h2 className="text-5xl md:text-7xl font-serif font-bold mb-6 section-title">
              Signature Collection
            </h2>
            <p className="text-muted-foreground text-xl max-w-2xl mx-auto leading-relaxed">
              Each piece tells a story of passion, precision, and timeless beauty
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
            {featuredProducts.map((product, index) => (
              <div 
                key={product.id} 
                className="group cursor-pointer animate-fade-in hover-lift"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="relative aspect-square overflow-hidden rounded-2xl bg-secondary mb-6 shadow-lg">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="absolute bottom-0 left-0 right-0 p-8 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <p className="text-sm mb-4 opacity-90 leading-relaxed">{product.description}</p>
                      <Button variant="gold" size="sm" className="shadow-xl">
                        View Details
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
                
                <div className="text-center space-y-2">
                  <h3 className="font-serif text-2xl font-medium group-hover:text-accent transition-colors duration-300">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground capitalize text-sm tracking-wider">{product.category}</p>
                  <p className="text-2xl font-semibold mt-2">${product.price.toLocaleString()}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Button variant="outline" size="lg" className="group border-2">
              View Full Collection
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-2" />
            </Button>
          </div>
        </div>
      </section>
      
      {/* Showcase Section */}
      <section className="relative h-[700px] flex items-center overflow-hidden">
        <div className="absolute inset-0 parallax-slow">
          <img
            src={collectionShowcase}
            alt="Collection showcase"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-2xl text-white">
            <span className="text-accent text-sm font-bold tracking-[0.3em] uppercase mb-6 block animate-fade-in">
              CELEBRATE MOMENTS
            </span>
            <h2 className="text-5xl md:text-7xl font-serif font-bold mb-8 animate-fade-in-up section-title">
              Life's Precious
              <br />
              Moments
            </h2>
            <p className="text-xl md:text-2xl mb-10 leading-relaxed font-light animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              From engagements to anniversaries, our pieces are designed to commemorate 
              the moments that define your story.
            </p>
            <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <Button variant="gold" size="lg" className="shadow-2xl">
                Discover Your Story
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Craftsmanship Section */}
      <section id="craftsmanship" className="py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className="order-2 md:order-1 space-y-8">
              <div>
                <span className="text-accent text-sm font-bold tracking-[0.3em] uppercase mb-6 block">
                  EXCELLENCE IN DETAIL
                </span>
                <h2 className="text-5xl md:text-6xl font-serif font-bold mb-6 section-title">
                  Master
                  <br />
                  Craftsmanship
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                  Our master artisans bring decades of expertise to every piece. Each creation 
                  undergoes meticulous inspection to ensure it meets our exacting standards.
                </p>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  We source only the finest materials—conflict-free diamonds, premium gold, 
                  and rare gemstones—to create jewelry that lasts generations.
                </p>
              </div>
              
              <div className="grid gap-6">
                <div className="flex items-start gap-5 p-6 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors duration-300 hover-lift">
                  <div className="flex-shrink-0 w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center">
                    <Award className="h-7 w-7 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-2">Award-Winning Design</h3>
                    <p className="text-muted-foreground leading-relaxed">Recognized globally for innovation and artistry</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-5 p-6 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors duration-300 hover-lift">
                  <div className="flex-shrink-0 w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center">
                    <Shield className="h-7 w-7 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-2">Lifetime Guarantee</h3>
                    <p className="text-muted-foreground leading-relaxed">Comprehensive warranty on all pieces</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-5 p-6 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors duration-300 hover-lift">
                  <div className="flex-shrink-0 w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center">
                    <Sparkles className="h-7 w-7 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-2">Ethical Sourcing</h3>
                    <p className="text-muted-foreground leading-relaxed">100% conflict-free and sustainable materials</p>
                  </div>
                </div>
              </div>
              
              <Button variant="gold" size="lg" className="shadow-xl">
                Learn Our Process
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            
            <div className="order-1 md:order-2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl hover-lift">
                <img
                  src={craftsmanshipImage}
                  alt="Craftsmanship"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-24 bg-gradient-to-b from-secondary to-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            <div className="text-center space-y-2 animate-fade-in">
              <div className="text-6xl md:text-7xl font-serif font-bold text-gradient mb-3">28+</div>
              <div className="text-muted-foreground font-medium">Years of Excellence</div>
            </div>
            <div className="text-center space-y-2 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="text-6xl md:text-7xl font-serif font-bold text-gradient mb-3">10K+</div>
              <div className="text-muted-foreground font-medium">Happy Customers</div>
            </div>
            <div className="text-center space-y-2 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-6xl md:text-7xl font-serif font-bold text-gradient mb-3">100%</div>
              <div className="text-muted-foreground font-medium">Handcrafted</div>
            </div>
            <div className="text-center space-y-2 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="text-6xl md:text-7xl font-serif font-bold text-gradient mb-3">∞</div>
              <div className="text-muted-foreground font-medium">Lifetime Warranty</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section id="contact-cta" className="py-32 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/5" />
        
        <div className="container mx-auto px-4 text-center relative">
          <div className="max-w-4xl mx-auto">
            <span className="text-accent text-sm font-bold tracking-[0.3em] uppercase mb-6 block">
              BEGIN YOUR JOURNEY
            </span>
            <h2 className="text-5xl md:text-7xl font-serif font-bold mb-8 section-title">
              Experience
              <br />
              <span className="text-gradient">Lumière</span>
            </h2>
            <p className="text-muted-foreground text-xl md:text-2xl mb-16 leading-relaxed max-w-3xl mx-auto">
              Schedule a private consultation with our jewelry experts. Discover the perfect 
              piece or create something uniquely yours.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Link to="/contact">
                <Button variant="gold" size="lg" className="group shadow-2xl text-base px-10 py-6 h-auto">
                  Book Private Consultation
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-2" />
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="border-2 text-base px-10 py-6 h-auto">
                Request Catalog
              </Button>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-12 justify-center text-base text-muted-foreground">
              <div>
                <span className="block font-semibold text-foreground mb-2 text-lg">Phone</span>
                <a href="tel:+15551234567" className="hover:text-accent transition-colors">
                  +1 (555) 123-4567
                </a>
              </div>
              <div>
                <span className="block font-semibold text-foreground mb-2 text-lg">Showrooms</span>
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
