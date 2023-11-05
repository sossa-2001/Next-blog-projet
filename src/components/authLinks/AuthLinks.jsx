"use client"

import React, { useState } from "react"
import styles from "./authLinks.module.css"
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

const AuthLinks = () =>{

    const [open,setopen] = useState(false);
    
    const { status } = useSession;

    
    return ( <>
    { status ==="unauthenticated" ? (
        <Link href="/login"className={styles.link} >Login</Link>
    ) : (
        <>
        <Link href="/write" className={styles.link}>write</Link>
        <span className={styles.link}  onClick={ signOut }>Logout</span>
    </>
    )}
    <div className={styles.burger} onClick={() => setopen(!open)}>
    <div className={styles.line}></div>
    <div className={styles.line}></div>
    <div className={styles.line}></div>
    </div>
    {open && (
    <div className={styles.responsiveMenu}>
        <Link href="/">Homepage</Link>
        <Link href="/">About</Link>
        <Link href="/">Contact</Link>

        {status==="notauthenticated" ? (
        <Link href="/login">Login</Link>
    ) : (
        <>
        <Link href="/write">write</Link>
        <span className={styles.link}>Logout</span>
    </>
    )}
    </div>
        )}
    </>
);};

export default AuthLinks