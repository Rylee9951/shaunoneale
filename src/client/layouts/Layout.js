import React from 'react'
import { Link } from 'react-router'
import Logo from 'assets/images/shaunlogo.jpg'
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
            <div className="social_icons"><i className="fa fa-twitter-square" aria-hidden="true"></i></div>
            <div className="social_icons"><i className="fa fa-facebook-square" aria-hidden="true"></i></div>
            <div className="social_icons"><i className="fa fa-instagram" aria-hidden="true"></i></div>
          </div>
         </div>
         <div className="navButtons">
            <ul>
              <li>Home</li>
              <li>The DJ</li>
              <li>The Chef</li>
              <li>Blog</li>
            </ul>
          </div>
          {this.props.children}
        </main>
      </div>
    )
  }
})
