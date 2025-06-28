
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Plus, Star, Heart, Clock, Flame, Award } from 'lucide-react';

const menuData = {
  pizzas: [
    {
      id: 1,
      name: "Margherita Classic",
      description: "Fresh mozzarella, basil, tomato sauce on our signature thin crust",
      price: 199,
      originalPrice: 299,
      image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=300&fit=crop",
      rating: 4.8,
      category: "Veg",
      isVeg: true,
      isBestseller: true,
      cookingTime: "15-20 min"
    },
    {
      id: 2,
      name: "Pepperoni Supreme",
      description: "Premium pepperoni, mozzarella cheese, signature pizza sauce",
      price: 349,
      originalPrice: 449,
      image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&h=300&fit=crop",
      rating: 4.7,
      category: "Non-Veg",
      isVeg: false,
      isBestseller: true,
      cookingTime: "18-22 min"
    },
    {
      id: 3,
      name: "Veggie Paradise",
      description: "Bell peppers, mushrooms, onions, tomatoes, olives & cheese",
      price: 299,
      originalPrice: 399,
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop",
      rating: 4.6,
      category: "Veg",
      isVeg: true,
      isBestseller: false,
      cookingTime: "16-20 min"
    },
    {
      id: 4,
      name: "BBQ Chicken Deluxe",
      description: "Smoky BBQ chicken, caramelized onions, bell peppers",
      price: 399,
      originalPrice: 499,
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=300&fit=crop",
      rating: 4.9,
      category: "Non-Veg",
      isVeg: false,
      isBestseller: true,
      cookingTime: "20-25 min"
    },
    {
      id: 5,
      name: "Farmhouse Special",
      description: "Grilled mushrooms, capsicum, tomato, onions with herbs",
      price: 279,
      originalPrice: 349,
      image: "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=400&h=300&fit=crop",
      rating: 4.5,
      category: "Veg",
      isVeg: true,
      isBestseller: false,
      cookingTime: "15-18 min"
    },
    {
      id: 6,
      name: "Chicken Tikka Masala",
      description: "Tandoori chicken tikka, onions, peppers, masala sauce",
      price: 449,
      originalPrice: 549,
      image: "https://images.unsplash.com/photo-1594007654729-407eedc4be65?w=400&h=300&fit=crop",
      rating: 4.8,
      category: "Non-Veg",
      isVeg: false,
      isBestseller: true,
      cookingTime: "22-25 min"
    }
  ],
  sides: [
    {
      id: 7,
      name: "Cheesy Garlic Breadsticks",
      description: "Oven-baked breadsticks with garlic butter & melted cheese",
      price: 129,
      originalPrice: 159,
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=300&fit=crop",
      rating: 4.4,
      category: "Sides",
      isVeg: true,
      isBestseller: true,
      cookingTime: "8-10 min"
    },
    {
      id: 8,
      name: "Buffalo Chicken Wings",
      description: "Spicy buffalo wings with ranch dip & celery sticks",
      price: 249,
      originalPrice: 299,
      image: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=400&h=300&fit=crop",
      rating: 4.7,
      category: "Sides",
      isVeg: false,
      isBestseller: true,
      cookingTime: "12-15 min"
    },
    {
      id: 9,
      name: "Loaded Potato Wedges",
      description: "Crispy wedges topped with cheese, bacon bits & sour cream",
      price: 179,
      originalPrice: 219,
      image: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?w=400&h=300&fit=crop",
      rating: 4.3,
      category: "Sides",
      isVeg: false,
      isBestseller: false,
      cookingTime: "10-12 min"
    },
    {
      id: 10,
      name: "Mozzarella Sticks",
      description: "Golden fried mozzarella sticks with marinara sauce",
      price: 199,
      originalPrice: 249,
      image: "https://images.unsplash.com/photo-1531749668029-2db88e4276c7?w=400&h=300&fit=crop",
      rating: 4.6,
      category: "Sides",
      isVeg: true,
      isBestseller: false,
      cookingTime: "8-10 min"
    }
  ],
  beverages: [
    {
      id: 11,
      name: "Classic Coca Cola",
      description: "Chilled Coca Cola 300ml bottle",
      price: 49,
      originalPrice: 59,
      image: "https://images.unsplash.com/photo-1581636625402-29b2a704ef13?w=400&h=300&fit=crop",
      rating: 4.2,
      category: "Beverages",
      isVeg: true,
      isBestseller: true,
      cookingTime: "Ready"
    },
    {
      id: 12,
      name: "Fresh Lemonade",
      description: "Handcrafted lemonade with mint and ice",
      price: 79,
      originalPrice: 99,
      image: "https://images.unsplash.com/photo-1556881287-094b6f1bf0c7?w=400&h=300&fit=crop",
      rating: 4.5,
      category: "Beverages",
      isVeg: true,
      isBestseller: false,
      cookingTime: "2-3 min"
    },
    {
      id: 13,
      name: "Iced Coffee Delight",
      description: "Cold brew coffee with whipped cream & chocolate drizzle",
      price: 129,
      originalPrice: 159,
      image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=300&fit=crop",
      rating: 4.4,
      category: "Beverages",
      isVeg: true,
      isBestseller: true,
      cookingTime: "3-5 min"
    },
    {
      id: 14,
      name: "Mango Smoothie",
      description: "Fresh mango smoothie with yogurt and honey",
      price: 149,
      originalPrice: 179,
      image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=400&h=300&fit=crop",
      rating: 4.7,
      category: "Beverages",
      isVeg: true,
      isBestseller: false,
      cookingTime: "2-3 min"
    }
  ]
};

