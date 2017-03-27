import React from 'react'
import {Link} from 'react-router'
//temporary
import Under from 'assets/images/ucp.png'
import 'assets/styles/blog.css'

export default React.createClass({
  render: function (){
    return(
      <div id="theChefContainer">
        <img className="under" src={Under}/>
      </div>
    )
  }
})
