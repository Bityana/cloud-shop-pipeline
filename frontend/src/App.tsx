import { useEffect, useState } from "react";
import axios from "axios";

interface Product { id: number; name: string; price: number; }

export default function App() {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    axios.get("/api/products").then(r => setProducts(r.data));
  }, []);
  return (
    <main className="flex flex-col items-center p-4">
      <h1 className="text-3xl font-bold mb-6">Cloud-Shop</h1>
      <ul className="grid gap-4 md:grid-cols-3">
        {products.map(p => (
          <li key={p.id} className="border rounded-xl p-4 shadow-lg">
            <h2 className="text-xl">{p.name}</h2>
            <p className="font-semibold">${p.price.toFixed(2)}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
