
import { Button } from '@/components/ui/button';
import { ArrowRight, Clock, Truck } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-red-600 to-red-700 text-white overflow-hidden">
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left Content */}
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Domino's Pizza
              <span className="block text-yellow-300">Delivered Hot!</span>
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Freshly made pizzas with premium ingredients, delivered to your doorstep in 30 minutes or less.
            </p>
            
            {/* Features */}
            <div className="flex flex-col sm:flex-row gap-6 mb-8">
              <div className="flex items-center space-x-2">
                <Clock className="text-yellow-300" size={24} />
                <span className="font-medium">30 Min Delivery</span>
              </div>
              <div className="flex items-center space-x-2">
                <Truck className="text-yellow-300" size={24} />
                <span className="font-medium">Free Delivery</span>
              </div>
            </div>

            <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105">
              Order Now
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </div>

          {/* Right Content - Pizza Image */}
          <div className="lg:w-1/2 relative">
            <div className="relative z-10">
              <div className="w-96 h-96 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-6xl animate-pulse">
                🍕
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute top-10 right-10 w-20 h-20 bg-yellow-400 rounded-full opacity-20 animate-bounce"></div>
            <div className="absolute bottom-10 left-10 w-16 h-16 bg-white rounded-full opacity-20 animate-bounce" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 text-6xl">🍕</div>
        <div className="absolute top-40 right-40 text-4xl">🧄</div>
        <div className="absolute bottom-20 left-40 text-5xl">🍅</div>
        <div className="absolute bottom-40 right-20 text-3xl">🧀</div>
      </div>
    </section>
  );
};
