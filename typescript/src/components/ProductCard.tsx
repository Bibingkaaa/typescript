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