
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MapPin, Phone, Clock, Navigation, Search } from 'lucide-react';

const Stores = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchLocation, setSearchLocation] = useState('');

  const stores = [
    {
      id: 1,
      name: "PizzaHub - Bandra West",
      address: "Shop No. 12, Linking Road, Bandra West, Mumbai - 400050",
      phone: "+91 98765 43210",
      hours: "10:00 AM - 11:30 PM",
      isOpen: true,
      deliveryTime: "20-25 mins"
    },
    {
      id: 2,
      name: "PizzaHub - Andheri East",
      address: "Unit 5, Chakala Market, Andheri East, Mumbai - 400099",
      phone: "+91 98765 43211",
      hours: "10:00 AM - 12:00 AM",
      isOpen: true,
      deliveryTime: "25-30 mins"
    },
    {
      id: 3,
      name: "PizzaHub - Powai",
      address: "Ground Floor, Hiranandani Gardens, Powai, Mumbai - 400076",
      phone: "+91 98765 43212",
      hours: "11:00 AM - 11:30 PM",
      isOpen: false,
      deliveryTime: "30-35 mins"
    },
    {
      id: 4,
      name: "PizzaHub - Thane West",
      address: "Shop 8, Viviana Mall, Thane West, Thane - 400601",
      phone: "+91 98765 43213",
      hours: "10:30 AM - 11:00 PM",
      isOpen: true,
      deliveryTime: "25-30 mins"
    },
    {
      id: 5,
      name: "PizzaHub - Pune FC Road",
      address: "123 FC Road, Shivajinagar, Pune - 411005",
      phone: "+91 98765 43214",
      hours: "10:00 AM - 11:30 PM",
      isOpen: true,
      deliveryTime: "20-25 mins"
    },
    {
      id: 6,
      name: "PizzaHub - Bangalore Koramangala",
      address: "4th Block, Koramangala, Bangalore - 560034",
      phone: "+91 98765 43215",
      hours: "10:00 AM - 12:00 AM",
      isOpen: true,
      deliveryTime: "25-30 mins"
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
              Find Your Nearest <span className="text-orange-600">PizzaHub</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Locate the nearest PizzaHub store and enjoy fresh, hot pizzas delivered right to your doorstep.
            </p>
            
            {/* Search Section */}
            <div className="max-w-md mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <Input
                  type="text"
                  placeholder="Enter your location or pincode"
                  value={searchLocation}
                  onChange={(e) => setSearchLocation(e.target.value)}
                  className="pl-10 pr-4 py-3 text-lg border-2 border-gray-300 focus:border-orange-500"
                />
              </div>
              <Button className="w-full mt-3 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-3">
                <Navigation className="mr-2" size={20} />
                Find Stores Near Me
              </Button>
            </div>
          </div>

          {/* Stores Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {stores.map((store) => (
              <Card key={store.id} className="hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-slate-800 flex items-center justify-between">
                    <span className="flex items-center">
                      <MapPin className="mr-2 text-orange-600" size={20} />
                      {store.name}
                    </span>
                    <span className={`text-sm px-2 py-1 rounded-full ${
                      store.isOpen 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {store.isOpen ? 'Open' : 'Closed'}
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600 flex items-start">
                    <MapPin className="mr-2 mt-1 text-gray-400" size={16} />
                    {store.address}
                  </p>
                  
                  <p className="text-gray-600 flex items-center">
                    <Phone className="mr-2 text-gray-400" size={16} />
                    {store.phone}
                  </p>
                  
                  <p className="text-gray-600 flex items-center">
                    <Clock className="mr-2 text-gray-400" size={16} />
                    {store.hours}
                  </p>
                  
                  <div className="bg-orange-50 p-3 rounded-lg">
                    <p className="text-orange-800 font-semibold text-center">
                      🚚 Delivery Time: {store.deliveryTime}
                    </p>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button 
                      className="flex-1 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white"
                      disabled={!store.isOpen}
                    >
                      Order Now
                    </Button>
                    <Button variant="outline" className="border-orange-500 text-orange-600 hover:bg-orange-50">
                      Get Directions
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Info Section */}
          <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-8 text-white text-center">
            <h2 className="text-3xl font-black mb-4">🏪 Can't Find Your Location?</h2>
            <p className="text-xl mb-6 opacity-90">
              We're expanding rapidly! Request a new store location and we'll consider it for our next opening.
            </p>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3">
              Request New Location
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Stores;
