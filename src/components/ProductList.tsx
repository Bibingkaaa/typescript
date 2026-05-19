import ProductCard, { type Product } from './ProductCard';
import React from 'react';

const products: Product[] = [
    {
      imageUrl: "/2.png",
        productCode: "1",
        productName: "Wireless Mouse",
        stock: 25,
        price: 799.99,
        rating: 4.6,
        isAvailable: true
    },
    {
       imageUrl: "/1.png",
        productCode: "2",
        productName: "Keyboard",
        stock: 0,
        price: 1800.00,
        rating: 4.8,
        isAvailable: false
    },
    {
      imageUrl: "/3.png",
        productCode: "3",
        productName: "USB-C Hub",
        stock: 0,
        price: 1499.00,
        rating: 4.4,
        isAvailable: false
    },
    {
      imageUrl: "/5.png",
        productCode: "4",
        productName: "Gaming Headset",
        stock: 18,
        price: 1999.00,
        rating: 4.5,
        isAvailable: true
    },
      {
        imageUrl: "/4.png",
        productCode: "5",
        productName: "Webcam HD",
        stock: 7,
        price: 1799.00,
        rating: 4.3,
        isAvailable: true
    },
        {
        imageUrl: "/6.png",
        productCode: "6",
        productName: "Gaming Monitor",
        stock: 9,
        price: 5799.00,
        rating: 4.3,
        isAvailable: true
    }
];

const ProductList: React.FC = () => {
  return (
    <div className="min-h-screen font-sans text-slate-800 relative selection:bg-violet-500 selection:text-white pb-20">
      
      <main className="relative z-10 pt-1 flex flex-col items-center px-4 w-full">
        
        <div className="mb-10 text-center">
          
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 mb-4">
            Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-500">Product</span> Gallery
          </h1>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Prepared by: Mary Hannah Caryl D. Reyes
          </p>
    
        </div>

        <section className="w-full max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            
            {products.map((product) => (
              <div key={product.productCode} className="w-full max-w-[380px]"> 
                <ProductCard product={product} />
              </div>
            ))}

          </div>
        </section>
      </main>
    </div>
  );
};

export default ProductList;