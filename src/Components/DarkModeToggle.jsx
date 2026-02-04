const DarkModeToggle = ({ darkMode, setDarkMode }) => {
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="w-11 h-6 bg-gray-300 dark:bg-gray-700 rounded-full p-1 flex items-center"
    >
      <div
        className={`w-4 h-4 bg-white rounded-full shadow transition-transform ${
          darkMode ? "translate-x-5" : ""
        }`}
      />
    </button>
  );
};

export default DarkModeToggle;
