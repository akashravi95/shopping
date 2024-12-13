import { Link } from 'react-router-dom';
import { ShoppingCart, User, LogOut, LogIn } from 'lucide-react'; // Imported LogIn for the Sign In icon
import { useAuthStore } from '../store/authStore';
import { useCartStore } from '../store/cartStore';

export const Navbar = () => {
  const { user, logout } = useAuthStore();
  const { items } = useCartStore();

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          {/* Logo and Navigation Links */}
          <div className="flex items-center space-x-8">
            <Link to="/" className="text-xl font-bold text-gray-800">
              ShopHub
            </Link>
            <div className="hidden md:flex space-x-4">
              <Link to="/clothing" className="text-gray-600 hover:text-gray-900">
                Clothing
              </Link>
              <Link to="/clothing/mens" className="text-gray-600 hover:text-gray-900">
                Men's
              </Link>
              <Link to="/clothing/womens" className="text-gray-600 hover:text-gray-900">
                Women's
              </Link>
              <Link to="/clothing/kids" className="text-gray-600 hover:text-gray-900">
                Kids
              </Link>
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex items-center flex-grow max-w-md mx-auto">
            <input
              type="text"
              placeholder="Search for products..."
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* User and Cart Options */}
          <div className="flex items-center space-x-4">
            {user ? (
              <>
                {user.role === 'admin' && (
                  <Link to="/admin" className="text-gray-600 hover:text-gray-900">
                    Dashboard
                  </Link>
                )}
                <Link to="/orders" className="text-gray-600 hover:text-gray-900">
                  Orders
                </Link>
                <Link to="/profile" className="text-gray-600 hover:text-gray-900 flex items-center space-x-2">
                  <User size={20} />
                  <span>Profile</span>
                </Link>
                <button
                  onClick={logout}
                  className="text-gray-600 hover:text-gray-900"
                >
                  <LogOut size={20} />
                </button>
              </>
            ) : (
              <Link to="/login" className="text-gray-600 hover:text-gray-900 flex items-center">
                <LogIn size={20} />
              </Link>
            )}
            
            <Link to="/cart" className="text-gray-600 hover:text-gray-900 relative">
              <ShoppingCart size={20} />
              {items.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {items.length}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
