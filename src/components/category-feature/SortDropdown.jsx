import React from "react";
import { useSelector } from "react-redux";

const SortDropdown = ({ sortOrder, onSortChange }) => {
  const theme = useSelector((state) => state.theme.mode); // 'light' or 'dark'

  const bgColor = theme === "dark" ? "bg-gray-700" : "bg-white";
  const textColor = theme === "dark" ? "text-gray-200" : "text-gray-800";
  const borderColor = theme === "dark" ? "border-gray-600" : "border-gray-300";

  return (
    <select
      value={sortOrder}
      onChange={(e) => onSortChange(e.target.value)}
      className={`p-2 rounded border lg:mb-10 2xl:mb-10  ${borderColor} ${bgColor} ${textColor}`}
    >
      <option value="none">Sort: None</option>
      <option value="lowToHigh">Price: Low to High</option>
      <option value="highToLow">Price: High to Low</option>
    </select>
  );
};

export default SortDropdown;
