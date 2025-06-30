
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Clock, Percent, Gift, Star } from 'lucide-react';

const Deals = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const deals = [
    {
      id: 1,
      title: "Buy 1 Get 1 Free",
      description: "Order any large pizza and get another large pizza absolutely free!",
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=300&fit=crop",
      discount: "50% OFF",
      validUntil: "Valid till 31st Dec 2024",
      code: "BOGO50",
      rating: 4.8
    },
    {
      id: 2,
      title: "Family Feast",
      description: "2 Large Pizzas + 2 Sides + 2 Drinks at unbeatable price",
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=300&fit=crop",
      discount: "₹999 Only",
      validUntil: "Valid till 25th Dec 2024",
      code: "FAMILY999",
      rating: 4.7
    },
    {
      id: 3,
      title: "Student Special",
      description: "Show your student ID and get 25% off on all orders",
      image: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=400&h=300&fit=crop",
      discount: "25% OFF",
      validUntil: "Valid till 30th Dec 2024",
      code: "STUDENT25",
      rating: 4.5
    },
    {
      id: 4,
      title: "Weekend Bonanza",
      description: "Free delivery + 20% off on orders above ₹500 on weekends",
      image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=300&fit=crop",
      discount: "20% OFF",
      validUntil: "Valid on Weekends",
      code: "WEEKEND20",
      rating: 4.6
    }
  ];

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        cartItemsCount={getTotalItems()} 
        onCartClick={() => setIsCartOpen(true)} 
      />
      
      <main className="py-12">
        <div className="container mx-auto px-4">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-black text-slate-800 mb-4">
              Amazing <span className="text-orange-600">Deals</span> & Offers
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Don't miss out on these incredible deals! Save big on your favorite pizzas and more.
            </p>
          </div>

          {/* Deals Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
            {deals.map((deal) => (
              <Card key={deal.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="relative">
                  <img 
                    src={deal.image} 
                    alt={deal.title}
                    className="w-full h-48 object-cover"
                  />
                  <Badge className="absolute top-4 right-4 bg-red-500 text-white text-lg px-3 py-1">
                    {deal.discount}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-slate-800 flex items-center">
                    <Gift className="mr-2 text-orange-600" size={24} />
                    {deal.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 text-lg">{deal.description}</p>
                  
                  {/* Rating as text */}
                  <div className="flex items-center gap-1 mb-4">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-bold text-gray-700">{deal.rating} Rating</span>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock size={16} className="mr-1" />
                      {deal.validUntil}
                    </div>
                    <Badge variant="outline" className="text-orange-600 border-orange-600">
                      Code: {deal.code}
                    </Badge>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold">
                    Claim This Deal
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Special Offers Section */}
          <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 text-white text-center">
            <h2 className="text-4xl font-black mb-4">🎉 Limited Time Offers!</h2>
            <p className="text-xl mb-6 opacity-90">
              Subscribe to our newsletter and get exclusive deals delivered to your inbox!
            </p>
            <div className="flex flex-col md:flex-row max-w-md mx-auto gap-4">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-800 focus:outline-none"
              />
              <Button className="bg-white text-orange-600 hover:bg-gray-100 font-bold px-8 py-3">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Deals;
