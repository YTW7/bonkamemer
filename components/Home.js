import React from 'react'
import styles from "../styles/CreateProduct.module.css";
const Home = () => {
  return (
    <div class="bg-white " className={styles.home_bg}>
        <br />
     <p class="header text-black text-3xl bg-white ml-12 mr-12 bg-opacity-90 rounded-lg pt-2 pb-2" >  Get paid in $BONK for Creating Memes!</p>

     <div class="bg-bonk rounded-xl mx-12 p-6 mt-9 mb-4 bg-opacity-90">
     <p class="header text-black text-3xl " >  Support Memers in a Click!</p>
     <br />
     <p class="header text-black text-3xl" >  OR</p>
     <br />
     <p class="header text-black text-3xl" >  Create Memes & Get Supported!</p>
     <br />
     </div>
          {/* <p className="sub-text text-black">Have a doubt? Crack it out with CRACK-A-DOUBT</p> */}
          <br />
</div>
  )
}

export default Home