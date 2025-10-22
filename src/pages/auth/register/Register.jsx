import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginSuccess } from "../../../features/auth/authSlice";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const theme = useSelector((state) => state.theme.mode);

  const handleRegister = (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      if (name && email && password) {
        const fakeUser = {
          name,
          email,
          image:
            "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=500&q=80",
        };
        const fakeToken = "fake-jwt-token";
        dispatch(loginSuccess({ user: fakeUser, token: fakeToken }));
        navigate("/profile", { replace: true });
      } else {
        setError("Please fill all fields correctly.");
      }
    }, 1000);
  };

  return (
    <div
      className={`flex items-center justify-center mb-35 mt-15 transition-colors duration-300 ${
        theme === "dark"
          ? "bg-gray-900 text-gray-100"
          : "bg-stone-50 text-gray-900"
      }`}
    >
      <div
        className={`w-full max-w-md p-8 rounded-2xl transition-colors duration-300 ${
          theme === "dark" ? "bg-gray-800" : "bg-white"
        }`}
      >
        <h2 className="mb-2 text-3xl font-bold">Create Account</h2>
        <p
          className={`mb-6 ${
            theme === "dark" ? "text-gray-300" : "text-gray-600"
          }`}
        >
          Join us and start your journey
        </p>

        {error && (
          <div className="p-2 mb-4 text-sm text-red-700 bg-red-100 rounded">
            {error}
          </div>
        )}

        <form onSubmit={handleRegister} className="space-y-5">
          <div className="text-left">
            <label className="block mb-1 text-sm font-medium">Full Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition-colors duration-300 ${
                theme === "dark"
                  ? "border-gray-600 bg-gray-700 text-gray-100 focus:ring-gray-500"
                  : "border-gray-300 bg-white text-gray-900 focus:ring-gray-400"
              }`}
              placeholder="Your name"
            />
          </div>

          <div className="text-left">
            <label className="block mb-1 text-sm font-medium">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition-colors duration-300 ${
                theme === "dark"
                  ? "border-gray-600 bg-gray-700 text-gray-100 focus:ring-gray-500"
                  : "border-gray-300 bg-white text-gray-900 focus:ring-gray-400"
              }`}
              placeholder="you@example.com"
            />
          </div>

          <div className="text-left">
            <label className="block mb-1 text-sm font-medium">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition-colors duration-300 ${
                theme === "dark"
                  ? "border-gray-600 bg-gray-700 text-gray-100 focus:ring-gray-500"
                  : "border-gray-300 bg-white text-gray-900 focus:ring-gray-400"
              }`}
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 mt-2 text-white transition duration-200 rounded-lg ${
              theme === "dark"
                ? "bg-gray-700 hover:bg-gray-600 disabled:opacity-60"
                : "bg-gray-600 hover:bg-gray-700 disabled:opacity-60"
            }`}
          >
            {loading ? "Creating Account..." : "Register"}
          </button>
        </form>

        <div className="mt-6 text-sm">
          <p className="mt-3">
            Already have an account?{" "}
            <Link
              to="/login"
              className={`font-medium hover:underline ${
                theme === "dark" ? "text-gray-100" : "text-gray-900"
              }`}
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
