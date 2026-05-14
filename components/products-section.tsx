'use client';

import { Star } from 'lucide-react';
import { Button } from './ui/button';

const products = [
  {
    id: 1,
    name: 'CBD Oil Extract',
    price: '$49.99',
    rating: 4.8,
    image: 'https://via.placeholder.com/300x350?text=CBD+Oil',
  },
  {
    id: 2,
    name: 'Herbal Remedy',
    price: '$34.99',
    rating: 4.9,
    image: 'https://via.placeholder.com/300x350?text=Herbal+Remedy',
  },
  {
    id: 3,
    name: 'Wellness Tablets',
    price: '$29.99',
    rating: 4.7,
    image: 'https://via.placeholder.com/300x350?text=Wellness+Tablets',
  },
];

export function ProductsSection() {
  return (
    <section className="w-full py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-secondary font-semibold text-sm mb-2">
            Our New Products
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Research Formulations
          </h2>
          <div className="flex justify-center">
            <div className="w-3 h-3 bg-secondary rounded-full" />
          </div>
        </div>

        {/* Products */}
        <div
          className="
            flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory
            md:grid md:grid-cols-3 md:gap-6 md:overflow-visible
          "
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="
                min-w-[70%] sm:min-w-[50%] flex-shrink-0 snap-start
                md:min-w-0 md:flex-shrink-0 group cursor-pointer
              "
            >
              <div className="relative overflow-hidden rounded-lg bg-muted mb-4 aspect-[3/4] flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="text-center">
                <h3 className="font-semibold text-foreground mb-1">
                  {product.name}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}