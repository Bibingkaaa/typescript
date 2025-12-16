# Agenda 1 Documentation

Agenda Item 1: Props in React (use Typescript) The extension of the file will be .tsx (UseProps.tsx)
Video Timestamp: 40:40
Objective
• Understand how props work in React
• Learn how to pass data from a parent component to a child component
Task
• Watch and study the video starting at 40:40
• Create a simple React project showcasing the use of props
Project Requirements
• Fetch or define at least 6 data fields in a parent component
• Data must include:
o char
o varchar
o integer
o float
o boolean
• Pass all data to another component using props
• Render all data in the child component
• Conditional styling requirement:
o If the boolean value is true, display the text in green
o If the boolean value is false, display the text in red
Agenda Item 2: useState Hook (use JavaScript) The extension of the file will be .jsx (UseState.jsx)

---

## **a.) Project Initialization**
- npm create vite@latest

I used tailwind ui libraries through https://uiverse.io/

For product card:

[Card by carlosepcc made with Tailwind | Uiverse.io](https://uiverse.io/carlosepcc/dangerous-penguin-84)

---

### **1.) ProductCard.tsx** (Child Component)

For Rating data, I used FaStar, FaRegStar, FaStarHalfAlt.

- The following data fields are (total of 7):
    - imageUrl: string; —> additionally for images
    - productCode: string; //char
    - productName: string; //varchar
    - stock: number; // integer
    - price: number; // float
    - rating: number; // float
    - isAvailable: boolean; // boolean

Using props:

```jsx
export interface Product {
  imageUrl: string;
  productCode: string; //char
  productName: string; //varchar
  stock: number; // integer
  price: number; // float
  rating: number; // float
  isAvailable: boolean; // boolean
}
```

**And then, separate the data model** from props.

```jsx
interface ProductCardProps {
  product: Product;
}
```

```tsx
import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";

export interface Product {
  imageUrl: string;
  productCode: string; //char
  productName: string; //varchar
  stock: number; // integer
  price: number; // float
  rating: number; // float
  isAvailable: boolean; // boolean
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const stars = Array.from({ length: 5 }, (_, i) => {
    const pos = i + 1;
    if (product.rating >= pos) return <FaStar key={i} />;
    if (product.rating >= pos - 0.5) return <FaStarHalfAlt key={i} />;
    return <FaRegStar key={i} />;
  });

  return (
    <div className="card text-gray-300 w-full max-w-none mx-auto hover:brightness-90 transition-all cursor-pointer group bg-gradient-to-tl from-gray-900 to-gray-950 hover:from-gray-800 hover:to-gray-950 border-r-2 border-t-2 border-gray-900 rounded-lg overflow-hidden relative">
      <div className="px-8 py-8 text-left">
        <div className="bg-orange-500 w-7 h-7 rounded-full rounded-tl-none mb-4 group-hover:-translate-y-1 group-hover:shadow-xl group-hover:shadow-red-900 transition-all" />
            <img
              src={product.imageUrl}
              alt={product.productName}
              className="w-full h-48 object-cover rounded-t-lg transition-transform duration-300 ease-out group-hover:scale-[1.02] group-hover:drop-shadow-[0_0_24px_rgba(234,179,8,0.2)]"
            />
        <div className="uppercase font-bold text-xl truncate">{product.productName}</div>
        <div className="text-gray-300 uppercase tracking-widest truncate">{product.productCode}</div>
        <div className="mt-3 flex items-center gap-1 text-yellow-400">{stars}</div>
        <div className="text-gray-400 mt-6">
          <div className="flex items-center justify-between">
            <p className="font-medium">Stock: {product.stock}</p>
            <p className="font-bold">₱{product.price.toFixed(2)}</p>
          </div>
          <p className={product.isAvailable ? "text-green-500" : "text-red-500"}>
            {product.isAvailable ? "Available" : "Out of Stock"}
          </p>
        </div>
      </div>
      <div className="h-2 w-full bg-gradient-to-l via-yellow-500 group-hover:blur-xl blur-2xl m-auto rounded transition-all absolute bottom-0" />
      <div className="h-0.5 group-hover:w-full bg-gradient-to-l via-yellow-950 group-hover:via-yellow-500 w-[70%] m-auto rounded transition-all" />
    </div>
  );
};

export default ProductCard;
```

This part is for passing all data to another component:

```jsx
 <div className="bg-orange-500 w-7 h-7 rounded-full rounded-tl-none mb-4 group-hover:-translate-y-1 group-hover:shadow-xl group-hover:shadow-red-900 transition-all" />
            <img
              src={product.imageUrl}
              alt={product.productName}
              className="w-full h-48 object-cover rounded-t-lg transition-transform duration-300 ease-out group-hover:scale-[1.02] group-hover:drop-shadow-[0_0_24px_rgba(234,179,8,0.2)]"
            />
        <div className="uppercase font-bold text-xl truncate">{product.productName}</div>
        <div className="text-gray-300 uppercase tracking-widest truncate">{product.productCode}</div>
        <div className="mt-3 flex items-center gap-1 text-yellow-400">{stars}</div>
        <div className="text-gray-400 mt-6">
          <div className="flex items-center justify-between">
            <p className="font-medium">Stock: {product.stock}</p>
            <p className="font-bold">₱{product.price.toFixed(2)}</p>
          </div>
          <p className={product.isAvailable ? "text-green-500" : "text-red-500"}>
            {product.isAvailable ? "Available" : "Out of Stock"}
          </p>
```

---

### **2.) UseProps.tsx** (Parent Component)

Installed react-icons for arrow buttons

- `npm install react-icons --save`

```tsx
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
    <div className="min-h-screen bg-black font-sans text-slate-100 relative overflow-hidden selection:bg-blue-500 selection:text-white">
 

     
      <main className="relative z-10 pt-16 pb-24 flex flex-col items-center text-center px-4 w-full">

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
```

This one is used for horizontal carousel

```jsx
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
```

And this part is for the rendered data coming from the child component

```jsx
<div className="flex gap-4 w-max mx-auto">
                {products.map((product) => (
                  <div key={product.productCode} className="carousel-slide snap-start shrink-0 w-[360px]">
                    <ProductCard product={product} />
                  </div>
                ))}
```