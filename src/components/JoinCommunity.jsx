import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const JoinCommunity = () => {
  const theme = useSelector((state) => state.theme.mode);

  return (
    <div className="flex justify-center">
      <section
        className={`w-[90%] text-center rounded-md py-16 px-6 my-10 mt-30 mx-4 md:mx-10 transition-colors duration-300 ${
          theme === "dark"
            ? "bg-gray-800 text-gray-100"
            : "bg-[#322d25] text-white"
        }`}
      >
        <h2 className="mb-4 text-3xl font-bold md:text-4xl">
          Join Our Community
        </h2>
        <p
          className={`mb-6 text-sm md:text-base transition-colors duration-300 ${
            theme === "dark" ? "text-gray-300" : "text-gray-200"
          }`}
        >
          Sign up for exclusive offers and early access to new collections
        </p>
        <Link
          to="/register"
          className={`px-5 py-2 rounded-md font-medium transition-all duration-200 ${
            theme === "dark"
              ? "bg-gray-200 text-gray-800 hover:bg-gray-300"
              : "bg-[#e7e2d9] text-gray-800 hover:bg-[#dcd5ca]"
          }`}
        >
          Create Account
        </Link>
      </section>
    </div>
  );
};

export default JoinCommunity;
