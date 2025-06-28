
import { Facebook, Twitter, Instagram, Youtube, Phone, Mail, MapPin, Smartphone } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-red-600 py-8">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">Stay Updated with Latest Offers!</h3>
          <div className="flex flex-col md:flex-row max-w-md mx-auto gap-4">
            <input 
              type="email" 
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-blue-900 hover:bg-blue-800 px-8 py-3 rounded-lg font-bold transition-colors">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="bg-white text-blue-900 px-4 py-2 rounded-lg font-bold text-2xl">
                  <span className="text-red-500">D</span>omino's
                </div>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                India's favourite pizza delivery company. Hot & fresh pizza delivered to your door in 30 minutes or free.*
              </p>
              <div className="flex space-x-4">
                <a href="#" className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="#" className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors">
                  <Twitter size={20} />
                </a>
                <a href="#" className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="#" className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors">
                  <Youtube size={20} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                <li><a href="#menu" className="text-gray-300 hover:text-white transition-colors font-medium">Menu</a></li>
                <li><a href="#deals" className="text-gray-300 hover:text-white transition-colors font-medium">Deals & Offers</a></li>
                <li><a href="#stores" className="text-gray-300 hover:text-white transition-colors font-medium">Store Locator</a></li>
                <li><a href="#nutrition" className="text-gray-300 hover:text-white transition-colors font-medium">Nutritional Info</a></li>
                <li><a href="#careers" className="text-gray-300 hover:text-white transition-colors font-medium">Careers</a></li>
                <li><a href="#franchise" className="text-gray-300 hover:text-white transition-colors font-medium">Franchise</a></li>
              </ul>
            </div>

            {/* Customer Service */}
            <div>
              <h3 className="text-xl font-bold mb-6">Customer Care</h3>
              <ul className="space-y-3">
                <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors font-medium">Contact Us</a></li>
                <li><a href="#feedback" className="text-gray-300 hover:text-white transition-colors font-medium">Feedback</a></li>
                <li><a href="#faq" className="text-gray-300 hover:text-white transition-colors font-medium">FAQ</a></li>
                <li><a href="#terms" className="text-gray-300 hover:text-white transition-colors font-medium">Terms & Conditions</a></li>
                <li><a href="#privacy" className="text-gray-300 hover:text-white transition-colors font-medium">Privacy Policy</a></li>
                <li><a href="#refund" className="text-gray-300 hover:text-white transition-colors font-medium">Refund Policy</a></li>
              </ul>
            </div>

            {/* Contact & Apps */}
            <div>
              <h3 className="text-xl font-bold mb-6">Get In Touch</h3>
              <div className="space-y-4 mb-6">
                <div className="flex items-center space-x-3">
                  <Phone size={18} className="text-red-500" />
                  <span className="text-gray-300 font-medium">1800-111-123</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail size={18} className="text-red-500" />
                  <span className="text-gray-300 font-medium">care@dominos.co.in</span>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin size={18} className="text-red-500 mt-1" />
                  <span className="text-gray-300 font-medium leading-relaxed">
                    Domino's Pizza India Ltd.<br />
                    Mumbai, Maharashtra<br />
                    India
                  </span>
                </div>
              </div>
              
              <div>
                <h4 className="font-bold text-lg mb-3">Download Our App</h4>
                <div className="flex flex-col space-y-2">
                  <button className="bg-black hover:bg-gray-800 px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors">
                    <Smartphone size={20} />
                    <span className="text-sm font-medium">Download for iOS</span>
                  </button>
                  <button className="bg-black hover:bg-gray-800 px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors">
                    <Smartphone size={20} />
                    <span className="text-sm font-medium">Download for Android</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-blue-800 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm mb-4 md:mb-0">
              © 2024 Domino's Pizza India Private Limited. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#terms" className="text-gray-300 hover:text-white text-sm transition-colors">Terms of Use</a>
              <a href="#privacy" className="text-gray-300 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#sitemap" className="text-gray-300 hover:text-white text-sm transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
