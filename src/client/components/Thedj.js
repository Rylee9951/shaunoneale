import React from 'react'
import { Link } from 'react-router'
import 'assets/styles/thedj.css'
//temporary
import Under from 'assets/images/ucp.png'
import 'assets/styles/blog.css'

export default React.createClass({
  render: function (){
    return(
      <div id="theDjContainer">
        <img className="under" src={Under}/>
      </div>     
    )
  }
})
