import ProductCard, { type Product } from './ProductCard';
import React, { useRef } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const products: Product[] = [
    {
        imageUrl: "/2.png",
        productCode: "PRD120",
        productName: "Wireless Mouse",
        stock: 25,
        price: 799.99,
        rating: 4.6,
        isAvailable: true
    },
    {
        imageUrl: "/1.png",
        productCode: "PRD121",
        productName: "Keyboard",
        stock: 0,
        price: 1800.00,
        rating: 4.8,
        isAvailable: false
    },
    {
        imageUrl: "/3.png",
        productCode: "PRD122",
        productName: "USB-C Hub",
        stock: 0,
        price: 1499.00,
        rating: 4.4,
        isAvailable: false
    },
    {
        imageUrl: "/5.png",
        productCode: "PRD123",
        productName: "Gaming Headset",
        stock: 18,
        price: 1999.00,
        rating: 4.5,
        isAvailable: true
    },
      {
        imageUrl: "/4.png",
        productCode: "PRD124",
        productName: "Webcam HD",
        stock: 7,
        price: 1799.00,
        rating: 4.3,
        isAvailable: true
    },
        {
        imageUrl: "/6.png",
        productCode: "PRD125",
        productName: "Gaming Monitor",
        stock: 9,
        price: 5799.00,
        rating: 4.3,
        isAvailable: true
    }
];

const UseProps: React.FC = () => {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollBySlide = (direction: 'left' | 'right') => {
    const track = trackRef.current;
    if (!track) return;
    const firstSlide = track.querySelector<HTMLDivElement>('.carousel-slide');
    const slideWidth = firstSlide ? firstSlide.offsetWidth : 360;
    const gap = 16; // matches gap-4
    const delta = (direction === 'right' ? 1 : -1) * (slideWidth + gap);
    track.scrollBy({ left: delta, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-950 font-sans text-slate-100 relative overflow-hidden selection:bg-blue-500 selection:text-white">
 
      <div
        className="absolute inset-0 z-0 opacity-[0.15]"
        style={{
          backgroundImage:
            'linear-gradient(#94a3b8 1px, transparent 1px), linear-gradient(to right, #94a3b8 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-96 bg-blue-600/20 blur-[120px] rounded-full pointer-events-none" />

      <main className="relative z-10 pt-16 pb-24 flex flex-col items-center text-center px-4 w-full">

        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight drop-shadow-sm">
          Advanced{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-yellow-500">
            Gaming
          </span>{' '}
          Peripherals
        </h1>

        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
          Explore a selection of high-quality gaming peripherals designed for reliable performance.
        </p>
        <section className="w-full">
          <div className="flex items-center justify-center gap-4 px-4 w-full">
            <button   aria-label="Previous"
              onClick={() => scrollBySlide('left')}
              className="flex items-center justify-center w-12 h-12 bg-blue-900 text-white rounded-full hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 shadow-lg transition-all duration-200">
            <FaArrowLeft className="w-5 h-5" />
            </button>
            <div
              ref={trackRef}
              className="w-full overflow-x-auto no-scrollbar snap-x snap-mandatory scroll-smooth"
            >
              <div className="flex gap-4 w-max mx-auto">
                {products.map((product) => (
                  <div key={product.productCode} className="carousel-slide snap-start shrink-0 w-[360px]">
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
            </div>

            <button
              aria-label="Next"
              onClick={() => scrollBySlide('right')}
             className="flex items-center justify-center w-12 h-12 bg-blue-900 text-white rounded-full hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 shadow-lg transition-all duration-200">
                <FaArrowRight className="w-7 h-7" />
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default UseProps;