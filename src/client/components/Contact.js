import React from 'react'
import 'assets/styles/contact.css'
import Green from 'assets/images/greenGiant_sponsor.png'
import TopLine from 'assets/images/topLine_sponsor.png'

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
        <div className="sponsorContainer">
          <h2 className="sponsorHeader">Sponsors</h2>
          <div className="sponsor">
            <div className="green"><img className="giant" src={Green}/></div>
            <div className="topLine"><img className="farms" src={TopLine}/></div>
          </div>
        </div>
      </div>
    )
  }
})
