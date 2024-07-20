import { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeSwitcher = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="w-12 flex items-center justify-center bg-transparent dark:bg-transparent text-black dark:text-white mr-2">
      <button
        onClick={toggleDarkMode}
        className="relative inline-flex items-center p-2 rounded-full bg-gray-700 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors duration-300"
      >
        {darkMode ? (
          <FaSun className="w-5 h-5 text-yellow-600" />
        ) : (
          <FaMoon className="w-5 h-5 text-yellow-600" />
        )}
        <span
          className={`absolute top-0 left-0 w-3 h-3 bg-white dark:bg-white rounded-full transition-transform duration-300 transform ${
            darkMode ? 'translate-x-6' : ''
          }`}
        ></span>
      </button>
    </div>
  );
};

export default ThemeSwitcher;
