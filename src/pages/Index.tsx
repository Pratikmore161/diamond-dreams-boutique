import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ProductCard } from '@/components/ProductCard';
import { products } from '@/data/products';
import heroImage from '@/assets/hero-jewelry.jpg';

const Index = () => {
  const featuredProducts = products.filter(p => p.featured);
  
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Luxury jewelry"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">
            Timeless Elegance
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto font-light">
            Discover exquisite fine jewelry crafted with precision and passion
          </p>
          <Link to="/shop">
            <Button variant="gold" size="lg">
              Shop Collection
            </Button>
          </Link>
        </div>
      </section>
      
      {/* Featured Products */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold mb-4">Featured Collection</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Handpicked pieces that embody our commitment to excellence and timeless beauty
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="text-center">
          <Link to="/shop">
            <Button variant="outline" size="lg">
              View All Products
            </Button>
          </Link>
        </div>
      </section>
      
      {/* About Preview */}
      <section className="bg-secondary py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-serif font-bold mb-6">Our Story</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                For nearly three decades, Lumière has been at the forefront of fine jewelry design, 
                combining traditional craftsmanship with contemporary elegance. Each piece is 
                meticulously crafted to celebrate life's most precious moments.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Our master artisans work with the finest materials, ensuring every diamond sparkles 
                with brilliance and every setting showcases unparalleled quality.
              </p>
              <Link to="/about">
                <Button variant="gold">
                  Learn More
                </Button>
              </Link>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-square rounded-lg bg-background p-8 flex flex-col items-center justify-center text-center">
                  <div className="text-4xl font-serif font-bold text-accent mb-2">28+</div>
                  <div className="text-sm text-muted-foreground">Years of Excellence</div>
                </div>
                <div className="aspect-square rounded-lg bg-background p-8 flex flex-col items-center justify-center text-center">
                  <div className="text-4xl font-serif font-bold text-accent mb-2">10K+</div>
                  <div className="text-sm text-muted-foreground">Happy Customers</div>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="aspect-square rounded-lg bg-background p-8 flex flex-col items-center justify-center text-center">
                  <div className="text-4xl font-serif font-bold text-accent mb-2">100%</div>
                  <div className="text-sm text-muted-foreground">Handcrafted</div>
                </div>
                <div className="aspect-square rounded-lg bg-background p-8 flex flex-col items-center justify-center text-center">
                  <div className="text-4xl font-serif font-bold text-accent mb-2">∞</div>
                  <div className="text-sm text-muted-foreground">Lifetime Warranty</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
