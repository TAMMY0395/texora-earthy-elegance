import { useState } from "react";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";

const Shop = () => {
  const [selectedSize, setSelectedSize] = useState("all");
  const [selectedColor, setSelectedColor] = useState("all");

  const products = [
    { id: 1, name: "Classic Oxford Shirt", price: 89, color: "Brown", size: "M", image: product1 },
    { id: 2, name: "Linen Summer Shirt", price: 95, color: "Beige", size: "L", image: product2 },
    { id: 3, name: "Casual Button-Down", price: 79, color: "White", size: "M", image: product3 },
    { id: 4, name: "Premium Dress Shirt", price: 110, color: "Dark Brown", size: "L", image: product4 },
    { id: 5, name: "Organic Cotton Shirt", price: 85, color: "Brown", size: "S", image: product1 },
    { id: 6, name: "Relaxed Fit Shirt", price: 92, color: "Beige", size: "XL", image: product2 },
    { id: 7, name: "Slim Fit Dress Shirt", price: 105, color: "White", size: "M", image: product3 },
    { id: 8, name: "Weekend Casual Shirt", price: 88, color: "Brown", size: "L", image: product4 },
  ];

  const filteredProducts = products.filter((product) => {
    const sizeMatch = selectedSize === "all" || product.size === selectedSize;
    const colorMatch = selectedColor === "all" || product.color === selectedColor;
    return sizeMatch && colorMatch;
  });

  return (
    <div className="pt-20 min-h-screen">
      {/* Header */}
      <section className="bg-secondary/30 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-foreground">Shop Collection</h1>
          <p className="text-center text-muted-foreground mt-4">Discover timeless elegance</p>
        </div>
      </section>

      {/* Filters & Products */}
      <section className="container mx-auto px-4 py-12">
        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-8">
          <Select value={selectedSize} onValueChange={setSelectedSize}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Size" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Sizes</SelectItem>
              <SelectItem value="S">Small</SelectItem>
              <SelectItem value="M">Medium</SelectItem>
              <SelectItem value="L">Large</SelectItem>
              <SelectItem value="XL">Extra Large</SelectItem>
            </SelectContent>
          </Select>

          <Select value={selectedColor} onValueChange={setSelectedColor}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Color" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Colors</SelectItem>
              <SelectItem value="Brown">Brown</SelectItem>
              <SelectItem value="Beige">Beige</SelectItem>
              <SelectItem value="White">White</SelectItem>
              <SelectItem value="Dark Brown">Dark Brown</SelectItem>
            </SelectContent>
          </Select>

          <div className="ml-auto flex items-center gap-2">
            <span className="text-sm text-muted-foreground">
              {filteredProducts.length} Products
            </span>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <Link key={product.id} to={`/product/${product.id}`}>
              <Card className="overflow-hidden hover-lift cursor-pointer group">
                <div className="aspect-square overflow-hidden relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-foreground mb-1">{product.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{product.color}</p>
                  <p className="text-primary font-medium">${product.price}</p>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No products found matching your filters.</p>
          </div>
        )}
      </section>
    </div>
  );
};

export default Shop;
