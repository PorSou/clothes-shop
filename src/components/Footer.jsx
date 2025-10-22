import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Footer = () => {
  const theme = useSelector((state) => state.theme.mode);

  return (
    <footer
      className={`py-10 border-t mt-20 transition-colors duration-300 ${
        theme === "dark"
          ? "bg-gray-900 text-gray-300 border-gray-700"
          : "bg-[#f4f0ea] text-gray-700 border-gray-200"
      }`}
    >
      <div className="px-6 mx-auto max-w-7xl md:px-16">
        <div className="grid grid-cols-1 gap-10 mb-8 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Link to="/">
                <img
                  src="https://img.freepik.com/premium-vector/clothing-store-logo-design-inspiration-cloth-shop-logo-clothes-logo-vector-illustration_148524-764.jpg"
                  alt="StyleHub Logo"
                  className="object-cover w-10 h-10 rounded"
                />
              </Link>
              <h2 className="text-xl font-semibold">StyleHub</h2>
            </div>
            <p className="text-sm leading-relaxed">
              Discover the latest trends in fashion with our curated collection.
            </p>
          </div>

          <div>
            <h3 className="mb-3 font-semibold">Shop</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/men" className="hover:underline">
                  Men
                </Link>
              </li>
              <li>
                <Link to="/women" className="hover:underline">
                  Women
                </Link>
              </li>
              <li>
                <Link to="/kids" className="hover:underline">
                  Kids
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 font-semibold">Customer Service</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/contact" className="hover:underline">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="hover:underline">
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link to="/returns" className="hover:underline">
                  Returns
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 font-semibold">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:underline">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:underline">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <hr className="mb-4 border-gray-300" />
        <p className="text-xs text-center">
          © {new Date().getFullYear()} StyleHub. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
