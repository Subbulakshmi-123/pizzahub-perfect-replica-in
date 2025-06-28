
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Plus, Star } from 'lucide-react';

const menuData = {
  pizzas: [
    {
      id: 1,
      name: "Margherita",
      description: "Classic delight with 100% real mozzarella cheese",
      price: 299,
      image: "🍕",
      rating: 4.5,
      category: "Veg",
      isVeg: true
    },
    {
      id: 2,
      name: "Pepperoni",
      description: "American classic with pepperoni & cheese",
      price: 449,
      image: "🍕",
      rating: 4.7,
      category: "Non-Veg",
      isVeg: false
    },
    {
      id: 3,
      name: "Veggie Supreme",
      description: "Loaded with fresh vegetables and cheese",
      price: 399,
      image: "🍕",
      rating: 4.3,
      category: "Veg",
      isVeg: true
    },
    {
      id: 4,
      name: "BBQ Chicken",
      description: "Grilled chicken with BBQ sauce and cheese",
      price: 499,
      image: "🍕",
      rating: 4.6,
      category: "Non-Veg",
      isVeg: false
    },
    {
      id: 5,
      name: "Farmhouse",
      description: "Delightful combination of onion, capsicum, tomato & grilled mushroom",
      price: 349,
      image: "🍕",
      rating: 4.4,
      category: "Veg",
      isVeg: true
    },
    {
      id: 6,
      name: "Chicken Dominator",
      description: "Loaded with double pepper barbecue chicken, peri-peri chicken, chicken tikka & grilled chicken rashers",
      price: 599,
      image: "🍕",
      rating: 4.8,
      category: "Non-Veg",
      isVeg: false
    }
  ],
  sides: [
    {
      id: 7,
      name: "Garlic Bread",
      description: "Freshly baked garlic bread",
      price: 99,
      image: "🥖",
      rating: 4.2,
      category: "Sides",
      isVeg: true
    },
    {
      id: 8,
      name: "Chicken Wings",
      description: "Spicy chicken wings with dip",
      price: 199,
      image: "🍗",
      rating: 4.5,
      category: "Sides",
      isVeg: false
    },
    {
      id: 9,
      name: "Cheese Dip",
      description: "Creamy cheese dip",
      price: 49,
      image: "🧀",
      rating: 4.1,
      category: "Sides",
      isVeg: true
    }
  ],
  beverages: [
    {
      id: 10,
      name: "Coca Cola",
      description: "Chilled Coca Cola",
      price: 59,
      image: "🥤",
      rating: 4.0,
      category: "Beverages",
      isVeg: true
    },
    {
      id: 11,
      name: "Fresh Lime",
      description: "Fresh lime water",
      price: 39,
      image: "🍋",
      rating: 4.2,
      category: "Beverages",
      isVeg: true
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <Card key={item.id} className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
            <CardHeader className="pb-4">
              <div className="flex justify-between items-start">
                <div className="flex items-center space-x-2">
                  <div className={`w-3 h-3 rounded-full ${item.isVeg ? 'bg-green-500' : 'bg-red-500'}`}></div>
                  <Badge variant={item.isVeg ? "default" : "destructive"} className="text-xs">
                    {item.isVeg ? "VEG" : "NON-VEG"}
                  </Badge>
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm text-gray-600">{item.rating}</span>
                </div>
              </div>
              <div className="text-6xl text-center my-4">{item.image}</div>
              <CardTitle className="text-lg font-bold text-gray-800">{item.name}</CardTitle>
            </CardHeader>
            <CardContent className="pb-4">
              <p className="text-gray-600 text-sm mb-4">{item.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-green-600">₹{item.price}</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button 
                onClick={() => onAddToCart(item)}
                className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-2 rounded-lg transition-colors duration-300"
              >
                <Plus className="w-4 h-4 mr-2" />
                Add to Cart
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
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Menu</h2>
          <p className="text-xl text-gray-600">Delicious pizzas and more, made fresh just for you</p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
            <TabsTrigger value="pizzas" className="text-sm font-medium">Pizzas</TabsTrigger>
            <TabsTrigger value="sides" className="text-sm font-medium">Sides</TabsTrigger>
            <TabsTrigger value="beverages" className="text-sm font-medium">Beverages</TabsTrigger>
          </TabsList>

          <TabsContent value="pizzas" className="space-y-6">
            {renderMenuItems(menuData.pizzas)}
          </TabsContent>

          <TabsContent value="sides" className="space-y-6">
            {renderMenuItems(menuData.sides)}
          </TabsContent>

          <TabsContent value="beverages" className="space-y-6">
            {renderMenuItems(menuData.beverages)}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};
