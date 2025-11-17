import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image: hero1,
      title: "Elegance in Every Stitch",
      subtitle: "Ayush lendis",
    },
    { image: hero2, title: "Timeless Style", subtitle: "Crafted with Care" },
    { image: hero3, title: "Organic Luxury", subtitle: "Sustainable Fashion" },
  ];

  const featuredProducts = [
    { id: 1, name: "Classic Oxford Shirt", price: "$89", image: product1 },
    { id: 2, name: "Linen Summer Shirt", price: "$95", image: product2 },
    { id: 3, name: "Casual Button-Down", price: "$79", image: product3 },
    { id: 4, name: "Premium Dress Shirt", price: "$110", image: product4 },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="pt-20">
      {/* Hero Slider */}
      <section className="relative h-[600px] md:h-[700px] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute inset-0 flex items-center justify-center text-center">
              <div className="text-white space-y-4 fade-in px-4">
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl font-light">
                  {slide.subtitle}
                </p>
                <Link to="/shop">
                  <Button
                    size="lg"
                    className="mt-6 bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg"
                  >
                    Shop Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        ))}

        {/* Slider Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full transition-all"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full transition-all"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Slider Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentSlide ? "w-8 bg-white" : "w-2 bg-white/50"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Featured Collection */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Collection
          </h2>
          <p className="text-muted-foreground">
            Discover our most loved pieces
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <Link key={product.id} to={`/product/${product.id}`}>
              <Card className="overflow-hidden hover-lift cursor-pointer group">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-semibold text-foreground mb-1">
                    {product.name}
                  </h3>
                  <p className="text-primary font-medium">{product.price}</p>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link to="/shop">
            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-white"
            >
              View All Products
            </Button>
          </Link>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-secondary/30 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-foreground">
                Premium Quality
              </h3>
              <p className="text-muted-foreground">
                Every shirt is crafted from the finest organic materials
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-foreground">
                Sustainable
              </h3>
              <p className="text-muted-foreground">
                Committed to ethical production and environmental care
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-foreground">
                Timeless Design
              </h3>
              <p className="text-muted-foreground">
                Classic styles that transcend trends and seasons
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
