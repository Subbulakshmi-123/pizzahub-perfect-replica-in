
import { Button } from '@/components/ui/button';
import { ArrowRight, Clock, Truck, Star, Award } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden min-h-[700px]">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-gradient-to-r from-pink-400 to-red-400 animate-pulse"></div>
        <div className="absolute top-40 right-40 w-20 h-20 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 animate-bounce"></div>
        <div className="absolute bottom-20 left-40 w-24 h-24 rounded-full bg-gradient-to-r from-green-400 to-blue-400 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 right-20 w-16 h-16 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 animate-bounce" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Floating Pizza Icons */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-32 left-1/4 text-6xl animate-spin" style={{ animationDuration: '20s' }}>🍕</div>
        <div className="absolute bottom-32 right-1/4 text-4xl animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}>🍕</div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-[500px]">
          {/* Left Content */}
          <div className="lg:w-1/2 mb-10 lg:mb-0 animate-fade-in">
            <div className="mb-6">
              <div className="inline-flex items-center bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-bold mb-4 animate-bounce">
                <Award className="mr-2" size={16} />
                #1 Pizza Delivery in India
              </div>
            </div>
            
            <h1 className="text-6xl lg:text-8xl font-black mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent animate-pulse">Welcome to</span>
              <span className="block bg-gradient-to-r from-red-400 via-pink-500 to-orange-500 bg-clip-text text-transparent animate-pulse" style={{ animationDelay: '0.5s' }}>PizzaHub</span>
            </h1>
            
            <p className="text-2xl mb-8 opacity-90 max-w-lg leading-relaxed">
              Experience the <span className="text-yellow-300 font-bold">most delicious</span> pizzas crafted with love and delivered with care. Your taste buds deserve the best!
            </p>
            
            {/* Enhanced Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-xl p-4 transform hover:scale-105 transition-all duration-300">
                <div className="bg-gradient-to-r from-green-400 to-blue-500 p-3 rounded-full animate-pulse">
                  <Clock className="text-white" size={24} />
                </div>
                <div>
                  <span className="font-bold text-xl block">25 Min Delivery</span>
                  <span className="text-sm opacity-80">Lightning Fast!</span>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-xl p-4 transform hover:scale-105 transition-all duration-300">
                <div className="bg-gradient-to-r from-purple-400 to-pink-500 p-3 rounded-full animate-pulse" style={{ animationDelay: '1s' }}>
                  <Truck className="text-white" size={24} />
                </div>
                <div>
                  <span className="font-bold text-xl block">Safe & Secure</span>
                  <span className="text-sm opacity-80">100% Guaranteed</span>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-gradient-to-r from-red-500 via-pink-500 to-red-600 hover:from-red-600 hover:via-pink-600 hover:to-red-700 text-white font-black text-xl px-16 py-8 rounded-full transition-all duration-500 transform hover:scale-110 hover:rotate-1 shadow-2xl hover:shadow-pink-500/25 animate-pulse"
                onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
              >
                ORDER NOW
                <ArrowRight className="ml-3 animate-bounce" size={28} />
              </Button>
              
              <Button 
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-purple-900 font-bold text-xl px-12 py-8 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                <Star className="mr-3" size={24} />
                View Menu
              </Button>
            </div>
          </div>

          {/* Right Content - Enhanced Pizza Image */}
          <div className="lg:w-1/2 relative flex justify-center animate-scale-in">
            <div className="relative transform hover:scale-105 transition-all duration-500">
              {/* Main Pizza Image Container */}
              <div className="w-[450px] h-[450px] lg:w-[550px] lg:h-[550px] relative">
                {/* Glow Background */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-red-400/30 via-pink-400/30 to-orange-400/30 animate-pulse blur-xl"></div>
                
                {/* Pizza Image */}
                <img 
                  src="https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=600&h=600&fit=crop&crop=center" 
                  alt="Delicious PizzaHub Pizza"
                  className="w-full h-full object-cover rounded-full shadow-2xl relative z-10 border-4 border-white/20"
                />
                
                {/* Animated Ring */}
                <div className="absolute inset-0 rounded-full border-4 border-gradient-to-r from-yellow-400 via-red-500 to-pink-500 animate-spin" style={{ animationDuration: '10s' }}></div>
              </div>
              
              {/* Floating Elements with Enhanced Animations */}
              <div className="absolute -top-8 -right-8 bg-gradient-to-r from-green-400 to-blue-500 text-white px-6 py-4 rounded-2xl font-black text-lg animate-bounce shadow-xl transform rotate-12">
                🔥 Fresh & Hot!
              </div>
              
              <div className="absolute -bottom-8 -left-8 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 py-4 rounded-2xl font-black text-lg animate-bounce shadow-xl transform -rotate-12" style={{ animationDelay: '1s' }}>
                ⭐ ₹199 Only
              </div>
              
              <div className="absolute top-1/4 -left-12 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-3 rounded-full font-bold text-sm animate-pulse shadow-lg">
                🏆 Bestseller
              </div>
              
              <div className="absolute bottom-1/4 -right-12 bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-3 rounded-full font-bold text-sm animate-pulse shadow-lg" style={{ animationDelay: '2s' }}>
                ⚡ 4.9★ Rated
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Bottom Wave with Gradient */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-16 fill-current text-white">
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="50%" stopColor="#f0f9ff" />
              <stop offset="100%" stopColor="#ffffff" />
            </linearGradient>
          </defs>
          <path fill="url(#waveGradient)" d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
        </svg>
      </div>
    </section>
  );
};
