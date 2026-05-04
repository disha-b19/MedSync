import { useState } from 'react';
import { Search, Filter, Package, Truck, Clock, Shield, ShoppingCart } from 'lucide-react';
import Cart from '../../components/pharmacy/Cart';

const Pharmacy = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const categories = [
    { id: 'all', name: 'All Medicines' },
    { id: 'prescription', name: 'Prescription' },
    { id: 'otc', name: 'Over the Counter' },
    { id: 'ayurvedic', name: 'Ayurvedic' },
    { id: 'homeopathy', name: 'Homeopathy' },
    { id: 'healthcare', name: 'Healthcare' },
  ];

  const popularMedicines = [
    {
      id: 1,
      name: 'Paracetamol 500mg',
      category: 'otc',
      price: 49,
      manufacturer: 'ABC Pharma',
      description: 'For fever and pain relief',
      prescription: false,
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80',
    },
    {
      id: 2,
      name: 'Amoxicillin 500mg',
      category: 'prescription',
      price: 299,
      manufacturer: 'XYZ Pharma',
      description: 'Antibiotic for bacterial infections',
      prescription: true,
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80',
    },
    {
      id: 3,
      name: 'Vitamin D3 1000IU',
      category: 'healthcare',
      price: 399,
      manufacturer: 'Health Plus',
      description: 'Supports bone health and immunity',
      prescription: false,
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80',
    },
    {
      id: 4,
      name: 'Ashwagandha 500mg',
      category: 'ayurvedic',
      price: 249,
      manufacturer: 'Ayur Life',
      description: 'Natural stress relief and energy booster',
      prescription: false,
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80',
    },
    {
      id: 5,
      name: 'Cetirizine 10mg',
      category: 'otc',
      price: 89,
      manufacturer: 'Medi Plus',
      description: 'For allergy relief',
      prescription: false,
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80',
    },
    {
      id: 6,
      name: 'Arnica Montana 30C',
      category: 'homeopathy',
      price: 199,
      manufacturer: 'Homeo Health',
      description: 'For pain and inflammation',
      prescription: false,
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80',
    },
  ];

  const filteredMedicines = popularMedicines.filter((medicine) => {
    const matchesSearch = medicine.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || medicine.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleAddToCart = (medicine) => {
    const existingItem = cartItems.find(item => item.id === medicine.id);
    if (existingItem) {
      setCartItems(cartItems.map(item =>
        item.id === medicine.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCartItems([...cartItems, { ...medicine, quantity: 1 }]);
    }
  };

  const handleUpdateQuantity = (id, quantity) => {
    if (quantity < 1) return;
    setCartItems(cartItems.map(item =>
      item.id === id
        ? { ...item, quantity }
        : item
    ));
  };

  const handleRemoveItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const cartItemsCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <div className="bg-primary-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Online Pharmacy</h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Order medicines online and get them delivered to your doorstep. Genuine medicines,
              best prices, and fast delivery.
            </p>
          </div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search for medicines..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`px-4 py-2 rounded-lg transition-colors duration-200 whitespace-nowrap ${
                  selectedCategory === category.id
                    ? 'bg-primary-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Cart Button */}
      <div className="fixed bottom-4 right-4 z-40">
        <button
          onClick={() => setShowCart(true)}
          className="bg-primary-600 text-white p-4 rounded-full shadow-lg hover:bg-primary-700 transition-colors duration-200"
        >
          <div className="relative">
            <ShoppingCart className="h-6 w-6" />
            {cartItemsCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cartItemsCount}
              </span>
            )}
          </div>
        </button>
      </div>

      {/* Medicines Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMedicines.map((medicine) => (
            <div key={medicine.id} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{medicine.name}</h3>
                  <p className="text-gray-600 mt-1">{medicine.description}</p>
                  <p className="text-sm text-gray-500 mt-1">By {medicine.manufacturer}</p>
                </div>
                <Package className="h-8 w-8 text-primary-600" />
              </div>
              {medicine.prescription && (
                <div className="bg-yellow-50 text-yellow-800 px-3 py-1 rounded-full text-sm inline-block mb-4">
                  Prescription Required
                </div>
              )}
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-primary-600">₹{medicine.price}</span>
                <button
                  onClick={() => handleAddToCart(medicine)}
                  className="btn btn-primary"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Pharmacy?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We ensure the best quality and service for all your healthcare needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary-100 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Genuine Medicines</h3>
              <p className="text-gray-600">
                100% authentic medicines from authorized dealers
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary-100 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
              <p className="text-gray-600">
                Same day delivery for urgent medicines
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary-100 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 Service</h3>
              <p className="text-gray-600">
                Order anytime, we're always here to help
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary-100 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
                <Package className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Easy Returns</h3>
              <p className="text-gray-600">
                Hassle-free returns for damaged products
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Cart Modal */}
      {showCart && (
        <Cart
          items={cartItems}
          onClose={() => setShowCart(false)}
          onUpdateQuantity={handleUpdateQuantity}
          onRemoveItem={handleRemoveItem}
        />
      )}
    </div>
  );
};

export default Pharmacy; 