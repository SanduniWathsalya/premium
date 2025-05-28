// components/PremiumProductCard.js
export default function PremiumProductCard({ product }) {
  return (
    <div className="bg-white border rounded shadow p-3 flex flex-col">
      <img
        src={product.image}
        alt={product.name}
        className="h-48 object-cover rounded mb-3 "
      />
      <h3 className="font-semibold text-black">{product.name}</h3>
      <p className="text-gray-700 mb-1">${product.price}</p>
     
      
    </div>
  );
}
