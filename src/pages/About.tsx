import { Leaf, Users, Award, Heart } from "lucide-react";
import { Card } from "@/components/ui/card";
import aboutImage from "@/assets/about-craft.jpg";

const About = () => {
  const values = [
    {
      icon: Leaf,
      title: "Sustainable",
      description: "We use only organic, eco-friendly materials and ethical production methods.",
    },
    {
      icon: Award,
      title: "Quality Craftsmanship",
      description: "Every shirt is crafted with attention to detail by skilled artisans.",
    },
    {
      icon: Users,
      title: "Community Focused",
      description: "We support local communities and fair trade practices.",
    },
    {
      icon: Heart,
      title: "Made with Care",
      description: "Each piece is made with love and dedication to excellence.",
    },
  ];

  return (
    <div className="pt-20 min-h-screen">
      {/* Hero */}
      <section className="bg-secondary/30 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Story</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Crafting timeless elegance through sustainable fashion
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-foreground">The Texora Journey</h2>
            <p className="text-muted-foreground leading-relaxed">
              Founded in 2020, Texora was born from a simple belief: that premium clothing should
              be both beautiful and responsible. We started with a vision to create shirts that
              combine timeless design with modern sustainability.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Every Texora shirt tells a story of craftsmanship, from carefully sourced organic
              cotton to the skilled hands that stitch each seam. We work directly with artisans
              who share our commitment to quality and ethical production.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Today, we're proud to offer a collection that reflects our values: elegance,
              sustainability, and uncompromising quality. Each piece is designed to be worn,
              loved, and cherished for years to come.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src={aboutImage}
              alt="Craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-secondary/30 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, idx) => (
              <Card key={idx} className="p-6 text-center hover-lift">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Materials */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold text-foreground">Our Materials</h2>
          <p className="text-muted-foreground leading-relaxed">
            We believe in transparency. That's why we use only certified organic cotton, grown
            without harmful pesticides or synthetic fertilizers. Our fabric is processed using
            natural dyes and low-impact techniques, ensuring each shirt is as gentle on the
            earth as it is on your skin.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            From field to finished product, we track every step of our supply chain to ensure
            the highest standards of quality and sustainability.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
