"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface LinkCardProps {
  createdAt: string
  description: string
  discount: string
  id: string
  image: string
  name: string
  originalPrice: string
  price: string
  tag: string
  updatedAt: string
  url: string
}

export default function LinkCard({ product }: LinkCardProps) {
  const {
    createdAt,
    description,
    discount,
    id,
    image,
    name,
    originalPrice,
    price,
    tag,
    updatedAt,
    url
  } = product

  function isOlderThan24Hours(createdAt: string): boolean {
    const createdDate = new Date(createdAt);
    const now = new Date();

    // diferença em milissegundos
    const diffMs = now.getTime() - createdDate.getTime();

    // 24 horas em milissegundos
    const twentyFourHoursMs = 8 * 60 * 60 * 1000;

    return diffMs > twentyFourHoursMs;
  }


  return isOlderThan24Hours(createdAt) ? null : (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className="block p-4 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all border border-pink-100"
    >
      <div className="flex items-center gap-4 flex-col">
        <Image src={image} alt={name} width={72} height={72} className="rounded-md object-cover" />
        <div className="min-w-0">
          <h2 className="text-lg font-semibold text-pink-600 line-clamp-2">{name}</h2>
          {description && (
            <p className="text-sm text-gray-600 mt-1 line-clamp-2">{description}</p>
          )}
        </div>
        <div className="flex items-baseline space-x-3 mt-2">
          <p className="text-2xl font-semibold text-gray-400 line-through">
            {originalPrice}
          </p>
          <p className="text-4xl font-bold text-green-600">
            {price}
          </p>
          <p className="text-sm font-medium text-gray-600 bg-green-50 px-2 py-1 rounded-md">
            {discount}
          </p>
        </div>

      </div>
    </motion.a>
  );
}
