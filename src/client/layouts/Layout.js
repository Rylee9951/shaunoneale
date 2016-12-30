import React from 'react'
import { Link } from 'react-router'
import Logo from 'assets/images/shaunlogo.png'
import 'font-awesome/css/font-awesome.css'
import 'assets/styles/layout.css'
//import Drawer from 'components/Drawer'

export default React.createClass({
  render: function () {
    return (
      <div className="app">
        <main> 
         <div className="header">
          <div><img className="logo_so" src={Logo}/></div>
          <div id="icon_container">
            <a href="https://twitter.com/djshaunoneale?lang=en">
              <div className="social_icons"><i className="fa fa-twitter-square" aria-hidden="true"></i></div>
            </a>
            <a href="https://www.facebook.com/shaunoneale">
              <div className="social_icons"><i className="fa fa-facebook-square" aria-hidden="true"></i></div>
            </a>
            <a href="https://www.instagram.com/djshaunoneale/?hl=en">
              <div className="social_icons"><i className="fa fa-instagram" aria-hidden="true"></i></div>
            </a>
          </div>
         </div>
         <div className="navButtons">
              <div className="nav">Home</div>
              <div className="nav">The DJ</div>
              <div className="nav">The Chef</div>
              <div className="nav">Blog</div>
          </div>
          {this.props.children}
        </main>
      </div>
    )
  }
})
