"use client"

import React, { useContext } from "react"
import Image from "next/image"
import styles from "./themeToggle.module.css"
import { ThemeContext } from "@/context/ThemeContext"
//  const theme = "#fff"; // Remplacez "sombre" par la valeur de votre thème
//     console.log("dark");
const ThemeToggle = () =>{
    
    const { toggle, theme} = useContext(ThemeContext);
    console.log({theme});
   
    


    return(
        <div className={styles.container}
        onClick={toggle} style={
            theme === "dark" ? { backgroundColor: "white" } : { backgroundColor: "#0f172a" }
        } 
         >
            <Image src="/moon.png" alt="" width={14} height={14} />


            <div className={styles.ball} onClick={toggle}
             style={
                theme === "dark" 
            ? {left: 1,background: "#0f172a" } 
            : {right: 1,background: "white" }
        }
            ></div>

            
            <Image src="/sun.png" alt="" width={14} height={14} />
        </div>
    )
}

export default ThemeToggle