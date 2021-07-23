import React, { Component } from "react";
import { ArsenalContextConsumer } from "../context/ArsenalContext";
import '../index.css';

class ArsenalContextProvider extends Component {
  render() {
    return (
      <ArsenalContextConsumer>
        {() => (
          <div className = "grid-container">
          <div className ="column1">
            <h3 className ="menuTitle">An Arsenal of AMMO for your SOUL</h3>
            </div>


            <div className = "column">
            <h2>Strawbanie</h2><img
              src="https://user-images.githubusercontent.com/72266712/100528465-21225980-31ab-11eb-8ec7-ec1cd8c9b67e.jpg"
              alt="strawbanieimg"
              className ="menuIMG"
            />
            <p class="soli">
              AMMOSOULs signature elderberry infused homemade sea moss gel with
              fresh strawberry added for a sweet taste with no added sugar!
            </p>
            <form action="http://www.ammosoul.com/store/c12/all-ammo">
              <button type="submit">
                buy now
              </button>
            </form></div>

            

            <div className ="column">
              <h1>THE ARTILLERY</h1>
                <img src="https://user-images.githubusercontent.com/72266712/99827766-0f481300-2b28-11eb-8b07-700f65358317.jpg" 
                alt="all5"
                className ="menuIMG"
                />
                
                <p>40oz - THE WHOLE ARSENAL - 35ds</p>
                <p> 32oz - HEAVY ARTILLERY - 28ds</p>
                <p>16oz - FULL CLIPS - 14ds</p>
                <p> 8oz - BULLETS - 7ds</p>
                <form action="http://www.ammosoul.com/store/c12/all-ammo">
                  <button type="submit">buy now
                  </button>
                </form></div>

            <div className = "column">
            <h2>Maxberry</h2>
            <img
              src="https://user-images.githubusercontent.com/72266712/100528470-2b445800-31ab-11eb-8ed7-dc47ffd1ff1d.jpg"
              alt="maxberryimg"
              className ="menuIMG"
            />
            <p class="soli">
              AMMOSOULs signature elderberry infused homemade sea moss gel with
              fresh blueberry, blackberry & strawberry added for the healthiest
              berry boost!
            </p>
            <form action="http://www.ammosoul.com/store/c12/all-ammo">
              <button  type="submit">
                buy now
              </button>
            </form></div>



            <div className = "column">
            <h2>BluezBerry</h2>
            <img
              src="https://user-images.githubusercontent.com/72266712/100528463-2089c300-31ab-11eb-8689-58cea3eeafcb.jpg"
              alt="bluezberryimg"
              className ="menuIMG"
            />
            <p class="soli">
              AMMOSOULs signature elderberry infused homemade sea moss gel with
              added fresh blueberry to promote a healthy heart!
            </p>
            <form action="http://www.ammosoul.com/store/c12/all-ammo">
              <button type="submit">
                buy now
              </button>
            </form></div>
            
            <div className = "column">
            <h2>Applia</h2>
            <img
              src="https://user-images.githubusercontent.com/72266712/100528464-21225980-31ab-11eb-92ed-955dff592e60.jpg"
              alt="appliaimg"
              className ="menuIMG"
            />
            <p class="soli">
              AMMOSOULs signature elderberry infused homemade sea moss gel added
              fresh apples & kale for a green energy boost!
            </p>
            <form action="http://www.ammosoul.com/store/c12/all-ammo">
              <button  type="submit">
                buy now
              </button>
            </form></div>

            <div className = "column">
            <h2>SoulAmmo</h2>
            <img
              src="https://user-images.githubusercontent.com/72266712/100528687-58920580-31ad-11eb-9bdd-2057ed1b9f65.jpg"
              alt="soulammoimg"
              className ="menuIMG"
            />
            <p class="soli">
              AMMOSOULs signature elderberry infused homemade sea moss gel with
              fresh strawberry added for a sweet taste with no added sugar!
            </p>
            <form action="http://www.ammosoul.com/store/c12/all-ammo">
              <button type="submit">
                buy now
              </button>
            </form></div>


          </div>
        )}
      </ArsenalContextConsumer>
    );
  }
}

export default ArsenalContextProvider;
