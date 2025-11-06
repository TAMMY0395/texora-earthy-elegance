import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useComparison } from "@/contexts/ComparisonContext";

interface ComparisonBarProps {
  onOpenComparison: () => void;
}

const ComparisonBar = ({ onOpenComparison }: ComparisonBarProps) => {
  const { comparisonProducts, removeFromComparison, clearComparison } = useComparison();

  if (comparisonProducts.length === 0) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-background border-t border-border shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-4 flex-1 overflow-x-auto">
            <span className="font-semibold whitespace-nowrap">
              Compare ({comparisonProducts.length}/3)
            </span>
            
            <div className="flex gap-3">
              {comparisonProducts.map((product) => (
                <Card key={product.id} className="relative flex items-center gap-2 p-2 pr-8 min-w-[200px]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-12 h-12 object-cover rounded"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">{product.name}</p>
                    <p className="text-xs text-primary">${product.price}</p>
                  </div>
                  <button
                    onClick={() => removeFromComparison(product.id)}
                    className="absolute top-2 right-2 text-muted-foreground hover:text-foreground"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </Card>
              ))}
            </div>
          </div>

          <div className="flex gap-2">
            <Button
              variant="outline"
              onClick={clearComparison}
              size="sm"
            >
              Clear All
            </Button>
            <Button
              onClick={onOpenComparison}
              disabled={comparisonProducts.length < 2}
              size="sm"
              className="bg-primary hover:bg-primary/90"
            >
              Compare Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComparisonBar;
