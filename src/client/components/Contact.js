import React from 'react'
import 'assets/styles/contact.css'


export default React.createClass({
  render: function (){
    return(
      <div className="contactContainer">
        <div className="contact">
          <h2 className="contactHeader">Contacts</h2>
          <p className="general">General Bookings - <a className="link" href="mailto:booking@djshaunoneale.com">booking@djshaunoneale.com</a></p>
          <p className="tvandfilm">TV & Film Bookings - <a className="link" href="mailto:asst@mortarLA.com">asst@mortarLA.com</a></p>
          <p className="dj">DJ Booking - <a className="link" href="mailto:dee@blueprintsoundlv.com">dee@blueprintsoundlv.com</a></p>
        </div>
      </div>
    )
  }
})
