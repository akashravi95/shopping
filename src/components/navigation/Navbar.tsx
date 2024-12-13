import { Logo } from './Logo';
import { NavLinks } from './NavLinks';
import { UserMenu } from './UserMenu';
import { CartButton } from './CartButton';

export const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center space-x-8">
            <Logo />
            <NavLinks />
          </div>
          
          <div className="flex items-center space-x-4">
            <UserMenu />
            <CartButton />
          </div>
        </div>
      </div>
    </nav>
  );
};