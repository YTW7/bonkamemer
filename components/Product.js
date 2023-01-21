import React from "react";
import styles from "../styles/Product.module.css";
import IPFSDownload from './IpfsDownload';
import Buy from "./Buy";

export default function Product({ product }) {
  const { id, name, price, image_url, twitterHandle} = product;

  const TWITTER_LINK = `https://twitter.com/${twitterHandle}`;
  return (
    <div className={styles.product_container}>
      <div >
        <img className={styles.product_image}src={image_url} alt={name} />
      </div>

      <div className={styles.product_details}>
        <div className={styles.product_text}>
          <div className={styles.product_title}>{name}</div>
          {/* <div className={styles.product_description}>{description}</div> */}
        </div>
         <div className={styles.product_memer}>
          Memer: <a class="text-navblue"
            href={TWITTER_LINK}
            target="_blank"
            rel="noreferrer"
          >{`${twitterHandle}`}</a>
         </div>
        <div className={styles.product_action}>
          <div className={styles.product_price} >{price} BONK</div>
          {/* I'm hardcoding these for now, we'll fetch the hash from the API later*/}
          {/* <IPFSDownload filename="emojis.zip" hash="QmWWH69mTL66r3H8P4wUn24t1L5pvdTJGUTKBqT11KCHS5" cta="Download emojis"/> */}
          <div class="ml-9"><Buy itemID={id} /></div>
          

        </div>
      </div>
    </div>
  );
}