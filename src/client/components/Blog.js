import React from 'react'
import {Link} from 'react-router'
import 'assets/styles/blog.css'
import Crowd from 'assets/images/crowd.png'


export default React.createClass({
  render: function (){
    return(
      <div id="blogContainer">
        <div className="blog2">
          <p className="blogDate">July, 19th 2017</p>
          <p className="blogPara">So it has been quite some time since I have been able to sit down and write up a blog post so there is sooo much to recap here. It has been an amazing journey since the release of My Modern American Table I have been traveling all over the country and even internationally to feed my fans and share my cookbook with as many people as possible! The tour has taken me to Tampa, San Juan Puerto Rico, Miami, Orlando, Anaheim, Cocoa Beach, San Francisco, Chicago and even Prince Edward Island Canada. I have had the opportunity to hold cooking demos at major music festivals, food conventions and food festivals, designed a menu for the Chicago White Sox VIP lounge as well as threw out a first pitch for them and the Miami Marlins and even got the opportunity to be a celebrity judge at Ribfest in Chicago. Needless to say I have been insanely busy but have been having the time of my life, it has been so incredible to get out and meet the fans of MasterChef here and abroad!</p>
          <p className="blogPara">My most recent adventure took me to Cavendish Beach Music Festival in Prince Edward Canada and what an amazing event this was! Cavendish Beach is one of the largest country music festivals on the east coast of North America! This years headliners were The Zac Brown Band and Little Big Town with a few surprises like Billy Ray Cyrus thrown in and an incredibly talented line up of support acts! I was fortunate enough to have cooking demos all three days of this amazing event where I demoed and served enough Paella for 250 hungry festival goers daily! The event was a huge success and for me personally even more so, I was so honored and surprised at how much love fans have for MasterChef north of the border! I truly hope to go back next year and for many more to come! Anyway, here is that Paella recipe I promised so many of you while at Cavendish Beach Music Festival, hope you enjoy! </p>
          <p className="blogPara">Next up in July is Bite of Seattle on July 23rd and Gilroy Garlic Festival July 28 & 29 plus I have some huge announcements coming soon, be on the look out for a MAGICAL surprise! </p>
        </div>
        <div className="CavendishImages">
          <div className="paellaRecipe">
            <h2 className="paellaRecipeTittle">Paella for Cavendish</h2>
            <p className="paellaRecipeServes">Serves 8</p>
            <h3 className="paellaRecipeIngredients">Ingredients</h3>
            <h4>Paella</h4>
            <ul>
              <li>3 tablespoons olive oil, plus more for drizzling</li>
              <li>1 1⁄2 pounds skin-on chicken thighs, deboned and cut into 1-inch pieces</li>
              <li>1 1⁄2 pounds prawns or shrimp, shell on and deveined</li>
              <li>1 cup dried chorizo, thinly sliced</li>
              <li>1 1⁄2 cups sofrito*</li>
              <li>1 tablespoon smoked paprika</li>
              <li>2 teaspoons saffron threads</li>
              <li>2 quarts chicken broth</li>
              <li>1 tablespoon salt, plus more for seasoning</li>
              <li>10 canned piquillo peppers, quartered</li>
              <li>1 1⁄2 pounds mussels, scrubbed and debearded</li>
              <li>1 1⁄2 pounds littleneck clams or quahogs, soaked in cold water for 15–20 minutes</li>
              <li>3 1⁄2 cups Bomba rice</li>
              <li>Lemons for serving</li>
            </ul>
            <h4>*Sofrito</h4>
            <ul>
              <li>1/4 cup extra virgin olive oil</li>
              <li>1 cup green bell pepper, medium dice</li>
              <li>1 cup red bell pepper, medium dice</li>
              <li>2 cups yellow onion, medium dice</li>
              <li>5 cloves garlic, minced</li>
              <li>2 cups tomato puree</li>
              <li>Salt and freshly ground black pepper to taste</li>
            </ul>
            <h3 className="paellaRecipeIngredients">Directions</h3>
            <p>To make the Sofrito: Heat 1⁄4 cup olive oil in a skillet over medium-low heat, add the bell peppers and the onion and sweat until translucent, add the garlic and cook for 3 more minutes. Add the tomato puree and season with salt and freshly ground black pepper, gently simmer over low heat, stirring frequently, until most of the liquid has been cooked off, at least 30 minutes. (Sofrito can be made up to five days ahead.)</p>
            <p>To make the Paella: Heat a paella pan (18 inches or wider) over a very hot charcoal grill. Add olive oil, add chicken and season with salt and freshly ground black pepper, brown on both sides, and push to the edges of the pan. Add prawns, season with more salt, and cook until lightly colored. Add chorizo, sofrito, smoked paprika, and saffron, and stir everything together.</p>
            <p>Add chicken broth and the tablespoon of salt, and bring to a simmer. Sprinkle rice evenly over the top of the paella, making sure it is completely covered by broth, and cook for five minutes. Arrange piquillo peppers, mussels, and clams over the top of the paella.</p>
            <p>Continue to cook paella until the rice has absorbed all of the liquid and smells slightly toasted and soccarat has formed, about 30 minutes. Remove pan from the grill, cover it with aluminum foil, and allow it to rest for five minutes. Serve straight from the pan with lemon wedges and a drizzle of olive oil.</p>
          </div>
          <img className="crowdImage" src={Crowd}/>
        </div>
        <div className="blog1">
          <p className="blogDate">April, 19th 2017</p>
          <p className="blogPara">Welcome to the all new <a className="link" href="https://www.djshaunoneale.com">djshaunoneale.com</a> the re designed home of MasterChef Season 7 Champion Shaun O'Neale. Here you will find your favorite Shaun O'Neale products from shirts to custom chef's spoons, a full schedule of appearances so you can catch Shaun in a city near you and amazing new recipes uploaded weekly and not found anywhere else on the internet. This is an exciting time for the lifelong DJ and new found Chef with the release of his debut cookbook "My Modern American Table" right around the corner Shaun has hit the road to share his recipes and stories with each of you. Kicking off his cookbook tour earlier this month in Atlanta at the American Library Association mid winter conference, he gave a speech on the history and importance of bone marrow as a food source and demonstrated his very own bone marrow dish from his upcoming cookbook. With stops confirmed in Las Vegas, New York City, Los Angeles, Tampa, Charlotte and Chicago plus numerous more in negotiation Shaun is sure to be in a city near you so don't miss out on a delicious opportunity to meet the MasterChef champ.</p>
          <p className="blogPara">Back in Vegas Shaun will be getting back to work behind the turntables as he returns to the DJ booth February 15th at Light Nightclub performing for a premiere corporate event for Keller Williams Real Estate. With countless opportunities in the works the DJ will be back in heavy rotation once again for Vegas pool season 2017! For booking information please contact;<br/><br/>Dee Spuriel - Blueprint Sound<br/><a className="link" href="mailto:dee@blueprintsoundlv.com">Dee@blueprintsoundlv.com</a></p>
          <p className="blogPara">Searching for a unique dinning opportunity? Check out the store at <a className="link" href="https://www.djshaunoneale.com">djshaunoneale.com</a> for deals on private dining experiences prepared by Chef Shaun O'Neale sample the flavors that won him the MasterChef title! Don't have a large enough group for one of the Chef's dining packages, no problem! Visit EatWith to book your seat at one of the chefs open seating dinners happening monthly.<br/><br/><a className="link" href="https://www.eatwith.com/profile/160729/">www.eatwith.com/profile/160729/</a></p>
          <p className="blogPara">If you are interested in booking Chef Shaun O'Neale for your private dinner, festival appearance, speaking engagement or anything else food or music related please feel free to contact;<br/><br/>Katie - <a className="link" href="mailTo:booking@djshaunoneale.com">booking@djshaunoneale.com</a></p>
          <p className="blogPara">Be on the lookout for new recipes and blog posts updated weekly!<br/><br/>Cheers!<br/><br/>Shaun and the team at <a className="link" href="https://www.djshaunoneale.com">djshaunoneale.com</a></p>
        </div>
      </div>
    )
  }
})
