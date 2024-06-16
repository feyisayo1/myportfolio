"use client";
import { Sun1, Moon } from "iconsax-react";
import { useState, useEffect } from "react";

const ThemeChangeButton = () => {
  let [theme, setTheme] = useState(true);
  let [parentElement, setParentElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    let element = document.getElementsByTagName("body")[0];
    parentElement = element;
    setParentElement(parentElement);
  }, []);

  //function
  const changeTheme = () => {
    if (parentElement) parentElement.classList.toggle("dark");
    if (theme) {
      setTheme(false);
    } else {
      setTheme(true);
    }
  };

  //components
  const LightTheme = () => {
    return (
      <button className="flex w-full h-fit justify-between">
        <span className="hidden max-md:flex font-light">Switch Theme</span>
        <Sun1 onClick={changeTheme} className="text-gray-100" />
      </button>
    );
  };
  const DarkTheme = () => {
    return (
      <button className="flex w-full h-fit justify-between">
        <span className="hidden max-md:flex font-light">Switch Theme</span>
        <Moon onClick={changeTheme} className="text-gray-600" />
      </button>
    );
  };

  return <>{theme ? <DarkTheme /> : <LightTheme />}</>;
};

export default ThemeChangeButton;



// import { Moon } from "iconsax-react"; // Import only the Moon icon

// const ThemeChangeButton = () => {
//   // Set default theme to dark
//   const [isDarkTheme, setIsDarkTheme] = useState(true);

//   // Apply dark theme class to body on component mount
//   useEffect(() => {
//     const body = document.body;
//     body.classList.toggle("dark", isDarkTheme); // Initial toggle based on state
//   }, [isDarkTheme]); // Re-run effect when isDarkTheme changes

//   return (
//     <button className="flex w-full h-fit justify-between">
//       <span className="hidden max-md:flex font-light">Dark Theme</span>
//       <Moon className="text-gray-600" />
//     </button>
//   );
// };

// export default ThemeChangeButton;

