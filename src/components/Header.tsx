
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Menu, X, MapPin, Phone, User } from 'lucide-react';

interface HeaderProps {
  cartItemsCount: number;
  onCartClick: () => void;
}

export const Header = ({ cartItemsCount, onCartClick }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-blue-900 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <MapPin size={16} />
              <span>Deliver to: <strong>Select your location</strong></span>
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone size={16} />
              <span>Call: <strong>1800-111-123</strong></span>
            </div>
            <div className="flex items-center space-x-2">
              <User size={16} />
              <span>Login/Sign up</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="bg-blue-900 text-white p-3 rounded-lg">
              <div className="font-bold text-2xl">
                <span className="text-red-500">D</span>omino's
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#menu" className="text-gray-800 hover:text-blue-900 font-semibold text-lg transition-colors border-b-2 border-transparent hover:border-blue-900 pb-1">
              MENU
            </a>
            <a href="#deals" className="text-gray-800 hover:text-blue-900 font-semibold text-lg transition-colors border-b-2 border-transparent hover:border-blue-900 pb-1">
              DEALS
            </a>
            <a href="#stores" className="text-gray-800 hover:text-blue-900 font-semibold text-lg transition-colors border-b-2 border-transparent hover:border-blue-900 pb-1">
              STORES
            </a>
            <a href="#about" className="text-gray-800 hover:text-blue-900 font-semibold text-lg transition-colors border-b-2 border-transparent hover:border-blue-900 pb-1">
              ABOUT US
            </a>
          </nav>

          {/* Cart and Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Button
              onClick={onCartClick}
              className="relative bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full font-semibold shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              <ShoppingCart size={20} className="mr-2" />
              CART
              {cartItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs rounded-full px-2 py-1 min-w-[24px] h-6 flex items-center justify-center font-bold">
                  {cartItemsCount}
                </span>
              )}
            </Button>

            {/* Mobile Menu Button */}
            <Button
              className="md:hidden bg-transparent text-gray-700 hover:bg-gray-100 p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 py-4 border-t">
            <div className="flex flex-col space-y-4">
              <a href="#menu" className="text-gray-800 hover:text-blue-900 font-semibold text-lg">
                MENU
              </a>
              <a href="#deals" className="text-gray-800 hover:text-blue-900 font-semibold text-lg">
                DEALS
              </a>
              <a href="#stores" className="text-gray-800 hover:text-blue-900 font-semibold text-lg">
                STORES
              </a>
              <a href="#about" className="text-gray-800 hover:text-blue-900 font-semibold text-lg">
                ABOUT US
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
