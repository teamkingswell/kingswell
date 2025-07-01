"use client";
import { useEffect, useState } from "react";
import { Mail, Twitter, Instagram, Search, Menu } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const [products, setProducts] = useState<any[]>([]);
  const [search, setSearch] = useState("");
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    fetch("/data/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const filteredProducts = products.filter((product) => {
    const query = search.toLowerCase();
    return (
      product.name.toLowerCase().includes(query) ||
      product.id.toLowerCase().includes(query) ||
      (product.tags &&
        product.tags.some((tag: string) => tag.toLowerCase().includes(query)))
    );
  });

  return (
    <div className="flex flex-col items-center justify-start min-h-screen text-center">
      <header className="flex flex-col items-center justify-start w-full min-h-[50vh] sm:min-h-[70vh] py-8 bg-gray-400">
        <motion.svg
          initial={{ opacity: 0.2, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          viewBox="0 0 2024 510.83"
          className="mx-auto mb-4 w-32 h-auto"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <path d="M1386.76,248.68h-265.11c-3.95,0-7.76-1.66-10.45-4.57l-52.96-57.18c-4.01-4.33-3.75-11.09.58-15.1,4.33-4.01,11.09-3.75,15.1.58l50.84,54.9h254.88V32.39l-141.02,151.87c-2.69,2.89-6.49,4.55-10.44,4.55s-7.75-1.66-10.44-4.55l-97.65-105.17-97.65,105.17c-2.69,2.89-6.49,4.55-10.44,4.55s-7.75-1.66-10.44-4.55l-97.65-105.17-97.65,105.17c-2.69,2.89-6.49,4.55-10.44,4.55s-7.75-1.66-10.44-4.55l-141.02-151.87v194.93h254.89l50.88-54.79c4.01-4.32,10.77-4.57,15.1-.56,4.32,4.01,4.57,10.77.56,15.1l-52.99,57.07c-2.69,2.89-6.49,4.55-10.44,4.55h-265.11c-7.85,0-14.24-6.39-14.24-14.24V14.26c0-5.9,3.55-11.1,9.04-13.26,5.49-2.16,11.63-.76,15.64,3.57l148.14,159.53,97.65-105.17c2.69-2.89,6.49-4.55,10.44-4.55s7.75,1.66,10.44,4.55l97.65,105.17,97.65-105.17c2.69-2.89,6.49-4.55,10.44-4.55s7.75,1.66,10.44,4.55l97.65,105.17L1376.32,4.56c4.01-4.32,10.15-5.72,15.64-3.57,5.49-2.16,9.04,7.36,9.04,13.26v220.18c0,7.85-6.39,14.24-14.24,14.24Z" />
            <g>
              <path d="M35.93,508.13H0v-153.15h35.93v153.15ZM158.99,354.98h50.08l-111.61,75.45-5.16,2.02-68.72,44.24-2.92-28.3,48.5-36.15,89.83-57.26ZM106.89,412.02l105.99,96.11h-47.61l-86.68-78.15,28.3-17.97Z" />
              <path d="M274.87,508.13h-35.93v-153.15h35.93v153.15Z" />
              <path d="M339.09,508.13h-35.93v-153.15h41.09l145.07,114.3v-114.3h35.93v153.15h-40.42l-145.74-115.43v115.43Z" />
              <path d="M549.06,431.78c0-13.17,2.17-24.66,6.51-34.47,4.34-9.8,11.19-18.04,20.55-24.7,9.35-6.66,21.41-11.64,36.15-14.93,14.75-3.29,32.6-4.94,53.56-4.94,11.83,0,23.76.6,35.82,1.8,12.05,1.2,23.81,2.77,35.26,4.71,11.45,1.95,22.12,4.12,32,6.51l-6.51,29.87c-8.68-1.8-18.42-3.59-29.19-5.39-10.78-1.8-22.08-3.33-33.91-4.6-11.83-1.27-23.8-1.91-35.93-1.91-15.42,0-28.18.98-38.29,2.92-10.1,1.95-18.08,4.91-23.91,8.87-5.84,3.97-9.99,8.95-12.46,14.93-2.47,5.99-3.7,13.1-3.7,21.33s1.23,15.31,3.7,21.22c2.47,5.92,6.63,10.89,12.46,14.93,5.84,4.04,13.81,7.04,23.91,8.98,10.11,1.95,22.87,2.92,38.29,2.92,8.08,0,16.13-.37,24.14-1.12,8.01-.75,15.8-1.64,23.36-2.69,7.56-1.04,14.56-2.02,21-2.92v-43.56h37.05v68.27c-9.88,2.4-20.55,4.57-32,6.51-11.45,1.95-23.21,3.52-35.26,4.72-12.05,1.2-23.99,1.8-35.82,1.8-20.96,0-38.81-1.68-53.56-5.05-14.75-3.37-26.8-8.34-36.15-14.93-9.36-6.58-16.21-14.82-20.55-24.7-4.34-9.88-6.51-21.33-6.51-34.36Z" />
              <path d="M996.84,466.14c0,7.79-1.54,14.52-4.6,20.21-3.07,5.69-8.23,10.33-15.5,13.92-7.26,3.59-17.11,6.25-29.53,7.97-12.43,1.72-28,2.58-46.71,2.58-12.12,0-24.74-.53-37.84-1.57-13.1-1.05-25.64-2.43-37.62-4.16-11.98-1.72-22.46-3.63-31.44-5.73l5.17-28.97c7.48,1.65,15.53,3.18,24.14,4.61,8.61,1.42,17.66,2.69,27.17,3.82,9.51,1.12,19.24,2.02,29.19,2.69,9.95.67,20.1,1.01,30.43,1.01,11.08,0,20.1-.34,27.06-1.01,6.96-.67,12.31-1.68,16.06-3.03,3.74-1.35,6.32-3.11,7.75-5.28,1.42-2.17,2.13-4.83,2.13-7.97,0-4.64-.86-8.05-2.58-10.22-1.72-2.17-4.38-3.74-7.97-4.71-3.59-.97-8.01-1.69-13.25-2.14l-86.01-6.29c-14.37-.9-26.13-2.99-35.26-6.29-9.13-3.29-15.83-7.97-20.1-14.04-4.27-6.06-6.4-13.81-6.4-23.24,0-10.93,3.26-19.76,9.77-26.5,6.51-6.74,16.95-11.68,31.33-14.82,14.37-3.14,33.24-4.71,56.59-4.71,7.03,0,14.85.26,23.47.78,8.61.53,17.48,1.24,26.61,2.13,9.13.9,18.04,2.02,26.72,3.37,8.68,1.35,16.69,2.77,24.03,4.27l-5.84,27.4c-6.59-1.35-13.96-2.58-22.12-3.71-8.16-1.12-16.77-2.09-25.83-2.92-9.06-.82-18.27-1.49-27.62-2.02-9.36-.52-18.53-.79-27.51-.79-11.83,0-21.41.26-28.74.79-7.34.53-12.95,1.43-16.84,2.69-3.9,1.27-6.51,3-7.86,5.16-1.35,2.17-2.02,4.83-2.02,7.97,0,3.9.93,6.89,2.81,8.98,1.87,2.1,4.75,3.56,8.65,4.38,3.89.82,8.68,1.54,14.37,2.13l84.44,6.29c10.18.6,19.09,1.91,26.72,3.93,7.64,2.02,14.04,4.87,19.2,8.53,5.16,3.67,9.02,8.31,11.56,13.92,2.54,5.61,3.82,12.46,3.82,20.55Z" />
              <path d="M1078.81,508.13l-71.86-153.15h40.65l55.24,120.37,62.65-120.37h43.11l63.33,120.37,54.57-120.37h40.42l-71.64,153.15h-46.04l-62.21-118.8-62.21,118.8h-46.03Z" />
              <path d="M1587.22,508.13h-201.21v-153.15h201.21v28.52h-165.28v35.03h160.79v23.58h-160.79v37.5h165.28v28.52Z" />
              <path d="M1649.2,477.37h160.12v30.77h-196.05v-153.15h35.93v122.39Z" />
              <path d="M1863.88,477.37h160.12v30.77h-196.05v-153.15h35.93v122.39Z" />
            </g>
          </g>
        </motion.svg>
      </header>
      <div className="nav-wrapper flex justify-center w-full bg-transparent py-8">
        <nav className="relative flex flex-row items-center justify-between w-full max-w-2xl bg-gray-200 rounded-full shadow-lg px-8 py-8">
          <div className="flex items-center bg-gray-200 border border-gray-200 rounded-full px-3 h-10">
            <Search className="w-5 h-5 text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none border-none focus:ring-0 px-0 py-0 h-8"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          {/* Burger menu for mobile */}
          <button
            className="sm:hidden flex items-center justify-center p-2 rounded focus:outline-none"
            onClick={() => setNavOpen((open) => !open)}
            aria-label="Open navigation menu"
          >
            <Menu className="w-7 h-7 text-gray-700" />
          </button>
          {/* Nav items: visible on desktop, hidden on mobile */}
          <ul className="hidden sm:flex flex-row items-center gap-6">
            <li>
              <a
                href="#"
                className="text-gray-700 hover:text-amber-600 font-medium"
              >
                Category
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-700 hover:text-amber-600 font-medium"
              >
                Brands
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-700 hover:text-amber-600 font-medium"
              >
                Kits
              </a>
            </li>
          </ul>
          {/* Collapsible menu: visible on mobile when open */}
          {navOpen && (
            <ul className="absolute top-full right-0 mt-2 w-40 bg-white rounded-xl shadow-lg flex flex-col items-stretch gap-2 p-4 sm:hidden z-50">
              <li>
                <a
                  href="#"
                  className="text-gray-700 hover:text-amber-600 font-medium"
                >
                  Category
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 hover:text-amber-600 font-medium"
                >
                  Brands
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 hover:text-amber-600 font-medium"
                >
                  Kits
                </a>
              </li>
            </ul>
          )}
        </nav>
      </div>
      {/* Product Cards Grid */}
      <div className="w-full flex justify-center px-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-6xl">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="flex flex-col items-stretch bg-white rounded-2xl shadow-md overflow-hidden min-h-[240px] aspect-[4/4]"
            >
              {/* Image placeholder */}
              <div className="bg-gray-800 w-full h-32 sm:h-40 md:h-44 lg:h-48 flex items-center justify-center"></div>
              <div className="flex flex-col flex-1 p-4 gap-2 justify-between">
                <div className="flex flex-col items-start mb-1">
                  <span className="text-lg font-semibold text-gray-900 break-words whitespace-normal">
                    {product.name}
                  </span>
                </div>
                <div className="flex flex-row items-start gap-2">
                  <div className="flex flex-row items-start gap-2 mt-1">
                    <span
                      className={`text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1 ${
                        product.stock.inStock
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      <span
                        className={`inline-block w-2 h-2 rounded-full ${
                          product.stock.inStock ? "bg-green-500" : "bg-red-500"
                        }`}
                      ></span>
                      {product.stock.inStock ? "In Stock" : "Out of Stock"}
                    </span>
                  </div>
                  <div className="flex flex-row items-start mt-1">
                    <span className="text-xs font-semibold px-2 py-1 rounded-full bg-gray-200 text-gray-700">
                      {product.category}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
