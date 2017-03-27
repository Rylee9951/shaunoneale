import React from 'react'
import { Link } from 'react-router'
import 'assets/styles/store.css'
import Book from 'assets/images/bookCover.png'
import PastaLessons from 'assets/images/makingpasta.png'
//temporary
import Under from 'assets/images/ucp.png'
import 'assets/styles/blog.css'

export default React.createClass({
  render: function (){
    return(
      <div id="storeContainer">
        <div className="bookContainer">
          <a href="https://www.amazon.com/My-Modern-American-Table-Masterchef/dp/1419724002/ref=sr_1_fkmr0_1?s=books&ie=UTF8&qid=1484763141&sr=1-1-fkmr0&keywords=shaun+oneale+cookbook">
            <div className="cookBook1">
              <h3 className="pre">Pre Order Now</h3>
              <img className="bookPhoto" src={Book}/>
              <p className="title">My Modern American Table: Recipes for Inspired Home Cooks</p>
              <p className="date">Available May 9th 2017</p>
            </div>
          </a>
          <div className="cookBook2">
            <h3 className="pre">Get Your Autographed Copy</h3>
            <img className="bookPhoto2" src={Book}/>
            <p className="title">My Modern American Table: Recipes for Inspired Home Cooks</p>
            <p className="price1">$40</p>
            <div className="payButton">Complete With PayPal</div>
          </div>
        </div>
        <div className="pastaLessons">
          <h2 className="pastaTitle">Pasta Making Experience for 4</h2>
          <p className="pastaDescription">Enjoy an exclusive Pasta Making Class for 4 with Shaun O'Neale. Acquire the skills to make pasta in your very home after this class.</p>
          <div className="pastaPayContainer">
            <div className="pastaAmount"><h3 className="pastah3Amount">$350</h3></div>
            <div className="pastaPay"><h3 className="pastah3Pay">Complete With Pay PayPal</h3></div>
          </div>
          <img className="pastaLessonPhoto" src={PastaLessons}/>
        </div>
      </div>
    )
  }
})



// <img className="under" src={Under}/>
