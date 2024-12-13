import React, { useState, useMemo } from 'react';
import { CLOTHING_PRODUCTS } from '../data/products';
import { CategoryFilter } from '../components/CategoryFilter';
import { ProductGrid } from '../components/ProductGrid';

export const ClothingPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Using Array.from() for better compatibility
  const categories = useMemo(() => {
    return Array.from(new Set(CLOTHING_PRODUCTS.map((product) => product.category)));
  }, []);

  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'all') return CLOTHING_PRODUCTS;
    return CLOTHING_PRODUCTS.filter(
      (product) => product.category === selectedCategory
    );
  }, [selectedCategory]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Clothing Collection</h1>
        <p className="text-gray-600">
          Discover our latest clothing collection, featuring premium quality pieces
          for every style.
        </p>
      </div>

      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      <ProductGrid products={filteredProducts} />
    </div>
  );
};
