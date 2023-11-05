"use client"

import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

const getFromLocalStorage = () => {
  if (typeof window !== "undefined") {
    const value = localStorage.getItem("theme");
    return value || "light";
  }
};

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    return getFromLocalStorage();
  });

  const toggle = () => {
    setTheme(theme === "light" ? "dark" : "light"); // Utilisez === pour la comparaison
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Vous devez fournir un objet avec les valeurs du contexte
  const contextValues = {
    theme: theme,
    toggle: toggle,
  };

  return (
    <ThemeContext.Provider value={contextValues}>{children}</ThemeContext.Provider>
  );
}











// "use client"

// import { createContext, useEffect, useState } from "react";

// export const ThemeContext = createContext();

// const getFromLocalStorage = () =>{
//     if (typeof window !== "undefined"){
//         const value = localStorage.getItem("theme");
//         return value || "light";
//     }

// };

// export const ThemeContextProvider = ({ children }) =>{
//     const [theme, setTheme] = useState(() =>{
//         return getFromLocalStorage();
//     } );


//     const toggle = () =>{
//         setTheme(theme == "light" ? "dark" : "light");
//     };

//     useEffect(()=>{
//         localStorage.setItem("theme",theme);
//     },[theme]);

//     return <ThemeContext.Provider value={( theme, toggle )} >{children}</ThemeContext.Provider>;
// }