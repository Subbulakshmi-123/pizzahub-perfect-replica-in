
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Menu, X, MapPin, Phone, User, Pizza, Heart, Star } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface HeaderProps {
  cartItemsCount: number;
  onCartClick: () => void;
}

export const Header = ({ cartItemsCount, onCartClick }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { href: '/', label: 'MENU', icon: '🍕' },
    { href: '/deals', label: 'DEALS', icon: '🔥' },
    { href: '/stores', label: 'STORES', icon: '📍' },
    { href: '/about', label: 'ABOUT US', icon: '⭐' }
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50 border-b-2 border-slate-200">
      {/* Top bar */}
      <div className="bg-slate-800 text-white py-3">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <MapPin size={18} className="text-orange-400" />
              <span>Deliver to: <strong className="text-orange-400">Select your location</strong></span>
            </div>
            <div className="hidden md:flex items-center space-x-2">
              <Star size={16} className="text-orange-400" />
              <span>4.9★ Rated | <strong>50,000+</strong> Happy Customers</span>
            </div>
          </div>
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2 hover:text-orange-400 transition-colors cursor-pointer">
              <Phone size={18} />
              <span>Call: <strong>1800-PIZZA-HUB</strong></span>
            </div>
            <div className="flex items-center space-x-2 hover:text-orange-400 transition-colors cursor-pointer">
              <User size={18} />
              <span className="hidden sm:inline">Login/Sign up</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-4">
            <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-3 rounded-xl flex items-center space-x-3 shadow-lg transform hover:scale-105 transition-all duration-300">
              <Pizza className="text-white" size={28} />
              <div className="font-black text-2xl">
                <span className="text-white">Pizza</span>
                <span className="text-orange-200">Hub</span>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="text-xs text-gray-600">
                <div className="font-bold text-slate-700">India's #1 Pizza Delivery</div>
                <div className="flex items-center space-x-1">
                  <Heart size={12} className="text-red-500 fill-red-500" />
                  <span>Made with Love since 2020</span>
                </div>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link 
                key={item.href}
                to={item.href} 
                className={`relative text-slate-700 hover:text-orange-600 font-bold text-lg transition-all duration-300 pb-2 group ${
                  location.pathname === item.href ? 'text-orange-600' : ''
                }`}
              >
                <span className="mr-2">{item.icon}</span>
                {item.label}
                <div className={`absolute bottom-0 left-0 h-1 bg-orange-600 transition-all duration-300 ${
                  location.pathname === item.href ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></div>
              </Link>
            ))}
          </nav>

          {/* Cart and Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Button
              onClick={onCartClick}
              className="relative bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-6 py-3 rounded-xl font-bold shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              <ShoppingCart size={20} className="mr-2" />
              CART
              {cartItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-sm rounded-full px-2 py-1 min-w-[24px] h-6 flex items-center justify-center font-bold">
                  {cartItemsCount}
                </span>
              )}
            </Button>

            {/* Mobile Menu Button */}
            <Button
              className="md:hidden bg-slate-700 text-white hover:bg-slate-800 p-3 rounded-lg"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-6 py-6 border-t-2 border-slate-200 bg-slate-50 rounded-lg">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link 
                  key={item.href}
                  to={item.href} 
                  className={`text-slate-700 hover:text-orange-600 font-bold text-xl text-center py-3 px-6 rounded-lg hover:bg-white transition-all duration-300 ${
                    location.pathname === item.href ? 'text-orange-600 bg-white' : ''
                  }`} 
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="mr-3">{item.icon}</span>
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
