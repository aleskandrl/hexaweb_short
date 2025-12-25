import React from 'react';
import { ProductController } from './ProductController';
import { ProductCards } from './ProductCards';

export const ProductSection: React.FC = () => {
  return (
    <section className="py-24 bg-hexa-bg relative" id="products">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="mb-20 text-center">
          <h2 className="text-hexa-cyan font-mono-plex font-bold uppercase text-sm tracking-[0.2em] mb-4 glow-text">Product Ecosystem</h2>
          <h3 className="font-display text-4xl md:text-5xl text-white uppercase">
            One Brain. <span className="text-hexa-purple">Any Body.</span>
          </h3>
        </div>

        {/* 1. Controller Block */}
        <ProductController />

        {/* 2. Robot Arms Block */}
        <ProductCards />

      </div>
    </section>
  );
};