
import { Button } from '@/components/ui/button';
import { ArrowRight, Clock, Truck, Star, Award } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900 text-white overflow-hidden min-h-[700px]">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-gradient-to-r from-orange-400 to-red-400 animate-pulse"></div>
        <div className="absolute top-40 right-40 w-20 h-20 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 animate-bounce"></div>
        <div className="absolute bottom-20 left-40 w-24 h-24 rounded-full bg-gradient-to-r from-orange-400 to-red-400 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-[500px]">
          {/* Left Content */}
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <div className="mb-6">
              <div className="inline-flex items-center bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-bold mb-4 animate-bounce">
                <Award className="mr-2" size={16} />
                #1 Pizza Delivery in India
              </div>
            </div>
            
            <h1 className="text-6xl lg:text-7xl font-black mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">Welcome to</span>
              <span className="block bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">PizzaHub</span>
            </h1>
            
            <p className="text-xl mb-8 opacity-90 max-w-lg leading-relaxed text-gray-300">
              Experience the <span className="text-orange-400 font-bold">most delicious</span> pizzas crafted with love and delivered with care. Your taste buds deserve the best!
            </p>
            
            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-xl p-4 transform hover:scale-105 transition-all duration-300">
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-3 rounded-full">
                  <Clock className="text-white" size={20} />
                </div>
                <div>
                  <span className="font-bold text-lg block">25 Min Delivery</span>
                  <span className="text-sm text-gray-300">Lightning Fast!</span>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-xl p-4 transform hover:scale-105 transition-all duration-300">
                <div className="bg-gradient-to-r from-orange-500 to-red-500 p-3 rounded-full">
                  <Truck className="text-white" size={20} />
                </div>
                <div>
                  <span className="font-bold text-lg block">Safe & Secure</span>
                  <span className="text-sm text-gray-300">100% Guaranteed</span>
                </div>
              </div>
            </div>

            {/* CTA Button - Only Order Now with orange gradient */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold text-xl px-12 py-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl"
                onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
              >
                ORDER NOW
                <ArrowRight className="ml-3" size={24} />
              </Button>
            </div>
          </div>

          {/* Right Content - Round Pizza Image */}
          <div className="lg:w-1/2 relative flex justify-center">
            <div className="relative transform hover:scale-105 transition-all duration-500">
              {/* Main Round Pizza Image Container */}
              <div className="w-[400px] h-[400px] lg:w-[500px] lg:h-[500px] relative z-10">
                {/* Glow Background */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-400/20 to-red-400/20 blur-2xl animate-pulse"></div>
                
                {/* Round Pizza Image - Using 3rd pizza image */}
                <img 
                  src="https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=500&h=500&fit=crop&crop=center" 
                  alt="Delicious PizzaHub Pizza"
                  className="w-full h-full object-cover rounded-full shadow-2xl relative z-10 border-4 border-white/10"
                />
                
                {/* Animated Ring */}
                <div className="absolute inset-0 rounded-full border-2 border-gradient-to-r from-orange-400 to-red-500 opacity-50 z-20"></div>
              </div>
              
              {/* Floating Elements - Made fully visible with higher z-index and better positioning */}
              <div className="absolute -top-8 -right-8 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-3 rounded-2xl font-bold text-sm animate-bounce shadow-2xl transform rotate-12 z-30">
                🔥 Fresh & Hot!
              </div>
              
              <div className="absolute -bottom-8 -left-8 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-4 py-3 rounded-2xl font-bold text-sm animate-bounce shadow-2xl transform -rotate-12 z-30" style={{ animationDelay: '1s' }}>
                ⭐ ₹199 Only
              </div>
              
              <div className="absolute top-1/4 -left-12 bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-2 rounded-full font-bold text-xs shadow-2xl z-30">
                🏆 Bestseller
              </div>
              
              <div className="absolute bottom-1/4 -right-12 bg-gradient-to-r from-slate-600 to-slate-700 text-white px-3 py-2 rounded-full font-bold text-xs shadow-2xl z-30">
                ⚡ 4.9★ Rated
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-16 fill-current text-white">
          <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
        </svg>
      </div>
    </section>
  );
};
