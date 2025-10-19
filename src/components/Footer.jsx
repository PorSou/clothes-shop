import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#f4f0ea] text-gray-700 py-10 border-t border-gray-200 mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-8">
          {/* Logo + Description */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Link to="/">
                <img
                  src="https://img.freepik.com/premium-vector/clothing-store-logo-design-inspiration-cloth-shop-logo-clothes-logo-vector-illustration_148524-764.jpg"
                  alt="StyleHub Logo"
                  className="w-10 h-10 object-cover rounded"
                />
              </Link>
              <h2 className="text-xl font-semibold text-[#322d25]">StyleHub</h2>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              Discover the latest trends in fashion with our curated collection.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h3 className="font-semibold mb-3 text-[#322d25]">Shop</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/men" className="hover:text-[#322d25]">
                  Men
                </Link>
              </li>
              <li>
                <Link to="/women" className="hover:text-[#322d25]">
                  Women
                </Link>
              </li>
              <li>
                <Link to="/kids" className="hover:text-[#322d25]">
                  Kids
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="font-semibold mb-3 text-[#322d25]">
              Customer Service
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/contact" className="hover:text-[#322d25]">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="hover:text-[#322d25]">
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link to="/returns" className="hover:text-[#322d25]">
                  Returns
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-3 text-[#322d25]">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="hover:text-[#322d25]">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-[#322d25]">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-[#322d25]">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom line */}
        <hr className="border-gray-300 mb-4" />
        <p className="text-center text-xs text-gray-600">
          © {new Date().getFullYear()} StyleHub. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
