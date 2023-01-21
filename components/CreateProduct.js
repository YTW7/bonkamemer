import React, { useState } from "react";
import { create } from "ipfs-http-client";
import styles from "../styles/CreateProduct.module.css";

const client = create("https://ipfs.infura.io:5001/api/v0");

const CreateProduct = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image_url: "",
    description: "",
    twitterHandle:"",
  });
  const [file, setFile] = useState({});
  const [uploading, setUploading] = useState(false);

  async function onChange(e) {
    setUploading(true);
    const files = e.target.files;
    try {
      console.log(files[0]);
      const added = await client.add(files[0]);
      setFile({ filename: files[0].name, hash: added.path });
    } catch (error) {
      console.log("Error uploading file: ", error);
    }
    setUploading(false);
  }

  const createProduct = async () => {
    try {
      // Combine product data and file.name
      const product = { ...newProduct, ...file };
      console.log("Sending product to api",product);
      const response = await fetch("../api/addProduct", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      });
      const data = await response.json();
      if (response.status === 200) {
        alert("Meme added! Refresh to Update Page");
      }
      else{
        alert("Unable to add meme: ", data.error);
      }

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.background_blur}>

      <div className={styles.create_product_container}>
        <div className={styles.create_product_form}>
          <header className={styles.header}>
            <h1 class="text-3xl font-black">Create Your Meme Post</h1>
          </header>

          <div className={styles.form_container}>
            {/* <input
              type="file"
              className={styles.input}
              accept=".jpg,.jpeg,.png,.gif"
              placeholder="Emojis"
              onChange={onChange}
            /> */}
            {file.name != null && <p className="file-name">{file.filename}</p>}
            <div className={styles.flex_row}>
              <input
                className={styles.input}
                type="url"
                placeholder="Add a Catchy Meme Name"
                onChange={(e) => {
                  setNewProduct({ ...newProduct, name: e.target.value });
                }}
              />
              {/* <input
                className={styles.input}
                type="text"
                placeholder="Add Tip Amt. in $BONK"
                onChange={(e) => {
                  setNewProduct({ ...newProduct, price: e.target.value });
                }}
              /> */}
            </div>
            <div className={styles.flex_row}>
              <input
                className={styles.input}
                type="url"
                placeholder="Add No. of $BONK tokens you want as tip:"
                onChange={(e) => {
                  setNewProduct({ ...newProduct, price: e.target.value });
                }}
              />
            </div>
            <div className={styles.flex_row}>
              <input
                className={styles.input}
                type="url"
                placeholder="Add Your Meme's Image URL"
                onChange={(e) => {
                  setNewProduct({ ...newProduct, image_url: e.target.value });
                }}
              />
            </div>      
            {/* <textarea
              className={styles.text_area}
              placeholder="Add Description here..."
              onChange={(e) => {
                setNewProduct({ ...newProduct, description: e.target.value });
              }}
            /> */}
            <div className={styles.flex_row}>
              <input
                className={styles.input}
                type="url"
                placeholder="Your Wallet's Public Address to Recieve $BONK"
                onChange={(e) => {
                  setNewProduct({ ...newProduct, sellerKey: e.target.value });
                }}
              />
            </div>  
            <div className={styles.flex_row}>
              <input
                className={styles.input}
                type="url"
                placeholder="Enter Twitter handle for Credibility: Ex: @Jack"
                onChange={(e) => {
                  setNewProduct({ ...newProduct, twitterHandle: e.target.value });
                }}
              />
            </div> 

            <button
              className={styles.button}
              onClick={() => {
                createProduct();
              }}
              disabled={uploading}
            >
              Submit Meme
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateProduct;