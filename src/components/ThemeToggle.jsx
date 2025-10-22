import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../features/theme/themeSlice";

const ThemeToggle = () => {
  const theme = useSelector((state) => state.theme.mode);
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => dispatch(toggleTheme())}
      className="px-4 py-2 text-sm font-medium text-gray-800 bg-gray-200 rounded-lg dark:bg-gray-800 dark:text-gray-200"
    >
      {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
    </button>
  );
};

export default ThemeToggle;
