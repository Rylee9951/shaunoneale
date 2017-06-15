import React from 'react'
import { Link } from 'react-router'
import Logo from 'assets/images/shaunlogo.png'
import 'font-awesome/css/font-awesome.css'
import 'assets/styles/layout.css'
//import Drawer from 'components/Drawer'

export default React.createClass({
  getInitialState: function() {
    return {
        clicked: false
      }
},
  toggleDropdown: function() {
    if(this.state.clicked === true){
      this.setState({clicked: false})
    } else {
      this.setState({clicked: true})
    }
  },
  render: function () {
    var className = this.state.clicked ? 'm_navbar_open' : 'm_navbar_closed';
    return (
      <div className="app">
        <main> 
         <div className="header">
          <div><img className="logo_so" src={Logo}/></div>
          <div className="navButtons">
            <Link to="/">
              <div className="nav">Home</div>
            </Link>
            <Link to="/blog">
              <div className="nav">Blog</div>
            </Link>
            <Link to="/recipes">
              <div className="nav">Recipes</div>
            </Link>
            <Link to="/store">
              <div className="nav">Store</div>
            </Link>
            <Link to="/contact">
              <div className="nav">Contact</div>
            </Link>
          </div>
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
          <div onClick={this.toggleDropdown} className="dropdown">
              <i className="fa fa-bars" aria-hidden="true"></i>
          </div>
          <div>
            <ul className={className} onClick={this.toggleDropdown}>
              <Link to="/">
                <li className="navLi">Home</li>
              </Link>
              <Link to="/blog">
                <li className="navLi">Blog</li>
              </Link>
              <Link to="/recipes">
                <li className="navLi">Recipes</li>
              </Link>
              <Link to="/store">
                <li className="navLi">Store</li>
              </Link>
              <Link to="/contact">
                <li className="navLi">Contact</li>
              </Link>
            </ul>
          </div>
         </div>
          {this.props.children}
          <div className="footer">
            <div id="icon_container_bottom">
            <a href="https://twitter.com/djshaunoneale?lang=en">
              <div className="social_icons_bottom"><i className="fa fa-twitter-square" aria-hidden="true"></i></div>
            </a>
            <a href="https://www.facebook.com/shaunoneale">
              <div className="social_icons_bottom"><i className="fa fa-facebook-square" aria-hidden="true"></i></div>
            </a>
            <a href="https://www.instagram.com/djshaunoneale/?hl=en">
              <div className="social_icons_bottom"><i className="fa fa-instagram" aria-hidden="true"></i></div>
            </a>
          </div>
          </div>
        </main>
      </div>
    )
  }
})
