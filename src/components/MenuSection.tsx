
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Plus, Star, Heart } from 'lucide-react';

const menuData = {
  pizzas: [
    {
      id: 1,
      name: "Margherita",
      description: "Classic delight with 100% real mozzarella cheese, fresh basil and oregano",
      price: 299,
      originalPrice: 399,
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=300&h=200&fit=crop",
      rating: 4.5,
      category: "Veg",
      isVeg: true,
      isBestseller: true
    },
    {
      id: 2,
      name: "Pepperoni",
      description: "American classic with pepperoni, cheese and signature pizza sauce",
      price: 449,
      originalPrice: 549,
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=300&h=200&fit=crop",
      rating: 4.7,
      category: "Non-Veg",
      isVeg: false,
      isBestseller: false
    },
    {
      id: 3,
      name: "Veggie Supreme",
      description: "Loaded with fresh vegetables, capsicum, onions, tomatoes and cheese",
      price: 399,
      originalPrice: 499,
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=300&h=200&fit=crop",
      rating: 4.3,
      category: "Veg",
      isVeg: true,
      isBestseller: false
    },
    {
      id: 4,
      name: "BBQ Chicken",
      description: "Grilled chicken with BBQ sauce, onions and cheese",
      price: 499,
      originalPrice: 599,
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=300&h=200&fit=crop",
      rating: 4.6,
      category: "Non-Veg",
      isVeg: false,
      isBestseller: true
    },
    {
      id: 5,
      name: "Farmhouse",
      description: "Delightful combination of onion, capsicum, tomato & grilled mushroom",
      price: 349,
      originalPrice: 449,
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=300&h=200&fit=crop",
      rating: 4.4,
      category: "Veg",
      isVeg: true,
      isBestseller: false
    },
    {
      id: 6,
      name: "Chicken Dominator",
      description: "Loaded with double pepper barbecue chicken, peri-peri chicken, chicken tikka & grilled chicken rashers",
      price: 599,
      originalPrice: 699,
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=300&h=200&fit=crop",
      rating: 4.8,
      category: "Non-Veg",
      isVeg: false,
      isBestseller: true
    }
  ],
  sides: [
    {
      id: 7,
      name: "Garlic Breadsticks",
      description: "Freshly baked garlic breadsticks with herbs",
      price: 99,
      originalPrice: 129,
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=300&h=200&fit=crop",
      rating: 4.2,
      category: "Sides",
      isVeg: true,
      isBestseller: false
    },
    {
      id: 8,
      name: "Chicken Wings",
      description: "Spicy chicken wings with dip",
      price: 199,
      originalPrice: 249,
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=300&h=200&fit=crop",
      rating: 4.5,
      category: "Sides",
      isVeg: false,
      isBestseller: true
    }
  ],
  beverages: [
    {
      id: 10,
      name: "Coca Cola",
      description: "Chilled Coca Cola 200ml",
      price: 59,
      originalPrice: 69,
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=300&h=200&fit=crop",
      rating: 4.0,
      category: "Beverages",
      isVeg: true,
      isBestseller: false
    }
  ]
};

interface MenuSectionProps {
  onAddToCart: (item: any) => void;
}

export const MenuSection = ({ onAddToCart }: MenuSectionProps) => {
  const [activeTab, setActiveTab] = useState("pizzas");

  const renderMenuItems = (items: any[]) => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item) => (
          <Card key={item.id} className="hover:shadow-2xl transition-all duration-300 border-0 shadow-lg bg-white rounded-xl overflow-hidden group">
            <CardHeader className="p-0 relative">
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-2">
                  <div className={`flex items-center px-2 py-1 rounded-full text-xs font-bold ${item.isVeg ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>
                    <div className={`w-2 h-2 rounded-full mr-1 ${item.isVeg ? 'bg-white' : 'bg-white'}`}></div>
                    {item.isVeg ? "VEG" : "NON-VEG"}
                  </div>
                  {item.isBestseller && (
                    <Badge className="bg-orange-500 text-white text-xs px-2 py-1">
                      BESTSELLER
                    </Badge>
                  )}
                </div>
                {/* Heart Icon */}
                <div className="absolute top-3 right-3">
                  <Button variant="ghost" size="sm" className="bg-white/80 hover:bg-white p-2 rounded-full">
                    <Heart size={16} className="text-gray-600" />
                  </Button>
                </div>
                {/* Rating */}
                <div className="absolute bottom-3 right-3 bg-green-600 text-white px-2 py-1 rounded-lg flex items-center gap-1 text-sm font-bold">
                  <Star className="w-3 h-3 fill-white" />
                  {item.rating}
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="p-4">
              <CardTitle className="text-xl font-bold text-gray-800 mb-2 line-clamp-1">{item.name}</CardTitle>
              <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">{item.description}</p>
              
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-gray-800">₹{item.price}</span>
                  {item.originalPrice && (
                    <span className="text-lg text-gray-400 line-through">₹{item.originalPrice}</span>
                  )}
                </div>
                {item.originalPrice && (
                  <Badge variant="destructive" className="bg-green-100 text-green-800 text-xs">
                    SAVE ₹{item.originalPrice - item.price}
                  </Badge>
                )}
              </div>
            </CardContent>
            
            <CardFooter className="p-4 pt-0">
              <Button 
                onClick={() => onAddToCart(item)}
                className="w-full bg-blue-900 hover:bg-blue-800 text-white font-bold py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Plus className="w-5 h-5 mr-2" />
                ADD TO CART
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    );
  };

  return (
    <section id="menu" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-gray-800 mb-6">Our Menu</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Choose from our delicious range of pizzas, sides & beverages made with fresh ingredients</p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full max-w-lg mx-auto grid-cols-3 mb-12 h-14 bg-white shadow-lg rounded-xl p-2">
            <TabsTrigger value="pizzas" className="text-lg font-bold data-[state=active]:bg-blue-900 data-[state=active]:text-white rounded-lg transition-all duration-300">
              PIZZAS
            </TabsTrigger>
            <TabsTrigger value="sides" className="text-lg font-bold data-[state=active]:bg-blue-900 data-[state=active]:text-white rounded-lg transition-all duration-300">
              SIDES
            </TabsTrigger>
            <TabsTrigger value="beverages" className="text-lg font-bold data-[state=active]:bg-blue-900 data-[state=active]:text-white rounded-lg transition-all duration-300">
              BEVERAGES
            </TabsTrigger>
          </TabsList>

          <TabsContent value="pizzas" className="space-y-8">
            {renderMenuItems(menuData.pizzas)}
          </TabsContent>

          <TabsContent value="sides" className="space-y-8">
            {renderMenuItems(menuData.sides)}
          </TabsContent>

          <TabsContent value="beverages" className="space-y-8">
            {renderMenuItems(menuData.beverages)}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};
