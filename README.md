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

[Card by jubayer-10 made with Tailwind | Uiverse.io](https://uiverse.io/jubayer-10/white-catfish-8)

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

  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (rating >= i) {
        stars.push(<FaStar key={i} className="text-yellow-400" />);
      } else if (rating >= i - 0.5) {
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-gray-300" />);
      }
    }
    return stars;
  };

  return (
   <div className="w-full h-full rounded-lg bg-white shadow-[0px_0px_15px_rgba(0,0,0,0.09)] p-9 space-y-3 relative overflow-hidden group cursor-pointer hover:shadow-2xl transition-all duration-300">
      
      <div className="w-24 h-24 bg-violet-500 rounded-full absolute -right-5 -top-7 transition-transform group-hover:scale-110 duration-300">
        <p className="absolute bottom-6 left-7 text-white text-2xl">0{product.productCode}</p>
      </div>

      <div className="relative z-10 pt-2">
      
        <h2 className="font-bold text-xl text-gray-800 truncate text-left">
          {product.productName}
        </h2>
        

        <div className="text-sm text-zinc-500 space-y-2">
          
     
          <div className="flex items-center gap-1">
             {renderStars(product.rating)}
             <span className="text-xs ml-1 text-gray-400">({product.rating})</span>
          </div>
        
          <div className="flex justify-between items-end border-t border-gray-100 pt-2 mt-2">
      
             <div className="flex flex-col">
                <span className="text-xs font-medium text-gray-400">Stock: {product.stock}</span>
                <span className={`text-xs font-bold ${product.isAvailable ? "text-emerald-500" : "text-rose-500"}`}>
                   {product.isAvailable ? "Available" : "Out of Stock"}
                </span>
             </div>
             <p className="font-bold text-lg text-violet-600">
               ₱{product.price.toLocaleString(undefined, { minimumFractionDigits: 2 })}
             </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
```

This part is for passing all data to another component:

```jsx
 <div className="w-24 h-24 bg-violet-500 rounded-full absolute -right-5 -top-7 transition-transform group-hover:scale-110 duration-300">
        <p className="absolute bottom-6 left-7 text-white text-2xl">0{product.productCode}</p>
      </div>

      <div className="relative z-10 pt-2">
      
        <h2 className="font-bold text-xl text-gray-800 truncate text-left">
          {product.productName}
        </h2>
        

        <div className="text-sm text-zinc-500 space-y-2">
          
     
          <div className="flex items-center gap-1">
             {renderStars(product.rating)}
             <span className="text-xs ml-1 text-gray-400">({product.rating})</span>
          </div>
        
          <div className="flex justify-between items-end border-t border-gray-100 pt-2 mt-2">
      
             <div className="flex flex-col">
                <span className="text-xs font-medium text-gray-400">Stock: {product.stock}</span>
                <span className={`text-xs font-bold ${product.isAvailable ? "text-emerald-500" : "text-rose-500"}`}>
                   {product.isAvailable ? "Available" : "Out of Stock"}
                </span>
             </div>
             <p className="font-bold text-lg text-violet-600">
               ₱{product.price.toLocaleString(undefined, { minimumFractionDigits: 2 })}
             </p>
          </div>
        </div>
      </div>
```

---

### **2.) UseProps.tsx** (Parent Component)

Installed react-icons for arrow buttons

- `npm install react-icons --save`

```tsx
import ProductCard, { type Product } from './ProductCard';
import React from 'react';

const products: Product[] = [
    {
        productCode: "1",
        productName: "Wireless Mouse",
        stock: 25,
        price: 799.99,
        rating: 4.6,
        isAvailable: true
    },
    {
        productCode: "2",
        productName: "Keyboard",
        stock: 0,
        price: 1800.00,
        rating: 4.8,
        isAvailable: false
    },
    {
        productCode: "3",
        productName: "USB-C Hub",
        stock: 0,
        price: 1499.00,
        rating: 4.4,
        isAvailable: false
    },
    {
        productCode: "4",
        productName: "Gaming Headset",
        stock: 18,
        price: 1999.00,
        rating: 4.5,
        isAvailable: true
    },
      {
        productCode: "5",
        productName: "Webcam HD",
        stock: 7,
        price: 1799.00,
        rating: 4.3,
        isAvailable: true
    },
        {
        productCode: "6",
        productName: "Gaming Monitor",
        stock: 9,
        price: 5799.00,
        rating: 4.3,
        isAvailable: true
    }
];

const UseProps: React.FC = () => {
  return (
    <div className="min-h-screen font-sans text-slate-800 relative selection:bg-violet-500 selection:text-white pb-20">
      
      <main className="relative z-10 pt-10 flex flex-col items-center px-4 w-full">
        
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

export default UseProps;
```



And this part is for the rendered data coming from the child component

```jsx
<section className="w-full max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            
            {products.map((product) => (
              <div key={product.productCode} className="w-full max-w-[380px]"> 
                <ProductCard product={product} />
              </div>
            ))}

          </div>
        </section>
```
# Agenda 2 Documentation

Agenda Item 2: useState Hook (JavaScript)
File extension: .jsx (UseState.jsx)
Video Timestamp: 1:43:00

Objective
• Understand state management in React
• Learn how to use the useState() hook

Task
• Watch and study the video starting at 1:43:00
• Create a simple React project demonstrating the useState() hook

Project Requirements
• Use useState() to manage component state
• Display state values in the UI
• Allow user interaction to update the state

1.) LiveTextMirror.jsx

```jsx
import React, { useState } from 'react';

const LiveTextMirror = () => {
    const [text, setText] = useState('');

    return (
   <div className="min-h-screen font-sans text-slate-800 relative selection:bg-violet-500 selection:text-white pb-20">
      
      <main className="relative z-10 pt-10 flex flex-col items-center px-4 w-full">
        
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 mb-4">
            Live <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-500">Text</span> Mirror
          </h1>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Prepared by: Mary Hannah Caryl D. Reyes
          </p>
        </div>

        
        <section className="w-full max-w-3xl mx-auto flex flex-col gap-10">
         <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 min-h-[100px] text-center">
             <h3 className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-2">[ YOU TEXT HERE ]</h3>
             <p className="text-medium font-medium text-indigo-600 break-words">
                {text || <span className="text-gray-300 font-light">Your text will appear here...</span>}
             </p>
          </div>

          <div className="relative w-full group">
            <span className="absolute -left-0.5 top-2 bottom-2 w-1.5 rounded bg-gradient-to-b from-indigo-500 to-violet-500 opacity-70 transition-all duration-300 group-focus-within:opacity-100" />
            
            <input 
              type="text" 
              id="input" 
              placeholder=" " 
              value={text}
              onChange={(e) => setText(e.target.value)} 
              className="peer w-full pl-6 pr-4 pt-6 pb-2 text-lg text-gray-800 bg-white border border-gray-200 rounded-lg shadow-md focus:border-transparent focus:ring-2 focus:ring-indigo-300 focus:outline-none transition-all duration-300 delay-200 placeholder-transparent" 
            />
            
            <label 
             htmlFor="input" 
            className="
          absolute left-6 
      transition-all duration-200 ease-in-out 
      cursor-text

      /* --- DEFAULT STATE (When text is present) --- */
      /* Keeps the label at the top even when you click away */
      top-1 
      text-sm 
      text-gray-500 

      /* --- EMPTY STATE (When placeholder is shown) --- */
      /* Push label down to center if field is empty */
      peer-placeholder-shown:top-3.5 
      peer-placeholder-shown:text-base 
      peer-placeholder-shown:text-gray-400 

      /* --- FOCUSED STATE (When user clicks) --- */
      /* Ensure label stays at top and changes color */
      peer-focus:top-1 
      peer-focus:text-sm 
      peer-focus:text-indigo-500 
      peer-focus:font-semibold"
            >
               Write Here
            </label>
          </div>

     
        </section>
      </main>
    </div>
  
    );
};
export default LiveTextMirror;
```

How to use the useState() hook through a Live Text Mirror (String State).

This demonstrates how to handle form inputs and update the UI in real-time as the user types.

- **Functionality:** An `<input>` field where the user types their name. As they type, a greeting heading (`<h1>`) updates instantly (e.g., "Hello, [Name]!").
- It teaches you how to capture event data (`e.target.value`).

```jsx
 <input type="text" 
              id="input" 
              placeholder=" " 
              value={text}
              onChange={(e) => setText(e.target.value)} 
              className="peer w-full pl-6 pr-4 pt-6 pb-2 text-lg text-gray-800 bg-white border border-gray-200 rounded-lg shadow-md focus:border-transparent focus:ring-2 focus:ring-indigo-300 focus:outline-none transition-all duration-300 delay-200 placeholder-transparent" 
            />
```

used onChange to change or update real time the state of the text here:

```jsx
 <p className="text-medium font-medium text-indigo-600 break-words">
                {text || <span className="text-gray-300 font-light">Your text will appear here...</span>}
             </p>
```