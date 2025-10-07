import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <main>
      <section className="bg-secondary py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-serif font-bold mb-6">About Lumière</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Crafting timeless elegance and celebrating life's precious moments since 1995
          </p>
        </div>
      </section>
      
      <section className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-4xl font-serif font-bold mb-6">Our Heritage</h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Founded in 1995, Lumière Jewelry has been at the forefront of fine jewelry design 
              for nearly three decades. What began as a small atelier has grown into a renowned 
              name synonymous with exceptional craftsmanship and timeless beauty.
            </p>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Our founder's vision was simple yet profound: to create jewelry that not only 
              adorns but also tells a story. Each piece we craft carries with it the legacy 
              of this vision, embodying elegance, quality, and artistry.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="aspect-square rounded-lg bg-secondary" />
              <div className="aspect-square rounded-lg bg-secondary" />
            </div>
            <div className="space-y-4 mt-8">
              <div className="aspect-square rounded-lg bg-secondary" />
              <div className="aspect-square rounded-lg bg-secondary" />
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="text-center p-6">
            <h3 className="text-6xl font-serif font-bold text-accent mb-4">28+</h3>
            <p className="text-lg font-medium mb-2">Years of Excellence</p>
            <p className="text-sm text-muted-foreground">
              Nearly three decades of crafting exceptional jewelry
            </p>
          </div>
          
          <div className="text-center p-6">
            <h3 className="text-6xl font-serif font-bold text-accent mb-4">10K+</h3>
            <p className="text-lg font-medium mb-2">Happy Customers</p>
            <p className="text-sm text-muted-foreground">
              Trusted by thousands worldwide
            </p>
          </div>
          
          <div className="text-center p-6">
            <h3 className="text-6xl font-serif font-bold text-accent mb-4">100%</h3>
            <p className="text-lg font-medium mb-2">Handcrafted</p>
            <p className="text-sm text-muted-foreground">
              Every piece meticulously crafted by master artisans
            </p>
          </div>
        </div>
        
        <div className="bg-secondary rounded-lg p-12 text-center">
          <h2 className="text-4xl font-serif font-bold mb-6">Our Commitment</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
            At Lumière, we believe in the power of jewelry to capture moments, celebrate 
            milestones, and express love. Every diamond we select, every setting we create, 
            and every piece we finish is a testament to our unwavering commitment to quality 
            and excellence.
          </p>
          <Link to="/shop">
            <Button variant="gold" size="lg">
              Explore Our Collection
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default About;
