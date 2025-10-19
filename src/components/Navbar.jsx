import { useState } from "react";
import {
  FaMoon,
  FaHeart,
  FaShoppingCart,
  FaUser,
  FaBars,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSearch = (e) => setSearch(e.target.value);

  return (
    <nav className="backdrop-blur-md bg-gray-100/70  px-4 py-5 shadow-sm sticky top-0 z-50">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Link to="/">
            <img
              src="https://img.freepik.com/premium-vector/clothing-store-logo-design-inspiration-cloth-shop-logo-clothes-logo-vector-illustration_148524-764.jpg"
              alt="StyleHub Logo"
              className="w-10 h-10 object-cover rounded"
            />
          </Link>
          <span className="font-bold text-lg">
            <Link to="/">StyleHub</Link>
          </span>
        </div>

        {/* Hamburger for small screens */}
        <button
          className="lg:hidden text-xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <FaBars />
        </button>

        {/* Menu Links */}
        <ul
          className={`flex flex-col lg:flex-row lg:space-x-6 absolute lg:static  w-full lg:w-auto left-0 top-16 lg:top-auto p-4 lg:p-0 transition-all duration-300 ease-in-out ${
            menuOpen ? "block" : "hidden lg:flex"
          }`}
        >
          <li className="hover:text-gray-700 cursor-pointer">
            <Link to="/shop">Shop</Link>
          </li>
          <li className="hover:text-gray-700 cursor-pointer">
            <Link to="/men">Men</Link>
          </li>
          <li className="hover:text-gray-700 cursor-pointer">
            <Link to="/women">Women</Link>
          </li>
          <li className="hover:text-gray-700 cursor-pointer">
            <Link to="/kids">Kids</Link>
          </li>

          {/* Search (only visible on mobile inside menu) */}
          <div className="block lg:hidden mt-3">
            <input
              type="text"
              value={search}
              onChange={handleSearch}
              placeholder="Search products..."
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
          </div>
        </ul>

        {/* Search Bar (hidden on small) */}
        <div className="hidden lg:flex flex-1 max-w-lg mx-6">
          <input
            type="text"
            value={search}
            onChange={handleSearch}
            placeholder="Search products..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300"
          />
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-6 text-gray-700 text-lg">
          <div className="hover:bg-gray-300 p-2 rounded-2xl transition duration-300 ease-in-out">
            <FaMoon className="cursor-pointer hover:text-gray-900" />
          </div>
          <div className="hover:bg-gray-300 p-2 rounded-2xl transition duration-300 ease-in-out">
            <FaHeart className="cursor-pointer hover:text-gray-900" />
          </div>
          <div className="hover:bg-gray-300 p-2 rounded-2xl transition duration-300 ease-in-out">
            <FaShoppingCart className="cursor-pointer hover:text-gray-900" />
          </div>
          <div className="hover:bg-gray-300 p-2 rounded-2xl transition duration-300 ease-in-out">
            <FaUser className="cursor-pointer hover:text-gray-900" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
