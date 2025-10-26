import React from "react";
import { Heart, Users, Sparkles, Target } from "lucide-react";
import { useSelector } from "react-redux";

export default function AboutUsPage() {
  const theme = useSelector((state) => state.theme.mode);

  const isDark = theme === "dark";

  return (
    <div
      className={`flex flex-col min-h-screen transition-colors duration-300 ${
        isDark ? "bg-gray-900 text-gray-50" : "bg-white text-gray-900"
      }`}
    >
      <main className="flex-1">
        {/* Hero Section */}
        <div
          className={`py-20 transition-colors duration-300 ${
            isDark ? "bg-gray-800" : "bg-gray-50"
          }`}
        >
          <div className="container px-4 mx-auto text-center">
            <h1
              className={`mb-4 font-serif text-4xl font-bold md:text-5xl ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              About StyleHub
            </h1>
            <p
              className={`max-w-2xl mx-auto text-lg ${
                isDark ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Redefining fashion retail with curated collections and exceptional
              customer experiences.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="container px-4 py-20 mx-auto">
          <div className="max-w-4xl mx-auto space-y-16">
            {/* Our Story */}
            <div>
              <h2 className="mb-6 font-serif text-3xl font-bold">Our Story</h2>
              <div
                className={`space-y-4 ${
                  isDark ? "text-gray-300" : "text-gray-600"
                }`}
              >
                <p>
                  Founded in 2020, StyleHub began with a simple mission: to make
                  high-quality, stylish fashion accessible to everyone. What
                  started as a small online boutique has grown into a trusted
                  destination for fashion enthusiasts worldwide.
                </p>
                <p>
                  We believe that fashion is more than just clothing—it's a form
                  of self-expression, confidence, and creativity. That's why we
                  carefully curate every piece in our collection, ensuring it
                  meets our high standards for quality, style, and
                  sustainability.
                </p>
              </div>
            </div>

            {/* Mission and Vision */}
            <div className="grid gap-8 md:grid-cols-2">
              <div
                className={`p-6 border rounded-lg transition-colors duration-300 ${
                  isDark
                    ? "bg-gray-800 border-gray-700"
                    : "bg-white border-gray-200"
                }`}
              >
                <Heart className="w-10 h-10 mb-4 text-indigo-500" />
                <h3 className="mb-3 font-serif text-xl font-bold">
                  Our Mission
                </h3>
                <p
                  className={`${
                    isDark ? "text-gray-300" : "text-gray-600"
                  } text-sm`}
                >
                  To empower individuals through fashion by providing
                  high-quality, stylish pieces that inspire confidence and
                  self-expression.
                </p>
              </div>

              <div
                className={`p-6 border rounded-lg transition-colors duration-300 ${
                  isDark
                    ? "bg-gray-800 border-gray-700"
                    : "bg-white border-gray-200"
                }`}
              >
                <Target className="w-10 h-10 mb-4 text-indigo-500" />
                <h3 className="mb-3 font-serif text-xl font-bold">
                  Our Vision
                </h3>
                <p
                  className={`${
                    isDark ? "text-gray-300" : "text-gray-600"
                  } text-sm`}
                >
                  To become the world's most trusted fashion destination, known
                  for exceptional quality, sustainability, and customer care.
                </p>
              </div>
            </div>

            {/* Our Values */}
            <div>
              <h2 className="mb-8 font-serif text-3xl font-bold text-center">
                Our Values
              </h2>
              <div className="grid gap-6 md:grid-cols-3">
                <div
                  className={`text-center transition-colors ${
                    isDark ? "bg-gray-800 border border-gray-700" : ""
                  } p-4 rounded-lg`}
                >
                  <Sparkles className="w-10 h-10 mx-auto mb-4 text-indigo-500" />
                  <h3 className="mb-2 font-semibold">Quality First</h3>
                  <p
                    className={`text-sm ${
                      isDark ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    Every product is carefully selected and tested to ensure it
                    meets our high standards.
                  </p>
                </div>

                <div
                  className={`text-center transition-colors ${
                    isDark ? "bg-gray-800 border border-gray-700" : ""
                  } p-4 rounded-lg`}
                >
                  <Users className="w-10 h-10 mx-auto mb-4 text-indigo-500" />
                  <h3 className="mb-2 font-semibold">Customer Focused</h3>
                  <p
                    className={`text-sm ${
                      isDark ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    Your satisfaction is our priority. We're here to help every
                    step of the way.
                  </p>
                </div>

                <div
                  className={`text-center transition-colors ${
                    isDark ? "bg-gray-800 border border-gray-700" : ""
                  } p-4 rounded-lg`}
                >
                  <Heart className="w-10 h-10 mx-auto mb-4 text-indigo-500" />
                  <h3 className="mb-2 font-semibold">Sustainability</h3>
                  <p
                    className={`text-sm ${
                      isDark ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    We're committed to ethical practices and reducing our
                    environmental impact.
                  </p>
                </div>
              </div>
            </div>

            {/* Community Section */}
            <div
              className={`p-8 border rounded-lg transition-colors duration-300 ${
                isDark
                  ? "bg-indigo-950 border-indigo-700"
                  : "bg-indigo-50 border-indigo-200"
              }`}
            >
              <h2 className="mb-4 font-serif text-2xl font-bold text-center">
                Join Our Community
              </h2>
              <p
                className={`mb-6 text-center ${
                  isDark ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Be part of a growing community of fashion lovers. Follow us on
                social media and stay updated with the latest trends, exclusive
                offers, and style inspiration.
              </p>

              <div className="flex justify-center gap-4">
                <div className="text-center">
                  <p className="text-2xl font-bold">500K+</p>
                  <p className="text-sm text-muted-foreground">
                    Happy Customers
                  </p>
                </div>
                <div className="mx-4 border-l border-gray-400" />
                <div className="text-center">
                  <p className="text-2xl font-bold">10K+</p>
                  <p className="text-sm text-muted-foreground">Products</p>
                </div>
                <div className="mx-4 border-l border-gray-400" />
                <div className="text-center">
                  <p className="text-2xl font-bold">100+</p>
                  <p className="text-sm text-muted-foreground">Countries</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
