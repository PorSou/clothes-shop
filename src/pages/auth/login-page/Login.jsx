import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginSuccess } from "../../../features/auth/authSlice";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const theme = useSelector((state) => state.theme.mode);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    setTimeout(() => {
      setLoading(false);

      const storedUser = JSON.parse(localStorage.getItem("registeredUser"));
      if (!storedUser) {
        setError("No account found. Please register first.");
        return;
      }

      if (storedUser.email === email && storedUser.password === password) {
        const fakeUser = {
          name: storedUser.name,
          email: storedUser.email,
          image:
            "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=500&q=80",
        };
        const fakeToken = "fake-jwt-token";
        dispatch(loginSuccess({ user: fakeUser, token: fakeToken }));

        navigate("/", { replace: true }); // go to home
      } else {
        setError("Incorrect email or password. Please try again.");
      }
    }, 900);
  };

  return (
    <div
      className={`flex flex-col mt-20 transition-colors duration-300 ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      <div
        className={`w-full max-w-md p-8 text-center rounded-2xl mx-auto ${
          theme === "dark" ? "bg-gray-800" : "bg-white"
        }`}
      >
        <h2
          className={`mb-2 text-3xl font-bold ${
            theme === "dark" ? "text-white" : "text-gray-900"
          }`}
        >
          Welcome Back
        </h2>
        <p
          className={`mb-6 ${
            theme === "dark" ? "text-gray-300" : "text-gray-600"
          }`}
        >
          Sign in to your account
        </p>

        {error && (
          <div className="p-2 mb-4 text-sm text-red-700 bg-red-100 rounded">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-5">
          <div className="text-left">
            <label
              className={`block mb-1 text-sm font-medium ${
                theme === "dark" ? "text-gray-200" : "text-gray-700"
              }`}
            >
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                theme === "dark"
                  ? "bg-gray-700 border-gray-600 text-white focus:ring-gray-500"
                  : "bg-white border-gray-300 text-gray-900 focus:ring-gray-400"
              }`}
              placeholder="you@example.com"
            />
          </div>

          <div className="text-left">
            <label
              className={`block mb-1 text-sm font-medium ${
                theme === "dark" ? "text-gray-200" : "text-gray-700"
              }`}
            >
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                theme === "dark"
                  ? "bg-gray-700 border-gray-600 text-white focus:ring-gray-500"
                  : "bg-white border-gray-300 text-gray-900 focus:ring-gray-400"
              }`}
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 mt-2 text-white transition duration-200 bg-gray-600 rounded-lg cursor-pointer hover:bg-gray-700 disabled:opacity-60"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        <div
          className={`mt-6 text-sm ${
            theme === "dark" ? "text-gray-300" : "text-gray-600"
          }`}
        >
          <p className="mt-3">
            Don’t have an account?{" "}
            <Link
              to="/register"
              className={`font-medium hover:underline ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              Create one
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
