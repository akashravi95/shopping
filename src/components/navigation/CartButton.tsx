import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { useCartStore } from '../../store/cartStore';

export const CartButton = () => {
  const { items } = useCartStore();

  return (
    <Link to="/cart" className="text-gray-600 hover:text-gray-900 relative">
      <ShoppingCart size={20} />
      {items.length > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
          {items.length}
        </span>
      )}
    </Link>
  );
};