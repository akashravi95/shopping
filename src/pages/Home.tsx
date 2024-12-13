import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ProductCard } from '../components/ProductCard';
import { TRENDING_ITEMS, CATEGORIES } from '../data/featured';

export const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="mb-16">
        <div className="relative h-[600px] rounded-xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04"
            alt="Fashion Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 flex items-center">
            <div className="max-w-2xl ml-8 md:ml-16 text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Discover Your Style
              </h1>
              <p className="text-lg md:text-xl mb-8 text-gray-200">
                Explore our latest collection of premium clothing and accessories
              </p>
              <Link
                to="/clothing"
                className="inline-flex items-center bg-white text-gray-900 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Shop Now
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trending Section */}
      <section className="mb-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Trending Now</h2>
          <Link
            to="/clothing"
            className="text-blue-600 hover:text-blue-700 flex items-center"
          >
            View All <ArrowRight className="ml-1" size={16} />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TRENDING_ITEMS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Categories Section */}
      <section>
        <h2 className="text-3xl font-bold mb-8">Shop by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CATEGORIES.map((category) => (
            <Link
              key={category.name}
              to="/clothing"
              className="group relative h-[400px] rounded-lg overflow-hidden"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {category.name}
                </h3>
                <p className="text-gray-200">{category.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};