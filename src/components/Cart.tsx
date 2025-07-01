
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

interface CartItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  quantity: number;
  isVeg: boolean;
}

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onRemoveItem: (itemId: number) => void;
  onUpdateQuantity: (itemId: number, quantity: number) => void;
  totalPrice: number;
  onCheckout: () => void;
}

export const Cart = ({ isOpen, onClose, items, onRemoveItem, onUpdateQuantity, totalPrice, onCheckout }: CartProps) => {
  const deliveryFee = 29;
  const gstRate = 0.05;
  const gstAmount = Math.round(totalPrice * gstRate);
  const finalTotal = totalPrice + deliveryFee + gstAmount;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-lg max-h-[90vh] overflow-hidden flex flex-col">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2">
            <ShoppingBag className="w-5 h-5" />
            <span>Your Cart ({items.length} items)</span>
          </DialogTitle>
        </DialogHeader>

        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12">
            <div className="text-6xl mb-4">🛒</div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Your cart is empty</h3>
            <p className="text-gray-500 text-center mb-6">Add some delicious pizzas to get started!</p>
            <Button onClick={onClose} className="bg-red-600 hover:bg-red-700">
              Continue Shopping
            </Button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto py-4 space-y-4">
              {items.map((item) => (
                <Card key={item.id} className="border border-gray-200">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex items-center space-x-2 flex-1">
                        <div className={`w-3 h-3 rounded-full ${item.isVeg ? 'bg-green-500' : 'bg-red-500'}`}></div>
                        <h4 className="font-semibold text-gray-800">{item.name}</h4>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => onRemoveItem(item.id)}
                        className="text-gray-400 hover:text-red-500 p-1"
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-3">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 p-0"
                        >
                          <Minus className="w-3 h-3" />
                        </Button>
                        <span className="font-semibold text-lg w-8 text-center">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 p-0"
                        >
                          <Plus className="w-3 h-3" />
                        </Button>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-lg text-green-600">₹{item.price * item.quantity}</p>
                        <p className="text-sm text-gray-500">₹{item.price} each</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="border-t pt-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span>Subtotal</span>
                <span>₹{totalPrice}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Delivery Fee</span>
                <span>₹{deliveryFee}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>GST (5%)</span>
                <span>₹{gstAmount}</span>
              </div>
              <div className="flex justify-between font-bold text-lg border-t pt-2">
                <span>Total</span>
                <span>₹{finalTotal}</span>
              </div>
              
              <Button 
                onClick={onCheckout}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 mt-4 rounded-lg"
              >
                Proceed to Checkout - ₹{finalTotal}
              </Button>
              
              <p className="text-xs text-gray-500 text-center mt-2">
                Delivery in 30 minutes or less*
              </p>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};
