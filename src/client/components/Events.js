import React from 'react'
import 'assets/styles/events.css'
import UpcomingSchedule from 'assets/images/upcomingSchedule.png'

export default React.createClass({
  render: function (){
    return(
      <div id="eventContainer">
        <div className="eventScheduleContainer">
          <h3 className= "eventScheduleTitle">My Upcoming Events</h3>
          <img className="eventScheduleImage" src={UpcomingSchedule}/>
        </div>
      </div>
    )
  }
})
