import React from 'react';
import { ProductController } from './ProductController';
import { ProductCards } from './ProductCards';

export const ProductSection: React.FC = () => {
  return (
    <section className="py-24 bg-hexa-bg relative" id="products">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="mb-20 text-center">
          <h2 className="text-hexa-cyan font-sans font-bold uppercase text-sm tracking-[0.2em] mb-4 glow-text">
            The HexaKinetica Ecosystem
          </h2>
          <h3 className="font-display text-3xl md:text-5xl text-white uppercase">
            One Brain. <span className="text-hexa-purple">Any Body.</span>
          </h3>
          <p className="mt-6 text-gray-400 font-sans max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
            Our entire ecosystem is built on a single, unified control architecture. The same powerful software—HexaMotion and HexaStudio—runs on every robot. Learn once, deploy anywhere.
          </p>
        </div>

        {/* 1. The Brain: The Controller Block */}
        <ProductController />

        {/* 2. Any Body: The Robot Arms Block */}
        <ProductCards />

      </div>
    </section>
  );
};
