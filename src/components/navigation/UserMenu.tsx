import React from 'react';
import { Link } from 'react-router-dom';
import { LogOut } from 'lucide-react';
import { useAuthStore } from '../../store/authStore';

export const UserMenu = () => {
  const { user, logout } = useAuthStore();

  if (!user) {
    return (
      <div className="flex items-center space-x-4">
        <Link to="/login" className="text-gray-600 hover:text-gray-900">
          Sign In
        </Link>
        <Link
          to="/signup"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Sign Up
        </Link>
      </div>
    );
  }

  return (
    <div className="flex items-center space-x-4">
      {user.role === 'admin' && (
        <Link to="/admin" className="text-gray-600 hover:text-gray-900">
          Dashboard
        </Link>
      )}
      <Link to="/orders" className="text-gray-600 hover:text-gray-900">
        Orders
      </Link>
      <button
        onClick={logout}
        className="text-gray-600 hover:text-gray-900"
        aria-label="Logout"
      >
        <LogOut size={20} />
      </button>
    </div>
  );
};