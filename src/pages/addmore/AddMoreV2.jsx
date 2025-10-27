import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import AOS from "aos";
import "aos/dist/aos.css";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Verified Buyer",
    initials: "S",
    review:
      "Absolutely love the quality and style! The delivery was super fast and the customer service was exceptional. Will definitely shop here again.",
    rating: 5,
    color: "bg-gradient-to-r from-pink-500 to-purple-500",
  },
  {
    name: "Michael Chen",
    role: "Verified Buyer",
    initials: "M",
    review:
      "Best online shopping experience I've had! The products are exactly as described and the packaging was beautiful. Highly recommend!",
    rating: 5,
    color: "bg-gradient-to-r from-blue-400 to-blue-600",
  },
  {
    name: "Emily Rodriguez",
    role: "Verified Buyer",
    initials: "E",
    review:
      "Amazing collection and great prices! I bought clothes for my whole family and everyone is happy. The return process was also very smooth.",
    rating: 5,
    color: "bg-gradient-to-r from-green-400 to-teal-500",
  },
];

const AddMoreV2 = () => {
  const theme = useSelector((state) => state.theme.mode); // Get current theme (light/dark)

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section
      className={`py-20 ${
        theme === "dark"
          ? "bg-gray-900 text-gray-100"
          : "bg-[#fdf6ed] text-gray-900"
      }`}
    >
      <div className="container px-4 mx-auto text-center">
        <h2
          className={`mb-2 font-serif text-3xl font-bold ${
            theme === "dark" ? "text-white" : "text-gray-900"
          } md:text-4xl`}
        >
          What Our Customers Say
        </h2>
        <p
          className={`max-w-2xl mx-auto mb-12 ${
            theme === "dark" ? "text-gray-300" : "text-gray-600"
          }`}
        >
          Join thousands of satisfied customers who love shopping with us
        </p>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className={`relative p-8 overflow-hidden transition-shadow duration-500 ${
                theme === "dark"
                  ? "bg-gray-800 text-gray-100"
                  : "bg-white text-gray-900"
              } shadow-md rounded-2xl hover:shadow-xl group`}
              data-aos="flip-up"
              data-aos-delay={idx * 200}
              data-aos-offset="200"
            >
              {/* Decorative gradient circle behind avatar */}
              <div
                className={`absolute w-24 h-24 transition-opacity duration-500 rounded-full -top-6 -left-6 opacity-20 group-hover:opacity-40 ${
                  theme === "dark" ? "bg-gray-700" : "bg-gray-100"
                }`}
              />

              {/* Star Rating */}
              <div className="flex justify-center mb-4">
                {Array(testimonial.rating)
                  .fill(0)
                  .map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.163c.969 0 1.371 1.24.588 1.81l-3.37 2.447a1 1 0 00-.364 1.118l1.287 3.956c.3.921-.755 1.688-1.539 1.118l-3.37-2.447a1 1 0 00-1.176 0l-3.37 2.447c-.784.57-1.838-.197-1.539-1.118l1.287-3.956a1 1 0 00-.364-1.118L2.036 9.384c-.783-.57-.38-1.81.588-1.81h4.163a1 1 0 00.95-.69l1.286-3.957z" />
                    </svg>
                  ))}
              </div>

              {/* Review */}
              <p
                className={`mb-6 text-sm italic ${
                  theme === "dark" ? "text-gray-300" : "text-gray-700"
                } md:text-base`}
              >
                "{testimonial.review}"
              </p>

              {/* Avatar & Name */}
              <div className="flex items-center justify-center gap-3">
                <div
                  className={`flex items-center justify-center w-10 h-10 rounded-full text-white font-semibold ${testimonial.color}`}
                >
                  {testimonial.initials}
                </div>
                <div className="text-left">
                  <p
                    className={`font-semibold ${
                      theme === "dark" ? "text-gray-200" : "text-gray-900"
                    }`}
                  >
                    {testimonial.name}
                  </p>
                  <p
                    className={`text-sm ${
                      theme === "dark" ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AddMoreV2;
