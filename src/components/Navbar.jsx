import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../features/auth/authSlice";
import { clearCart } from "../features/cart/cartSlice";
import { clearFavorites } from "../features/favorite/favoriteSlice";
import { toggleTheme } from "../features/theme/themeSlice";
import {
  FaMoon,
  FaSun,
  FaHeart,
  FaShoppingCart,
  FaUser,
  FaBars,
} from "react-icons/fa";

const Navbar = ({ search, setSearch }) => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const theme = useSelector((state) => state.theme.mode);
  const cartQuantity = useSelector((state) => state.cart?.totalQuantity || 0);
  const favoriteCount = useSelector(
    (state) => state.favorite?.totalFavorites || 0
  );
  const { user, isAuthenticated } = useSelector((state) => state.auth || {});

  const handleLogout = () => {
    dispatch(logout());
    dispatch(clearCart());
    dispatch(clearFavorites());
    localStorage.removeItem("persist:auth");
    navigate("/login");
  };

  const linkBase =
    theme === "dark"
      ? "text-gray-300 hover:text-white transition duration-200"
      : "text-gray-700 hover:text-gray-900 transition duration-200";

  const activeLink =
    theme === "dark"
      ? "text-blue-400 font-semibold border-b-2 border-blue-400"
      : "text-blue-600 font-semibold border-b-2 border-blue-600";

  return (
    <nav
      className={`sticky top-0 z-50 px-4 py-5 transition-colors duration-300 shadow-sm backdrop-blur-md ${
        theme === "dark"
          ? "bg-gray-900 text-gray-100"
          : "bg-gray-100 text-gray-900"
      }`}
    >
      <div className="flex items-center justify-between mx-auto max-w-7xl">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <NavLink to="/">
            <img
              src="https://img.freepik.com/premium-vector/clothing-store-logo-design-inspiration-cloth-shop-logo-clothes-logo-vector-illustration_148524-764.jpg"
              alt="StyleHub Logo"
              className="object-cover w-10 h-10 rounded"
            />
          </NavLink>
          <span className="hidden text-lg font-bold sm:block">
            <NavLink to="/">StyleHub</NavLink>
          </span>
        </div>

        {/* Hamburger */}
        <button
          className="absolute text-xl right-4 lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <FaBars />
        </button>

        {/* Menu */}
        <ul
          className={`flex flex-col lg:flex-row lg:space-x-6 absolute lg:static w-full lg:w-auto left-0 top-16 lg:top-auto p-4 lg:p-0 transition-all duration-300 ease-in-out ${
            theme === "dark"
              ? "bg-gray-900/90 text-gray-100"
              : "bg-gray-100/90 text-gray-900"
          } ${menuOpen ? "block" : "hidden lg:flex"}`}
        >
          {["Shop", "Men", "Women", "Kids"].map((item) => (
            <li key={item}>
              <NavLink
                to={`/${item.toLowerCase()}`}
                className={({ isActive }) => (isActive ? activeLink : linkBase)}
              >
                {item}
              </NavLink>
            </li>
          ))}

          {/* Mobile login/logout button */}
          <li className="mt-4 lg:hidden">
            {isAuthenticated ? (
              <div>
                <button
                  onClick={handleLogout}
                  className="px-2 py-1.5 text-xs sm:text-sm font-medium text-white bg-red-600 rounded-2xl hover:bg-red-700 transition"
                >
                  Logout
                </button>
              </div>
            ) : (
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  `p-1.5 rounded-2xl ${isActive ? activeLink : linkBase}`
                }
              >
                <FaUser />
              </NavLink>
            )}
          </li>
        </ul>

        {/* Search Bar */}
        <div className="relative flex-1 hidden max-w-lg mx-6 sm:flex">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search products..."
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition-colors ${
              theme === "dark"
                ? "bg-gray-800 border-gray-600 text-white focus:ring-gray-600"
                : "bg-white border-gray-300 text-gray-900 focus:ring-gray-400"
            }`}
          />
        </div>

        {/* Icons */}
        <div
          className={`flex items-center space-x-5 text-lg lg:space-x-8 transition-all duration-300 
          ${
            isAuthenticated ? "pl-4 lg:pl-0" : "pl-10 pr-10 lg:pl-0 lg:pr-0" // 👈 Push icons left on mobile when not logged in
          }`}
        >
          {/* Theme Toggle */}
          <div
            onClick={() => dispatch(toggleTheme())}
            className={`p-1.5 transition duration-300 rounded-2xl cursor-pointer ${
              theme === "dark"
                ? "hover:bg-gray-700"
                : "hover:bg-gray-300 text-gray-800"
            }`}
          >
            {theme === "light" ? (
              <FaMoon />
            ) : (
              <FaSun className="text-yellow-400" />
            )}
          </div>

          {/* Favorite */}
          <NavLink
            to="/favorite"
            className={({ isActive }) =>
              `relative p-1.5 rounded-2xl ${isActive ? activeLink : linkBase}`
            }
          >
            <FaHeart />
            {favoriteCount > 0 && (
              <span className="absolute flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-red-500 rounded-full -top-1 -right-1 sm:w-5 sm:h-5">
                {favoriteCount}
              </span>
            )}
          </NavLink>

          {/* Cart */}
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              `relative p-1.5 rounded-2xl ${isActive ? activeLink : linkBase}`
            }
          >
            <FaShoppingCart />
            {cartQuantity > 0 && (
              <span className="absolute flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-blue-500 rounded-full -top-1 -right-1 sm:w-5 sm:h-5">
                {cartQuantity}
              </span>
            )}
          </NavLink>

          {/* Profile/Login */}
          {isAuthenticated ? (
            <>
              <NavLink
                to="/profile"
                className={({ isActive }) =>
                  `relative p-1.5 rounded-2xl ${
                    isActive ? activeLink : linkBase
                  }`
                }
              >
                <img
                  src={user?.image}
                  alt="profile"
                  className="object-cover border border-gray-400 rounded-full w-7 h-7 sm:w-8 sm:h-8"
                />
              </NavLink>

              {/* Logout button for desktop */}
              <li className="hidden lg:block">
                <button
                  onClick={handleLogout}
                  className="px-2 py-1.5 text-xs sm:text-sm font-medium text-white bg-red-600 rounded-2xl hover:bg-red-700 transition"
                >
                  Logout
                </button>
              </li>
            </>
          ) : (
            <NavLink
              to="/login"
              className={({ isActive }) =>
                `p-1.5 rounded-2xl ${isActive ? activeLink : linkBase}`
              }
            >
              <FaUser />
            </NavLink>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
