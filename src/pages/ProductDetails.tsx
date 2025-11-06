import { useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Star, Heart, ShoppingBag } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import product1 from "@/assets/product-1.jpg";

const ProductDetails = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const [selectedSize, setSelectedSize] = useState("M");
  const [quantity, setQuantity] = useState(1);

  // Mock product data
  const product = {
    id,
    name: "Classic Oxford Shirt",
    price: 89,
    description:
      "Our Classic Oxford Shirt is crafted from premium organic cotton with exceptional attention to detail. The timeless design features a button-down collar, chest pocket, and tailored fit that works perfectly for both business and casual occasions.",
    material: "100% Organic Cotton",
    care: "Machine wash cold, tumble dry low",
    sizes: ["S", "M", "L", "XL"],
    images: [product1, product1, product1],
  };

  const reviews = [
    { name: "Sarah M.", rating: 5, comment: "Perfect fit and amazing quality! Love the fabric." },
    { name: "Michael R.", rating: 5, comment: "Best shirt I've purchased in years. Highly recommend." },
    { name: "Emma L.", rating: 4, comment: "Great shirt, runs slightly large but very comfortable." },
  ];

  const handleAddToCart = () => {
    toast({
      title: "Added to Cart",
      description: `${quantity} x ${product.name} (Size: ${selectedSize})`,
    });
  };

  return (
    <div className="pt-20 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden rounded-lg">
              <img
                src={product.images[0]}
                alt={product.name}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {product.images.slice(1).map((img, idx) => (
                <div key={idx} className="aspect-square overflow-hidden rounded-lg cursor-pointer hover:opacity-80 transition-opacity">
                  <img src={img} alt={`${product.name} ${idx + 2}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">{product.name}</h1>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">(32 reviews)</span>
              </div>
              <p className="text-3xl font-bold text-primary">${product.price}</p>
            </div>

            <p className="text-muted-foreground leading-relaxed">{product.description}</p>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Size</label>
                <div className="flex gap-2">
                  {product.sizes.map((size) => (
                    <Button
                      key={size}
                      variant={selectedSize === size ? "default" : "outline"}
                      onClick={() => setSelectedSize(size)}
                      className={selectedSize === size ? "bg-primary text-white" : ""}
                    >
                      {size}
                    </Button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Quantity</label>
                <div className="flex items-center gap-4">
                  <Button
                    variant="outline"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    -
                  </Button>
                  <span className="text-lg font-medium w-8 text-center">{quantity}</span>
                  <Button
                    variant="outline"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    +
                  </Button>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <Button
                size="lg"
                className="flex-1 bg-primary hover:bg-primary/90"
                onClick={handleAddToCart}
              >
                <ShoppingBag className="mr-2 h-5 w-5" />
                Add to Cart
              </Button>
              <Button size="lg" variant="outline">
                <Heart className="h-5 w-5" />
              </Button>
            </div>

            <Card className="p-4 space-y-2">
              <p className="text-sm">
                <span className="font-semibold">Material:</span> {product.material}
              </p>
              <p className="text-sm">
                <span className="font-semibold">Care:</span> {product.care}
              </p>
              <p className="text-sm">
                <span className="font-semibold">Shipping:</span> Free shipping on orders over $100
              </p>
            </Card>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Customer Reviews</h2>
          <div className="space-y-4">
            {reviews.map((review, idx) => (
              <Card key={idx} className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <p className="font-semibold">{review.name}</p>
                  <div className="flex">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                </div>
                <p className="text-muted-foreground">{review.comment}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
