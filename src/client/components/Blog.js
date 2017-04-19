import React from 'react'
import {Link} from 'react-router'
import Under from 'assets/images/ucp.png'
import 'assets/styles/blog.css'

export default React.createClass({
  render: function (){
    return(
      <div id="blogContainer">
        <p className="date">January, 28th 2017</p>
        <p>Welcome to the all new <a className="link" href="https://www.djshaunoneale.com">djshaunoneale.com</a> the re designed home of MasterChef Season 7 Champion Shaun O'Neale. Here you will find your favorite Shaun O'Neale products from shirts to custom chef's spoons, a full schedule of appearances so you can catch Shaun in a city near you and amazing new recipes uploaded weekly and not found anywhere else on the internet. This is an exciting time for the lifelong DJ and new found Chef with the release of his debut cookbook "My Modern American Table" right around the corner Shaun has hit the road to share his recipes and stories with each of you. Kicking off his cookbook tour earlier this month in Atlanta at the American Library Association mid winter conference, he gave a speech on the history and importance of bone marrow as a food source and demonstrated his very own bone marrow dish from his upcoming cookbook. With stops confirmed in Las Vegas, New York City, Los Angeles, Tampa, Charlotte and Chicago plus numerous more in negotiation Shaun is sure to be in a city near you so don't miss out on a delicious opportunity to meet the MasterChef champ.</p>
        <p>Back in Vegas Shaun will be getting back to work behind the turntables as he returns to the DJ booth February 15th at Light Nightclub performing for a premiere corporate event for Keller Williams Real Estate. With countless opportunities in the works the DJ will be back in heavy rotation once again for Vegas pool season 2017! For booking information please contact;<br/><br/>Dee Spuriel - Blueprint Sound<br/><a className="link" href="mailto:dee@blueprintsoundlv.com">Dee@blueprintsoundlv.com</a></p>
        <p>Searching for a unique dinning opportunity? Check out the store at <a className="link" href="https://www.djshaunoneale.com">djshaunoneale.com</a> for deals on private dining experiences prepared by Chef Shaun O'Neale sample the flavors that won him the MasterChef title! Don't have a large enough group for one of the Chef's dining packages, no problem! Visit EatWith to book your seat at one of the chefs open seating dinners happening monthly.<br/><br/><a className="link" href="https://www.eatwith.com/profile/160729/">www.eatwith.com/profile/160729/</a></p>
        <p>If you are interested in booking Chef Shaun O'Neale for your private dinner, festival appearance, speaking engagement or anything else food or music related please feel free to contact;<br/><br/>Katie - <a className="link" href="mailTo:booking@djshaunoneale.com">booking@djshaunoneale.com</a></p>
        <p>Be on the lookout for new recipes and blog posts updated weekly!<br/><br/>Cheers!<br/><br/>Shaun and the team at <a className="link" href="https://www.djshaunoneale.com">djshaunoneale.com</a></p>
      </div>
    )
  }
})
