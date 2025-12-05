import { NavLink } from "react-router-dom";

const Navbar = ({ darkMode, toggleTheme }) => {
  const navItems = [
    { path: "/", icon: "home", label: "Home" },
    { path: "/about", icon: "person", label: "About" },
    { path: "/projects", icon: "work", label: "Projects" },
    { path: "/contact", icon: "mail", label: "Contact" },
    { path: "/blog", icon: "chat_bubble", label: "Blog" },
  ];

  return (
    <nav className="fixed top-8 md:top-1/2 ml-4 md:ml-12 -translate-y-1/2 flex md:flex-col items-center space-x-4 md:space-x-0 md:space-y-4 z-20">
      <button
        onClick={toggleTheme}
        className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
      >
        <span className="material-icons-outlined text-2xl">
          {darkMode ? "light_mode" : "dark_mode"}
        </span>
      </button>

      {navItems.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          className={({ isActive }) =>
            `w-12 h-12 flex items-center justify-center rounded-full shadow-lg transition-all duration-300 ${
              isActive
                ? "bg-primary text-gray-900 scale-110"
                : "bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700"
            }`
          }
        >
          <span className="material-icons-outlined text-2xl">{item.icon}</span>
        </NavLink>
      ))}
    </nav>
  );
};

export default Navbar;
