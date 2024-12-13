import React from 'react';
import { Link } from 'react-router-dom';

export const NavLinks = () => {
  return (
    <div className="hidden md:flex space-x-4">
      <Link to="/clothing" className="text-gray-600 hover:text-gray-900">
        Clothing
      </Link>
    </div>
  );
};