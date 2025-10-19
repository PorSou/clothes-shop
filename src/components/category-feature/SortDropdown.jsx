import React from "react";

const SortDropdown = ({ sortOrder, onSortChange }) => {
  return (
    <select
      value={sortOrder}
      onChange={(e) => onSortChange(e.target.value)}
      className="border border-gray-300  rounded p-2"
    >
      <option value="none">Sort: None</option>
      <option value="lowToHigh">Price: Low to High</option>
      <option value="highToLow">Price: High to Low</option>
    </select>
  );
};

export default SortDropdown;
