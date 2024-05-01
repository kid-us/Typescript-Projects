import { useEffect, useState } from "react";

const ProductList = ({ category }: { category: string }) => {
  const [products, setProducts] = useState<string[]>([]);

  useEffect(() => {
    console.log("Adding products in", category);
    setProducts(["Clothing", "Household"]);
  }, [category]);

  return (
    <div className="mt-4">
      <h5>Product List</h5>
      {products.map((p) => (
        <p key={p}>{p}</p>
      ))}
    </div>
  );
};

export default ProductList;
