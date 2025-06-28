
import { Button } from '@/components/ui/button';
import { ArrowRight, Clock, Truck } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-800 to-blue-900 text-white overflow-hidden min-h-[600px]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-white"></div>
        <div className="absolute top-40 right-40 w-20 h-20 rounded-full bg-white"></div>
        <div className="absolute bottom-20 left-40 w-24 h-24 rounded-full bg-white"></div>
        <div className="absolute bottom-40 right-20 w-16 h-16 rounded-full bg-white"></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-[500px]">
          {/* Left Content */}
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-white">India's Favourite</span>
              <span className="block text-red-500">Pizza Delivery</span>
            </h1>
            <p className="text-xl mb-8 opacity-90 max-w-md">
              Hot & fresh pizza delivered to your door. Choose from our delicious range of pizzas, sides & desserts.
            </p>
            
            {/* Features */}
            <div className="flex flex-col sm:flex-row gap-6 mb-8">
              <div className="flex items-center space-x-3">
                <div className="bg-white p-2 rounded-full">
                  <Clock className="text-blue-800" size={20} />
                </div>
                <span className="font-medium text-lg">30 Min Delivery</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-white p-2 rounded-full">
                  <Truck className="text-blue-800" size={20} />
                </div>
                <span className="font-medium text-lg">Safe Delivery</span>
              </div>
            </div>

            <Button 
              className="bg-red-600 hover:bg-red-700 text-white font-bold text-xl px-12 py-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl"
              onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
            >
              ORDER ONLINE NOW
              <ArrowRight className="ml-3" size={24} />
            </Button>
          </div>

          {/* Right Content - Pizza Image */}
          <div className="lg:w-1/2 relative flex justify-center">
            <div className="relative">
              {/* Main Pizza Image */}
              <div className="w-[400px] h-[400px] lg:w-[500px] lg:h-[500px] relative">
                <img 
                  src="https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=500&h=500&fit=crop&crop=center" 
                  alt="Delicious Pizza"
                  className="w-full h-full object-cover rounded-full shadow-2xl"
                />
                {/* Pizza Glow Effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-red-400/20 to-yellow-400/20 animate-pulse"></div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-5 -right-5 bg-red-500 text-white px-4 py-2 rounded-full font-bold text-sm animate-bounce">
                Fresh & Hot!
              </div>
              <div className="absolute -bottom-5 -left-5 bg-green-500 text-white px-4 py-2 rounded-full font-bold text-sm animate-bounce" style={{ animationDelay: '1s' }}>
                ₹299 Only
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-12 fill-white">
          <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
        </svg>
      </div>
    </section>
  );
};
