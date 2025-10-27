import React from "react";

export default function Skeleton() {
  return (
    <div className="w-full p-4 bg-white border border-gray-100 shadow-sm h-72 rounded-2xl dark:bg-gray-800 dark:border-gray-700">
      <div className="relative w-full h-40 overflow-hidden bg-gray-200 rounded-lg dark:bg-gray-700 animate-pulse">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
      </div>
      <div className="mt-4 space-y-2">
        <div className="w-3/4 h-4 bg-gray-200 rounded dark:bg-gray-700 animate-pulse" />
        <div className="w-1/2 h-4 bg-gray-200 rounded dark:bg-gray-700 animate-pulse" />
      </div>
    </div>
  );
}