interface MenuSectionProps {
  onAddToCart: (item: any) => void;
}

export const MenuSection = ({ onAddToCart }: MenuSectionProps) => {
  const [activeTab, setActiveTab] = useState("pizzas");
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFavorite = (itemId: number) => {
    setFavorites(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  const handleAddToCart = (item: any) => {
    onAddToCart(item);
    // Enhanced feedback with confetti effect
    const button = document.getElementById(`add-to-cart-${item.id}`);
    if (button) {
      const originalText = button.textContent;
      button.textContent = '✅ ADDED!';
      button.style.transform = 'scale(1.1)';
      button.style.background = 'linear-gradient(45deg, #10b981, #059669)';
      setTimeout(() => {
        button.textContent = originalText;
        button.style.transform = '';
        button.style.background = '';
      }, 2000);
    }
  };

  const renderMenuItems = (items: any[]) => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item, index) => (
          <Card 
            key={item.id} 
            className="hover:shadow-2xl transition-all duration-500 border-0 shadow-xl bg-white rounded-3xl overflow-hidden group transform hover:scale-105 hover:-rotate-1"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <CardHeader className="p-0 relative">
              {/* Enhanced Image Container */}
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-700"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Enhanced Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  <div className={`flex items-center px-3 py-2 rounded-full text-sm font-black shadow-lg animate-pulse ${item.isVeg ? 'bg-gradient-to-r from-green-400 to-green-600 text-white' : 'bg-gradient-to-r from-red-400 to-red-600 text-white'}`}>
                    <div className={`w-3 h-3 rounded-full mr-2 ${item.isVeg ? 'bg-white' : 'bg-white'} animate-pulse`}></div>
                    {item.isVeg ? "🌱 VEG" : "🍖 NON-VEG"}
                  </div>
                  {item.isBestseller && (
                    <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-sm px-3 py-2 font-black shadow-lg animate-bounce">
                      <Award size={14} className="mr-1" />
                      BESTSELLER
                    </Badge>
                  )}
                </div>
                
                {/* Enhanced Heart Icon */}
                <div className="absolute top-4 right-4">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transform hover:scale-110 transition-all duration-300"
                    onClick={() => toggleFavorite(item.id)}
                  >
                    <Heart 
                      size={18} 
                      className={`${favorites.includes(item.id) ? 'text-red-500 fill-red-500 animate-pulse' : 'text-gray-600'} transition-all duration-300`} 
                    />
                  </Button>
                </div>
                
                {/* Enhanced Rating & Cooking Time */}
                <div className="absolute bottom-4 right-4 flex flex-col gap-2">
                  <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-3 py-2 rounded-xl flex items-center gap-2 text-sm font-bold shadow-lg">
                    <Star className="w-4 h-4 fill-white" />
                    {item.rating}
                  </div>
                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-3 py-2 rounded-xl flex items-center gap-2 text-xs font-bold shadow-lg">
                    <Clock className="w-3 h-3" />
                    {item.cookingTime}
                  </div>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="p-6">
              <CardTitle className="text-2xl font-black text-gray-800 mb-3 line-clamp-1 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                {item.name}
              </CardTitle>
              <p className="text-gray-600 text-base mb-6 line-clamp-2 leading-relaxed font-medium">
                {item.description}
              </p>
              
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <span className="text-3xl font-black bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                    ₹{item.price}
                  </span>
                  {item.originalPrice && (
                    <span className="text-xl text-gray-400 line-through font-medium">₹{item.originalPrice}</span>
                  )}
                </div>
                {item.originalPrice && (
                  <Badge className="bg-gradient-to-r from-red-100 to-pink-100 text-red-700 text-sm px-3 py-1 font-bold animate-pulse">
                    <Flame size={14} className="mr-1" />
                    SAVE ₹{item.originalPrice - item.price}
                  </Badge>
                )}
              </div>
            </CardContent>
            
            <CardFooter className="p-6 pt-0">
              <Button 
                id={`add-to-cart-${item.id}`}
                onClick={() => handleAddToCart(item)}
                className="w-full bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 hover:from-purple-700 hover:via-pink-700 hover:to-red-700 text-white font-black py-4 text-lg rounded-2xl transition-all duration-500 shadow-2xl hover:shadow-purple-500/25 transform hover:scale-105"
              >
                <Plus className="w-6 h-6 mr-3 animate-bounce" />
                ADD TO CART
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    );
  };

  return (
    <section id="menu" className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-6xl font-black bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-clip-text text-transparent mb-8">
            Our Delicious Menu
          </h2>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium">
            Discover our mouth-watering collection of pizzas, sides & beverages crafted with the finest ingredients and loads of love! 🍕❤️
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 mb-16 h-20 bg-white shadow-2xl rounded-3xl p-3 border-4 border-gradient-to-r from-purple-200 to-pink-200">
            <TabsTrigger 
              value="pizzas" 
              className="text-xl font-black data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-pink-600 data-[state=active]:text-white rounded-2xl transition-all duration-500 transform hover:scale-105"
            >
              🍕 PIZZAS ({menuData.pizzas.length})
            </TabsTrigger>
            <TabsTrigger 
              value="sides" 
              className="text-xl font-black data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-red-600 data-[state=active]:text-white rounded-2xl transition-all duration-500 transform hover:scale-105"
            >
              🍟 SIDES ({menuData.sides.length})
            </TabsTrigger>
            <TabsTrigger 
              value="beverages" 
              className="text-xl font-black data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-purple-600 data-[state=active]:text-white rounded-2xl transition-all duration-500 transform hover:scale-105"
            >
              🥤 DRINKS ({menuData.beverages.length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="pizzas" className="space-y-8 animate-fade-in">
            <div className="text-center mb-8">
              <h3 className="text-4xl font-black bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent mb-4">
                🍕 Signature Pizzas
              </h3>
              <p className="text-xl text-gray-600 font-medium">Hand-tossed perfection with premium toppings</p>
            </div>
            {renderMenuItems(menuData.pizzas)}
          </TabsContent>

          <TabsContent value="sides" className="space-y-8 animate-fade-in">
            <div className="text-center mb-8">
              <h3 className="text-4xl font-black bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-4">
                🍟 Irresistible Sides
              </h3>
              <p className="text-xl text-gray-600 font-medium">Perfect companions for your pizza feast</p>
            </div>
            {renderMenuItems(menuData.sides)}
          </TabsContent>

          <TabsContent value="beverages" className="space-y-8 animate-fade-in">
            <div className="text-center mb-8">
              <h3 className="text-4xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                🥤 Refreshing Beverages
              </h3>
              <p className="text-xl text-gray-600 font-medium">Cool drinks to complement your meal perfectly</p>
            </div>
            {renderMenuItems(menuData.beverages)}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};
