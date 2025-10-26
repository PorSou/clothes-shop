import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const Footer = () => {
  const theme = useSelector((state) => state.theme.mode);
  const location = useLocation();

  const bgClass = theme === "dark" ? "bg-gray-900" : "bg-[#f4f0ea]";
  const textClass = theme === "dark" ? "text-gray-300" : "text-gray-700";
  const borderTopClass =
    theme === "dark" ? "border-t-gray-700" : "border-t-gray-300";

  // ✅ Sticky only on /cart for md and larger screens
  const stickyClass =
    location.pathname === "/cart"
      ? "relative md:fixed md:bottom-0 md:left-0 md:w-full md:z-50"
      : "";

  return (
    <footer
      className={`py-10 transition-colors duration-300 border-t ${bgClass} ${textClass} ${borderTopClass} ${stickyClass}`}
    >
      <div className="flex flex-col items-center px-6 mx-auto max-w-7xl md:px-16">
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
                <Link to="/contact-us" className="hover:underline">
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
                <Link to="/about-us" className="hover:underline">
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

        <p className="text-xs text-center">
          © {new Date().getFullYear()} StyleHub. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
