import React from "react"
import styles from "./singlePage.module.css"
import Menu from "@/components/Menu/Menu";
import Image from "next/image";
import Comments from "@/components/comments/Comments";

const SinglePage = () =>{
    return(
        <div className={styles.container} >
           <div className={styles.infoContainer}>
           <div className={styles.textContainer}>
            <h1 className={styles.title}>Lorem ipsum dolor sit amet alim consectetur adipisicing elit.</h1>
           <div className={styles.user}>
           <div className={styles.userImageContainer}>
           <Image src="/p1.jpeg" width={50} height={50} alt="" all  className={styles.avatar}/>
           </div>
           <div className={styles.userTextContainer}>
            <span className={styles.username}>John Doe</span><br />
            <span className={styles.date}>01.01.2024</span>
           </div>
           </div>

           </div>
           <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" width={650} height={350} all  className={styles.image}/>
           </div>
           </div>
           <div className={styles.content}>
           <div className={styles.post}>
            <div className={styles.descriptiont}>
                
            <p>
            Lorem ipsum dolor sit amet alim consectetur adipisicing elit. Cupiditate, quam nisi magni ca laborum inventore voluptatum laudantium repellat ducimus unde aspernatur fuga.Quo, accusantium quisquam! Harum unde site culpa debitis.
            </p>
            <h1>Lorem ipsum dolor sit amet.</h1>
            <p>
            Lorem ipsum dolor sit amet alim consectetur adipisicing elit. Cupiditate, quam nisi magni ca laborum inventore voluptatum laudantium repellat ducimus unde aspernatur fuga.Quo, accusantium quisquam! Harum unde site culpa debitis.
            </p>
            <p>
            Lorem ipsum dolor sit amet alim consectetur adipisicing elit. Cupiditate, quam nisi magni ca laborum inventore voluptatum laudantium repellat ducimus unde aspernatur fuga.Quo, accusantium quisquam! Harum unde site culpa debitis.
            </p>
           </div>
           <div className={styles.comment}></div>
           <Comments/>
           </div>
           <Menu/>
           </div>
        </div>
    );
}

export default SinglePage