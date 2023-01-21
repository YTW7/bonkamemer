import React,{ useEffect, useState } from "react";
import HeadComponent from '../components/Head';
import Product from "../components/Product";
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import CreateProduct from "../components/CreateProduct";
import Navbar from "../components/Navbar";
import { Abril_Fatface } from '@next/font/google'
const abril = Abril_Fatface({ weight: '400', subsets: ['latin'] });
import Home from "../components/Home";
// Constants
const TWITTER_HANDLE = "yahyathewarrior";
const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`;

const App = () => {
  const { publicKey } = useWallet();
  const [products, setProducts] = useState([]);
  const isOwner = ( publicKey ? publicKey.toString() === process.env.NEXT_PUBLIC_OWNER_PUBLIC_KEY : false );
  const [creating, setCreating] = useState(false);
  

  useEffect(() => {
    if (publicKey) {
      fetch(`/api/fetchProducts`)
        .then(response => response.json())
        .then(data => {
          setProducts(data);
          console.log("Products", data);
        });
    }
  }, [publicKey]);


  const renderNotConnectedContainer = () => (
    <>
    <Home/>
    <div className="font-black text-white text-2xl mt-6 mb-6">
      {/* Connect Wallet and Check Out the Latest Memes! */}
      <p class="header text-black text-4xl mb-5" > Connect Wallet</p>

     <p class="header text-black text-4xl  mb-5" >  and</p>

     <p class="header text-black text-4xl" >  Check Out the Latest Memes!</p>
    </div>
    </>
  );

  const renderItemBuyContainer = () => (
    <div className="products-container">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );


  return (
    <div className="App">
      <HeadComponent/>
      <div>
        <header className="header-containe">
          {/* <p className={abril.className} class="header text-navneon" > 😳 CRACK-A-DOUBT 😈</p>
          <p className="sub-text text-navneon">Have a doubt? Crack it out with CRACK-A-DOUBT</p> */}

          {/* {isOwner && (
            <button className="create-product-button" onClick={() => setCreating(!creating)}>
              {creating ? "Close" : "Create Product"}
            </button>
          )} */}
        </header>


        <main>
        {/* {creating && <CreateProduct />} */}
          {publicKey ? renderItemBuyContainer() : renderNotConnectedContainer()}
        </main>
<br />
        <div className="footer-container" class="bg-white rounded text-2xl pb-4  pt-4 ">
          {/* <img alt="Twitter Logo" className="twitter-logo" src="twitter-logo.svg" /> */}
          <div class="text-bonk mb-3 font-black italic text-6xl ">#BONK_A_MEMER</div> 
          <a 
            className="footer-text"
            href={TWITTER_LINK}
            target="_blank"
            rel="noreferrer"
          >{`built by @${TWITTER_HANDLE}`}</a>
        </div>
        <br />
      </div>
    </div>
  );
};

export default App;
