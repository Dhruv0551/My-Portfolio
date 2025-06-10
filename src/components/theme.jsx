import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

export default function Theme() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <button onClick={toggleTheme}>
      {isDarkMode ? (
        <Sun className="h-6 w-6 text-yellow-400 cursor-pointer" />
      ) : (
        <Moon className="h-6 w-6 text-blue-500 cursor-pointer" />
      )}
    </button>
  );
}
