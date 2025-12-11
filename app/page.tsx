"use client";

import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState(0);

  const deliveryOptions = [
    {
      title: "Next Day UK",
      desc: "Order before 2pm for next business day delivery anywhere in the UK",
      price: "From £4.99",
      icon: "🚀"
    },
    {
      title: "Europe Express",
      desc: "2-3 business days to major European cities",
      price: "From £9.99",
      icon: "✈️"
    },
    {
      title: "Worldwide",
      desc: "5-7 business days international shipping",
      price: "From £14.99",
      icon: "🌍"
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero - Speed Focused */}
      <section className="bg-lime-600 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 bg-lime-700 px-3 py-1 rounded-full text-sm mb-4">
                <span className="animate-pulse w-2 h-2 bg-white rounded-full"></span>
                Next Day Delivery Available
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                The UK&apos;s Fastest<br />Wholesale Tech
              </h1>
              <p className="text-lime-100 text-lg mb-6">
                From our London warehouse to your door. Order by 2pm,
                receive tomorrow. Premium electronics at trade prices.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/products" className="px-6 py-3 bg-white text-lime-700 font-semibold rounded-lg hover:bg-lime-50">
                  Shop Now
                </Link>
                <Link href="/contact" className="px-6 py-3 bg-lime-700 text-white font-semibold rounded-lg hover:bg-lime-800">
                  Trade Account
                </Link>
              </div>
            </div>
            <div className="flex-1 hidden md:block">
              <div className="bg-lime-700 rounded-2xl p-6">
                <div className="text-center mb-4">
                  <div className="text-5xl mb-2">⚡</div>
                  <div className="text-xl font-bold">Lightning Fast Shipping</div>
                </div>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="bg-lime-600 rounded-lg p-3">
                    <div className="text-2xl font-bold">24h</div>
                    <div className="text-xs text-lime-200">UK Delivery</div>
                  </div>
                  <div className="bg-lime-600 rounded-lg p-3">
                    <div className="text-2xl font-bold">3,100+</div>
                    <div className="text-xs text-lime-200">Products</div>
                  </div>
                  <div className="bg-lime-600 rounded-lg p-3">
                    <div className="text-2xl font-bold">5yr</div>
                    <div className="text-xs text-lime-200">Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Options Tabs */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Delivery Options</h2>

          {/* Tab Headers */}
          <div className="flex border-b border-gray-200 mb-8">
            {deliveryOptions.map((option, i) => (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                className={`flex-1 py-4 text-center font-medium transition-colors ${
                  activeTab === i
                    ? "border-b-2 border-lime-600 text-lime-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                <span className="mr-2">{option.icon}</span>
                {option.title}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="text-6xl">{deliveryOptions[activeTab].icon}</div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{deliveryOptions[activeTab].title}</h3>
                <p className="text-gray-600 mb-4">{deliveryOptions[activeTab].desc}</p>
                <div className="text-2xl font-bold text-lime-600">{deliveryOptions[activeTab].price}</div>
              </div>
              <Link href="/products" className="px-6 py-3 bg-lime-600 text-white font-semibold rounded-lg hover:bg-lime-500">
                Order Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories - Horizontal Scroll on Mobile */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Browse Categories</h2>
            <Link href="/products" className="text-lime-600 font-medium hover:text-lime-700">
              View All →
            </Link>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-4 md:grid md:grid-cols-6 md:overflow-visible">
            {[
              { icon: "🔊", name: "Speakers", items: "480" },
              { icon: "🎧", name: "Headphones", items: "390" },
              { icon: "🔋", name: "Power Banks", items: "310" },
              { icon: "⌚", name: "Smartwatches", items: "270" },
              { icon: "📱", name: "Phone Cases", items: "850" },
              { icon: "🔌", name: "Chargers", items: "420" },
            ].map((cat, i) => (
              <Link
                key={i}
                href={`/products#${cat.name.toLowerCase().replace(' ', '-')}`}
                className="flex-shrink-0 w-32 md:w-auto p-4 bg-gray-50 rounded-xl text-center hover:bg-lime-50 hover:ring-2 hover:ring-lime-200 transition-all"
              >
                <div className="text-3xl mb-2">{cat.icon}</div>
                <div className="font-medium text-gray-900 text-sm">{cat.name}</div>
                <div className="text-xs text-gray-500">{cat.items} items</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Flywik - Speed Benefits */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center mb-12">The Flywik Advantage</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                icon: "⚡",
                title: "Same Day Dispatch",
                desc: "Orders before 2pm ship same day from our London warehouse"
              },
              {
                icon: "💷",
                title: "Pay on Delivery",
                desc: "UK orders can pay when goods arrive. No risk ordering"
              },
              {
                icon: "📦",
                title: "Track Everything",
                desc: "Real-time tracking on all shipments with SMS updates"
              },
              {
                icon: "🔄",
                title: "Easy Returns",
                desc: "14-day hassle-free returns on all products"
              },
            ].map((f, i) => (
              <div key={i} className="text-center p-6">
                <div className="text-4xl mb-4">{f.icon}</div>
                <h3 className="font-semibold mb-2">{f.title}</h3>
                <p className="text-gray-400 text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trade Account CTA */}
      <section className="py-16 bg-lime-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Open a Trade Account</h2>
          <p className="text-gray-600 mb-8">
            Get exclusive pricing, extended payment terms, and priority shipping.
            Perfect for retailers, resellers, and business buyers.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="px-8 py-3 bg-lime-600 text-white font-semibold rounded-lg hover:bg-lime-500">
              Apply Now
            </Link>
            <a href="tel:+442071234567" className="px-8 py-3 border-2 border-lime-600 text-lime-600 font-semibold rounded-lg hover:bg-lime-100">
              Call Us: 020 7123 4567
            </a>
          </div>
          <p className="text-sm text-gray-500 mt-6">
            Or email info@flywik.co.uk | Mon-Fri 8am-6pm GMT
          </p>
        </div>
      </section>
    </div>
  );
}
