import React from 'react'
import { Link } from 'react-router'
import 'assets/styles/store.css'
import Book from 'assets/images/bookCover.png'
import PastaLessons from 'assets/images/makingpasta.png'
import Mens from 'assets/images/mHat.png'
import Womens from 'assets/images/wHat.png'
import Spoons from 'assets/images/spoons.png'

export default React.createClass({
  render: function (){
    return(
      <div id="storeContainer">
        <div className="bookContainer">
          <a href="https://www.amazon.com/My-Modern-American-Table-Masterchef/dp/1419724002/ref=sr_1_fkmr0_1?s=books&ie=UTF8&qid=1484763141&sr=1-1-fkmr0&keywords=shaun+oneale+cookbook">
            <div className="cookBook1">
              <h3 className="pre1">Order Now</h3>
              <img className="bookPhoto1" src={Book}/>
              <p className="title1">My Modern American Table: Recipes for Inspired Home Cooks</p>
            </div>
          </a>
          <div className="cookBook2">
            <h3 className="pre1">Get Your Autographed Copy</h3>
            <img className="bookPhoto2" src={Book}/>
            <p className="title1">My Modern American Table: Recipes for Inspired Home Cooks</p>
            <p className="price1">$40</p><p className="shipping">Shipping only in the Continental U.S.</p>
            <div className="payButton"><form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick"/>
<input type="hidden" name="hosted_button_id" value="3KX343BJPXFC6"/>
<input className="bookButton" type="image" src="http://www.clker.com/cliparts/H/A/2/Q/K/e/pay-now-button-hi.png" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="3" height="2"/>
</form>
</div>
          </div>
        </div>
        <div className="pastaLessons">
          <h2 className="pastaTitle">Pasta Making Experience for 4</h2>
          <p className="pastaDescription">Enjoy an exclusive Pasta Making Class for 4 with Shaun O'Neale Fox's MasterChef Season 7 Winner. Acquire the skills to make pasta in your very home after this class.</p>
          <div className="pastaPayContainer">
            <div className="pastaAmount"><h3 className="pastah3Amount">$350</h3></div>
            <div className="pastaPay">
              <a className="aPastaPay" href="https://www.eatwith.com/profile/160729/">
                <p className="pPay">Brought to you by EatWith<br/>Click Here</p>
              </a>
            </div>
          </div>
          <img className="pastaLessonPhoto" src={PastaLessons}/>
        </div>
        <div className="sellingContainer">
          <div className="selling">
            <div className="mHat">
              <img className="mens" src={Mens}/>
              <div className="mHatDescription"><p className="description">Shaun O'Neale embroidered Men's logo hat, shipping only available in the Continental U.S</p></div>
              <div className="mHatPayContainer">
                <div className="mHatAmount">
                  <h4 className="mHath3Amount">$31.99</h4>
                </div>
                <div className="mHatPay">
                  <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                    <input type="hidden" name="cmd" value="_s-xclick"/>
                    <input type="hidden" name="hosted_button_id" value="XF8KTRJYYUEQY"/>
                    <input className="mHatButton" type="image" src="http://www.clker.com/cliparts/H/A/2/Q/K/e/pay-now-button-hi.png" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
                    <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
                  </form>
                </div>
              </div>
            </div>
            <div className="wHat">
              <img className="womens" src={Womens}/>
              <div className="wHatDescription"><p className="description">Shaun O'Neale embroidered Women's logo hat, shipping only available in the Continental U.S.</p></div>
              <div className="wHatPayContainer">
                <div className="wHatAmount">
                  <h4 className="wHath3Amount">$31.99</h4>
                </div>
                <div className="wHatPay">
                  <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                    <input type="hidden" name="cmd" value="_s-xclick"/>
                    <input type="hidden" name="hosted_button_id" value="GGEGKL57JL4SS"/>
                    <input className="wHatButton" type="image" src="http://www.clker.com/cliparts/H/A/2/Q/K/e/pay-now-button-hi.png" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
                    <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
})



// <img className="under" src={Under}/>
