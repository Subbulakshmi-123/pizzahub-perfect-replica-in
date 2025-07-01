
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, Users, Award, Pizza, Clock, Truck, Star, MapPin } from 'lucide-react';

const About = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const stats = [
    { icon: Pizza, number: "1M+", label: "Pizzas Delivered" },
    { icon: Users, number: "50K+", label: "Happy Customers" },
    { icon: MapPin, number: "100+", label: "Store Locations" },
    { icon: Award, number: "4.9", label: "Customer Rating" }
  ];

  const values = [
    {
      icon: Heart,
      title: "Made with Love",
      description: "Every pizza is crafted with passion and the finest ingredients, ensuring each bite is a delightful experience."
    },
    {
      icon: Clock,
      title: "Always On Time",
      description: "We pride ourselves on punctual delivery. Your hot, fresh pizza arrives exactly when promised."
    },
    {
      icon: Truck,
      title: "Safe Delivery",
      description: "Our delivery process follows the highest safety standards to ensure your food reaches you safely."
    },
    {
      icon: Star,
      title: "Quality First",
      description: "We never compromise on quality. From ingredients to service, excellence is our standard."
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
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-slate-800 to-slate-900 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-6xl font-black mb-6">
              About <span className="text-orange-400">PizzaHub</span>
            </h1>
            <p className="text-2xl opacity-90 max-w-3xl mx-auto leading-relaxed">
              Since 2020, we've been India's favorite pizza destination, serving happiness one slice at a time with our commitment to quality, taste, and exceptional service.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <stat.icon size={32} />
                  </div>
                  <h3 className="text-4xl font-black text-slate-800 mb-2">{stat.number}</h3>
                  <p className="text-gray-600 font-semibold">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-5xl font-black text-slate-800 mb-6">
                  Our <span className="text-orange-600">Journey</span>
                </h2>
                <div className="space-y-6 text-lg text-gray-700">
                  <p>
                    Founded in 2020 by a group of food enthusiasts, PizzaHub started with a simple dream - to bring authentic, delicious pizzas to every doorstep in India.
                  </p>
                  <p>
                    What began as a small pizzeria in Mumbai has now grown into India's most loved pizza delivery chain, with over 100 locations across major cities.
                  </p>
                  <p>
                    Our success story is built on three pillars: premium ingredients, innovative recipes, and uncompromising commitment to customer satisfaction.
                  </p>
                  <p>
                    Today, we're proud to serve over 50,000 happy customers, delivering more than 1,000 pizzas daily with the same passion we started with.
                  </p>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&h=400&fit=crop" 
                  alt="PizzaHub Kitchen"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-orange-500 to-red-500 text-white p-6 rounded-2xl shadow-xl">
                  <p className="text-2xl font-bold">Since 2020</p>
                  <p className="text-sm">Serving Excellence</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-black text-slate-800 mb-4">
                Our <span className="text-orange-600">Values</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                These core values guide everything we do and help us deliver exceptional experiences to our customers.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="text-center p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <CardContent className="pt-6">
                    <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                      <value.icon size={28} />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-4">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-black text-slate-800 mb-4">
                Meet Our <span className="text-orange-600">Team</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Behind every great pizza is a passionate team dedicated to bringing you the best dining experience.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Rahul Sharma",
                  role: "Founder & CEO",
                  image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face"
                },
                {
                  name: "Priya Patel",
                  role: "Head Chef",
                  image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=300&h=300&fit=crop&crop=face"
                },
                {
                  name: "Arjun Kumar",
                  role: "Operations Director",
                  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
                }
              ].map((member, index) => (
                <Card key={index} className="text-center overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <CardContent className="p-6">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                    />
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">{member.name}</h3>
                    <p className="text-orange-600 font-semibold">{member.role}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-orange-500 to-red-500 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-5xl font-black mb-6">Ready to Taste the Difference?</h2>
            <p className="text-2xl opacity-90 mb-8 max-w-2xl mx-auto">
              Join millions of happy customers who have made PizzaHub their favorite pizza destination.
            </p>
            <Button className="bg-white text-orange-600 hover:bg-gray-100 font-bold text-xl px-12 py-4 rounded-full">
              Order Your First Pizza
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
