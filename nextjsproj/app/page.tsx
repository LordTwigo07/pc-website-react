import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const phones = [
    {
      id: 1,
      name: "iPhone 15 Pro",
      price: 999,
      image: "/iphone15.jpg",
      description: "Latest iPhone with A17 Pro chip and titanium design"
    },
    {
      id: 2,
      name: "Samsung S24 Ultra",
      price: 1199,
      image: "/s24ultra.jpg",
      description: "Premium Android flagship with advanced AI features"
    },
    {
      id: 3,
      name: "Google Pixel 8",
      price: 799,
      image: "/pixel8.jpg",
      description: "Outstanding camera capabilities with Google AI"
    },
    {
      id: 4,
      name: "OnePlus 12",
      price: 899,
      image: "/oneplus12.jpg",
      description: "Powerful performance with fast charging"
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <nav className="p-4 border-b dark:border-gray-800">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold dark:text-white">PhoneStore</h1>
          <div className="flex gap-6">
            <Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link>
            <Link href="/phones" className="text-blue-600 hover:text-blue-800">All Phones</Link>
            <Link href="/contact" className="text-blue-600 hover:text-blue-800">Contact</Link>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto p-8">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 dark:text-white">
            Find Your Perfect Phone
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Discover the latest smartphones at competitive prices
          </p>
        </section>

        {/* Featured Phones */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 dark:text-white">Featured Phones</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {phones.map((phone) => (
              <div key={phone.id} className="border rounded-lg overflow-hidden dark:border-gray-700">
                <div className="aspect-square relative">
                  <div className="bg-gray-200 dark:bg-gray-800 w-full h-full flex items-center justify-center">
                    {/* Replace with actual phone images */}
                    <span className="text-gray-500">Phone Image</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold dark:text-white">{phone.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">{phone.description}</p>
                  <p className="text-xl font-bold mt-2 dark:text-white">${phone.price}</p>
                  <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8">
          <h2 className="text-2xl font-semibold mb-6 dark:text-white">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <h3 className="font-semibold mb-2 dark:text-white">Free Shipping</h3>
              <p className="text-gray-600 dark:text-gray-300">On all orders over $500</p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold mb-2 dark:text-white">Warranty</h3>
              <p className="text-gray-600 dark:text-gray-300">1 year manufacturer warranty</p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold mb-2 dark:text-white">24/7 Support</h3>
              <p className="text-gray-600 dark:text-gray-300">Expert assistance anytime</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t dark:border-gray-800 mt-16">
        <div className="max-w-6xl mx-auto px-4 py-6 text-center text-gray-600 dark:text-gray-300">
          © 2024 PhoneStore. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
