import React from "react";
import { Link } from "react-router-dom";

const JoinCommunity = () => {
  return (
    <div className="flex justify-center">
      <section className="w-[90%] bg-[#322d25] text-center text-white rounded-md py-16 px-6 my-10 mt-30 mx-4 md:mx-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Join Our Community
        </h2>
        <p className="text-gray-300 mb-6 text-sm md:text-base">
          Sign up for exclusive offers and early access to new collections
        </p>
        <Link
          to="#"
          className="bg-[#e7e2d9] text-gray-800 px-5 py-2 rounded-md font-medium hover:bg-[#dcd5ca] transition-all duration-200"
        >
          Create Account
        </Link>
      </section>
    </div>
  );
};

export default JoinCommunity;
