import React from "react"
import styles from "./cardList.module.css"
import Pagination from "../pagination/Pagination"
import Image from "next/image";
import Card from "../card/Card";


const getData = async (page) => {
    
      const res = await fetch('http://localhost:3000/api/posts?page=${page}',{
          cache: "no-store"
        })
      
        if(!res.ok)
        {
          throw new Error("Failed");
        }
      
        return res.json()
      

  };
const CardList = async ({ page }) =>{

    const data = await getData(page);
    console.log(data)

    return(
        <div className={styles.container} >
            <h1 className={styles.title}>Recent Posts </h1>
            <div className={styles.posts}>
            {
            data && Array.isArray(data) && data?.map((item)=> (
              <Card item={item} key={item._id} />
             ))
            }

            

                {/* {
                data && data.map((item) =>(
                <Card item={item} key={item._id} />
                ))} */}

                <Card/>
                <Card/>
                <Card/>

            </div>
        <Pagination page={page} />
        </div>
    );
}

export default CardList