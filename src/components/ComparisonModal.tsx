import { X, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useComparison } from "@/contexts/ComparisonContext";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface ComparisonModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ComparisonModal = ({ open, onOpenChange }: ComparisonModalProps) => {
  const { comparisonProducts, removeFromComparison, clearComparison } = useComparison();

  const comparisonRows = [
    { label: "Product", key: "name" },
    { label: "Price", key: "price", format: (val: any) => `$${val}` },
    { label: "Color", key: "color" },
    { label: "Size", key: "size" },
    { label: "Material", value: "100% Organic Cotton" },
    { label: "Fit", value: "Regular Fit" },
    { label: "Care", value: "Machine Wash Cold" },
    { label: "Sustainable", value: true },
  ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Compare Products</DialogTitle>
        </DialogHeader>

        <div className="mt-6">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="text-left p-4 border-b font-semibold w-1/4">Features</th>
                  {comparisonProducts.map((product) => (
                    <th key={product.id} className="p-4 border-b w-1/4">
                      <Card className="p-4">
                        <div className="relative">
                          <button
                            onClick={() => removeFromComparison(product.id)}
                            className="absolute -top-2 -right-2 bg-background rounded-full p-1 hover:bg-muted"
                          >
                            <X className="h-4 w-4" />
                          </button>
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full aspect-square object-cover rounded-lg mb-3"
                          />
                        </div>
                      </Card>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? "bg-secondary/30" : ""}>
                    <td className="p-4 font-medium text-muted-foreground">{row.label}</td>
                    {comparisonProducts.map((product) => (
                      <td key={product.id} className="p-4 text-center">
                        {row.key ? (
                          <span className="font-semibold">
                            {row.format
                              ? row.format(product[row.key as keyof typeof product])
                              : product[row.key as keyof typeof product]}
                          </span>
                        ) : typeof row.value === "boolean" ? (
                          <Check className="h-5 w-5 text-primary mx-auto" />
                        ) : (
                          <span>{row.value}</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 flex justify-between items-center">
            <Button variant="outline" onClick={clearComparison}>
              Clear All
            </Button>
            <div className="flex gap-2">
              {comparisonProducts.map((product) => (
                <Button
                  key={product.id}
                  className="bg-primary hover:bg-primary/90"
                  onClick={() => {
                    // Here you would typically add to cart
                    onOpenChange(false);
                  }}
                >
                  Add {product.name} to Cart
                </Button>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ComparisonModal;
