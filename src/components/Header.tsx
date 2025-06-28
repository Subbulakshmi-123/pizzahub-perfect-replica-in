
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Menu, X, MapPin, Phone } from 'lucide-react';

interface HeaderProps {
  cartItemsCount: number;
  onCartClick: () => void;
}

export const Header = ({ cartItemsCount, onCartClick }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-blue-900 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <MapPin size={16} />
              <span>Deliver to: Mumbai, Maharashtra</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Phone size={16} />
              <span>1800-111-123</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-red-600 text-white px-4 py-2 rounded-lg font-bold text-xl">
              Domino's
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#menu" className="text-gray-700 hover:text-red-600 font-medium transition-colors">
              Menu
            </a>
            <a href="#deals" className="text-gray-700 hover:text-red-600 font-medium transition-colors">
              Deals
            </a>
            <a href="#stores" className="text-gray-700 hover:text-red-600 font-medium transition-colors">
              Stores
            </a>
            <a href="#about" className="text-gray-700 hover:text-red-600 font-medium transition-colors">
              About
            </a>
          </nav>

          {/* Cart and Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Button
              onClick={onCartClick}
              className="relative bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
            >
              <ShoppingCart size={20} />
              {cartItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs rounded-full px-2 py-1 min-w-[20px] h-5 flex items-center justify-center font-bold">
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
              <a href="#menu" className="text-gray-700 hover:text-red-600 font-medium">
                Menu
              </a>
              <a href="#deals" className="text-gray-700 hover:text-red-600 font-medium">
                Deals
              </a>
              <a href="#stores" className="text-gray-700 hover:text-red-600 font-medium">
                Stores
              </a>
              <a href="#about" className="text-gray-700 hover:text-red-600 font-medium">
                About
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
