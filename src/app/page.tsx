import Image from "next/image";
import { Product } from "@/src/db/product";
import LinkCard from "../componets/LinkCard";

export default async function Page() {

  // Busca os produtos da API (lado do servidor)
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/api/products`, {
    cache: 'no-store',
  });
  const products: Product[] = await res.json();

  return (
    <main className="min-h-screen flex flex-col items-center justify-start bg-linear-to-b from-rose-100 via-white to-pink-50 text-gray-900 p-6">
      <div className="flex flex-col items-center mt-10 text-center">
        <Image
          src="/avatar.jpg"
          alt="Avatar"
          width={100}
          height={100}
          className="rounded-full border-4 border-pink-400 shadow-lg"
        />
        <h1 className="text-2xl font-semibold mt-4">Casal Achadinhos 💸</h1>
        <p className="text-gray-600 text-sm mt-1">
          O casal que ama economizar e te mostra as melhores promoções do dia!
        </p>
      </div>

      <div className="w-full max-w-md mt-8 space-y-4">
        {products.map((product) => {

          console.log("product", product)
          return (
            <LinkCard key={product.id} product={product} />
          )
        })}
      </div>

      <footer className="mt-10 text-xs text-gray-400">
        © {new Date().getFullYear()} Casal Achadinhos
      </footer>
    </main>
  );
}
