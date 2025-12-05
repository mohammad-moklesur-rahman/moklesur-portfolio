import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import MyContainer from "../components/MyContainer";

const RootLayout = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <MyContainer>
      <div className="grid md:grid-cols-12">
        {/* Main Content Area */}
        <main className="grid md:col-span-11">
          <Outlet />
        </main>

        <div className="grid md:col-span-1">
          {/* Navbar */}
          <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
        </div>
      </div>
    </MyContainer>
  );
};

export default RootLayout;
