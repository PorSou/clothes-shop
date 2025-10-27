import React, { useEffect } from "react";
import { Truck, Shield, Award, Zap } from "lucide-react";
import { useSelector } from "react-redux";
import AOS from "aos";
import "aos/dist/aos.css";

const AddMore = () => {
  const theme = useSelector((state) => state.theme.mode);

  const iconBgStyle =
    "relative inline-flex items-center justify-center w-24 h-24 rounded-full mb-6 bg-white/30 backdrop-blur-md shadow-md border-4 border-white/40 transition-all duration-700";

  const headingClass = `font-bold text-xl mb-3 transition-colors duration-500 ${
    theme === "dark"
      ? "text-gray-200 group-hover:text-orange-400"
      : "text-gray-900 group-hover:text-orange-600"
  }`;

  const descClass = `text-sm leading-relaxed transition-colors duration-500 ${
    theme === "dark"
      ? "text-gray-300 group-hover:text-gray-100"
      : "text-gray-700 group-hover:text-gray-900"
  }`;

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-muted/30 to-muted/60">
      <div className="container px-4 mx-auto">
        <h2
          className={`font-serif text-3xl md:text-4xl font-bold text-center mb-4 ${
            theme === "dark" ? "text-white" : "text-gray-900"
          }`}
        >
          Why Shop With Us
        </h2>
        <p
          className={`text-center mb-12 max-w-2xl mx-auto ${
            theme === "dark" ? "text-gray-300" : "text-gray-700"
          }`}
        >
          Experience premium quality, exceptional service, and unbeatable value
          with every purchase.
        </p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {/* Free Shipping */}
          <div
            className="relative p-8 overflow-hidden text-center transition-all duration-500 border border-gray-200 group rounded-2xl hover:shadow-lg hover:-translate-y-2"
            data-aos="fade-left"
            data-aos-delay="100" // Delay for each card
            data-aos-offset="200"
          >
            <div
              className={`${iconBgStyle} group-hover:scale-110 group-hover:rotate-[360deg] bg-gradient-to-br from-orange-300 via-red-300 to-pink-300`}
            >
              <Truck className="w-12 h-12 text-white drop-shadow-lg" />
            </div>
            <h3 className={headingClass}>Free Shipping</h3>
            <p className={descClass}>
              On all orders over $100 with fast delivery to your doorstep
            </p>
          </div>

          {/* Secure Payment */}
          <div
            className="relative p-8 overflow-hidden text-center transition-all duration-500 border border-gray-200 group rounded-2xl hover:shadow-lg hover:-translate-y-2"
            data-aos="fade-left"
            data-aos-delay="200" // Delay for the second card
            data-aos-offset="200"
          >
            <div
              className={`${iconBgStyle} group-hover:scale-110 group-hover:rotate-[360deg] bg-gradient-to-br from-blue-400 via-indigo-400 to-purple-400`}
            >
              <Shield className="w-12 h-12 text-white drop-shadow-lg" />
            </div>
            <h3 className={headingClass.replace("orange", "blue")}>
              Secure Payment
            </h3>
            <p className={descClass}>
              100% secure transactions with encrypted data protection
            </p>
          </div>

          {/* Premium Quality */}
          <div
            className="relative p-8 overflow-hidden text-center transition-all duration-500 border border-gray-200 group rounded-2xl hover:shadow-lg hover:-translate-y-2"
            data-aos="fade-left"
            data-aos-delay="300" // Delay for the third card
            data-aos-offset="200"
          >
            <div
              className={`${iconBgStyle} group-hover:scale-110 group-hover:rotate-[360deg] bg-gradient-to-br from-amber-400 via-yellow-300 to-orange-400`}
            >
              <Award className="w-12 h-12 text-white drop-shadow-lg" />
            </div>
            <h3 className={headingClass.replace("orange", "amber")}>
              Premium Quality
            </h3>
            <p className={descClass}>
              Carefully curated products from top international brands
            </p>
          </div>

          {/* Easy Returns */}
          <div
            className="relative p-8 overflow-hidden text-center transition-all duration-500 border border-gray-200 group rounded-2xl hover:shadow-lg hover:-translate-y-2"
            data-aos="fade-left"
            data-aos-delay="400" // Delay for the fourth card
            data-aos-offset="200"
          >
            <div
              className={`${iconBgStyle} group-hover:scale-110 group-hover:rotate-[360deg] bg-gradient-to-br from-emerald-400 via-teal-400 to-cyan-400`}
            >
              <Zap className="w-12 h-12 text-white drop-shadow-lg" />
            </div>
            <h3 className={headingClass.replace("orange", "teal")}>
              Easy Returns
            </h3>
            <p className={descClass}>
              30-day hassle-free return policy with full refund guarantee
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddMore;
