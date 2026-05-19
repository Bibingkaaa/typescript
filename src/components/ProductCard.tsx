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
      
      <div className="w-24 h-24 bg-violet-500 rounded-full absolute -right-5 -top-7 transition-transform group-hover:scale-110 duration-300 z-20">
        <p className="absolute bottom-6 left-7 text-white text-2xl">0{product.productCode}</p>
      </div>
      
      <div className="relative z-10 pt-2">
         <div className="w-full h-48 bg-gray-50 rounded-xl mb-4 overflow-hidden relative shadow-inner">
          <img 
            src={product.imageUrl} 
            alt={product.productName}
            className="w-full h-full object-contain mix-blend-multiply hover:scale-110 transition-transform duration-500"
          /></div>
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