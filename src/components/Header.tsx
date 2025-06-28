
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Menu, X, MapPin, Phone, User, Pizza, Heart, Star } from 'lucide-react';

interface HeaderProps {
  cartItemsCount: number;
  onCartClick: () => void;
}

export const Header = ({ cartItemsCount, onCartClick }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-2xl sticky top-0 z-50 border-b-4 border-gradient-to-r from-red-500 to-pink-500">
      {/* Enhanced Top bar */}
      <div className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-3">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2 animate-pulse">
              <MapPin size={18} className="text-yellow-300" />
              <span>Deliver to: <strong className="text-yellow-300">Select your location</strong></span>
            </div>
            <div className="hidden md:flex items-center space-x-2">
              <Star size={16} className="text-yellow-300" />
              <span>4.9★ Rated | <strong>50,000+</strong> Happy Customers</span>
            </div>
          </div>
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2 hover:text-yellow-300 transition-colors cursor-pointer">
              <Phone size={18} />
              <span>Call: <strong>1800-PIZZA-HUB</strong></span>
            </div>
            <div className="flex items-center space-x-2 hover:text-yellow-300 transition-colors cursor-pointer">
              <User size={18} />
              <span className="hidden sm:inline">Login/Sign up</span>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Enhanced Logo */}
          <div className="flex items-center space-x-4">
            <div className="bg-gradient-to-r from-red-500 via-pink-500 to-orange-500 text-white p-4 rounded-2xl flex items-center space-x-3 shadow-2xl transform hover:scale-105 transition-all duration-300 hover:rotate-3">
              <Pizza className="text-white animate-spin" size={32} style={{ animationDuration: '10s' }} />
              <div className="font-black text-3xl">
                <span className="text-white drop-shadow-lg">Pizza</span>
                <span className="text-yellow-300 drop-shadow-lg">Hub</span>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="text-xs text-gray-600">
                <div className="font-bold text-purple-600">India's #1 Pizza Delivery</div>
                <div className="flex items-center space-x-1">
                  <Heart size={12} className="text-red-500 fill-red-500" />
                  <span>Made with Love since 2020</span>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {[
              { href: '#menu', label: 'MENU', icon: '🍕' },
              { href: '#deals', label: 'DEALS', icon: '🔥' },
              { href: '#stores', label: 'STORES', icon: '📍' },
              { href: '#about', label: 'ABOUT US', icon: '⭐' }
            ].map((item) => (
              <a 
                key={item.href}
                href={item.href} 
                className="relative text-gray-800 hover:text-transparent hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:bg-clip-text font-bold text-lg transition-all duration-300 border-b-3 border-transparent hover:border-gradient-to-r hover:from-purple-600 hover:to-pink-600 pb-2 group"
              >
                <span className="mr-2">{item.icon}</span>
                {item.label}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-purple-600 to-pink-600 group-hover:w-full transition-all duration-300"></div>
              </a>
            ))}
          </nav>

          {/* Enhanced Cart and Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Button
              onClick={onCartClick}
              className="relative bg-gradient-to-r from-red-500 via-pink-500 to-red-600 hover:from-red-600 hover:via-pink-600 hover:to-red-700 text-white px-8 py-4 rounded-2xl font-black shadow-2xl transition-all duration-300 transform hover:scale-110 hover:rotate-1"
            >
              <ShoppingCart size={24} className="mr-3 animate-bounce" />
              CART
              {cartItemsCount > 0 && (
                <span className="absolute -top-3 -right-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-sm rounded-full px-3 py-1 min-w-[28px] h-7 flex items-center justify-center font-black animate-pulse shadow-lg">
                  {cartItemsCount}
                </span>
              )}
            </Button>

            {/* Enhanced Mobile Menu Button */}
            <Button
              className="md:hidden bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 p-3 rounded-xl"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Enhanced Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-6 py-6 border-t-2 border-gradient-to-r from-purple-500 to-pink-500 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl">
            <div className="flex flex-col space-y-6">
              {[
                { href: '#menu', label: 'MENU', icon: '🍕' },
                { href: '#deals', label: 'DEALS', icon: '🔥' },
                { href: '#stores', label: 'STORES', icon: '📍' },
                { href: '#about', label: 'ABOUT US', icon: '⭐' }
              ].map((item) => (
                <a 
                  key={item.href}
                  href={item.href} 
                  className="text-gray-800 hover:text-transparent hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:bg-clip-text font-bold text-xl text-center py-3 px-6 rounded-xl hover:bg-white transition-all duration-300" 
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="mr-3">{item.icon}</span>
                  {item.label}
                </a>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
