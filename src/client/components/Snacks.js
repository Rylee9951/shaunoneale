import React from 'react'
import { Link } from 'react-router'
import 'assets/styles/snacks.css'
import Snacks1 from 'assets/images/snacks1.png'
import Snacks2 from 'assets/images/snacks2.png'

export default React.createClass({
  render: function (){
    return(
      <div id="snacksContainer">
        <div className="snacksRecipeContainer">
          <div className="snacksPhoto">
            <img className="snacksImage" src={Snacks1}/>
          </div>
          <div className="snacksSummary">
            <h3 className="snacksTitle">30 Minute Homemade Blueberry and Cream Cheese Danishes</h3>
            <p className="snacksRecipeSummary">I am a big fan of this recipe, its quick, it’s simple and most importantly it is damn delicious. Using store bought puff pastry makes theses danishes incredibly simple to make leaving you with no need to run out to your local doughnut shop for your next brunch event. I like blueberries for this recipe but you can pretty much use any berry, i like to use whatever is in season and at the peak of ripeness. When i first made this recipe i cut some corners and the picture is from that first attempt so the danishes as pictured are square, take the extra time to use a ring mold to cut the puff pastry in to circles for a much better looking danish.</p>
          </div>
          <h3 className="serveAmount">Makes about 20 Danishes</h3>
          <div className="snacksIngredients">
            <div className="snacksIngredient">
              <h3 className="snacksIngredientTitle">For the Blueberry Topping</h3>
              <p className="snacksEachIngredient">1 tablespoon extra virgin olive oil<br/>1 package of blueberries<br/>3/4 cup water<br/>1/2 cup granulated sugar<br/>1/2 teaspoon kosher salt<br/>2 tablespoons lemon juice<br/>1 tablespoon grated lemon zest</p>
            </div>
            <div className="snacksIngredient">
              <h3 className="snacksIngredientTitle">For the Cream Cheese</h3>
              <p className="snacksEachIngredient">1 package cream cheese, at room temperature<br/>1/4 cup powdered sugar<br/>1/2 teaspoon kosher salt<br/>1/2 tablespoon grated lemon zest</p>
            </div>
            <div className="snacksIngredient">
              <h3 className="snacksIngredientTitle">For the Danishes</h3>
              <p className="snacksEachIngredient">1 package frozen puff pastry (2 sheets)<br/>Blueberry topping<br/>Cream Cheese mixture<br/>2 egg whites, beaten until frothy<br/>1 tablespoon water<br/>2 tablespoons turbinado sugar or cane sugar</p>
            </div>
          </div>
          <div className="snacksDirections">
            <div className="snacksDirection">
              <h3 className="snacksDirectionTitle">To make the Blueberry Topping</h3>
              <p className="snacksDirectionSummary">In a medium saucepan over medium high heat add the oil and let heat slightly, add the blueberries and cook for about 3-5 minutes or until the blueberries start to release some of their juices, stirring often. Add the water, sugar and kosher salt and continue cooking for about 8 minutes or until all have the blueberries have burst and the mixture starts to thicken into something a little looser than a jam. Add the lemon juice and zest, stir and set aside to cool until ready to make the danishes, This can be done up to a day in advance.</p>
            </div>
            <div className="snacksDirection">
              <h3 className="snacksDirectionTitle">To make the Cream Cheese</h3>
              <p className="snacksDirectionSummary">Place the cream cheese in the bowl of a stand mixer fitted with the paddle attachment, beat at medium speed until the cream cheese begins to soften. Add the powdered sugar, salt and the lemon zest and continue to beat until fully incorporated. I like to put the cream cheese mixture in a pastry bag to make building the danishes a little easier.</p>
            </div>
            <div className="snacksDirection">
              <h3 className="snacksDirectionTitle">To make the Danishes</h3>
              <p className="snacksDirectionSummary">Pre heat the oven to 350 degrees. On a lightly floured surface roll out the thawed puff pastry so it has an even thickness and it looks like you can cut 8-10 circles out of the dough. Using a ring mold cut out circles from the puff pastry, place the puff pastry circles on a baking sheet lined with a silpat. Using a fork poke several holes in the middle of each puff pastry circle where you will be placing the filling. If using a pastry bag for the cream cheese mixture, pipe out rings of the cheese mixture in the center of the puff pastry circles leaving space in the middle to add the blueberries (if not using a pastry bag simply spoon on the cheese mixture and using the back of the spoon make a small well to hold the berry mix). Once you have finished placing the cheese mixture spoon about 1 tablespoon of the blueberry mix in the center of the cream cheese. In a small bowl beat the egg whites and water until frothy, using a pastry brush lightly brush the egg whites on to the visible ring of the pastry dough, sprinkle the turbinado or cane sugar over all of the danishes and place in the oven to bake for about 15-20 minutes or until the pastry is golden brown and puffy around the edges. Remove from the oven and serve. Danishes will last 2 to 3 days if kept in an airtight container.</p>
            </div>
          </div>
        </div>
        <div className="snacksRecipeContainer2">
          <div className="snacksPhoto">
            <img className="snacksImage" src={Snacks2}/>
          </div>
          <div className="snacksSummary">
            <h3 className="snacksTitle">Modernist Quick Kimchee</h3>
            <p className="snacksRecipeSummary">Yes, I know this technically should not be considered kimchee but the flavors developed under pressure is so similar that I am sure it could fool even the most traditional kimchee fans. I love to make kimchee at home but the process of fermentation can take some time so i figured why not put a modernist spin on it and “faux-ferment” the kimchee quickly under pressure in a whipping siphon. This recipe does require special equipment but if you don't have or don't want to purchase a siphon then by all means do it the traditional way, follow the recipe and instead of adding to a siphon just let the cabbage mixture sit on the counter for a couple days, keeping an eye on any mold that may form. I suggest if your a novice fermenter than you should invest in a siphon or just avoid this recipe completely.</p>
          </div>
          <h3 className="serveAmount">Makes a lot</h3>
          <div className="snacksIngredients2">
            <div className="snacksIngredient">
              <h3 className="snacksIngredientTitle">For the Kimchee</h3>
              <p className="snacksEachIngredient">1 medium head Napa cabbage<br/>1 tablespoon kosher salt<br/>3 carrots, peeled and shredded on a box grater<br/>6 scallions, sliced paper thin on a bias<br/>1 cup daikon radish, shredded on a box grater<br/>1 tablespoon ginger, finely grated<br/>3 cloves garlic, finely minced or pressed with a garlic press<br/>3/4 cup SSAM Sauce or Gochujang<br/>2 tablespoons Sambal Olek<br/>2 tablespoons fish sauce<br/>2 tablespoons soy sauce<br/>2 tablespoons granulated sugar<br/>1 tablespoon rice wine vinegar </p>
            </div>
            <div className="snacksIngredient">
              <h3 className="snacksIngredientTitle">Special Equipment</h3>
              <p className="snacksEachIngredient">iSi Whipping Siphon<br/>6 whipping chargers</p>
            </div>
          </div>
          <div className="snacksDirections">
            <div className="snacksDirection">
              <h3 className="snacksDirectionTitle">Notes;</h3>
              <p className="snacksDirectionSummary2">SSAM Sauce is made by Chef David Chang and is his featured sauce throughout his Momofuku restaurants. It is available at <a href="http://www.momofuku.com">www.momofuku.com</a><br/>Do not fill the canister past the fill line and always release the gas from the canister before opening.</p>
            </div>
            <div className="snacksDirection">
              <h3 className="snacksDirectionTitle">To make the Kimchee</h3>
              <p className="snacksDirectionSummary">Chop the cabbage in to bite sized pieces and place in a large bowl, sprinkle the kosher salt and mix well to distribute the salt, let sit at room temperature for 1 hour to extract the moisture from the cabbage. Add the carrot, scallion, daikon radish, ginger and garlic and mix well to combine, place in the refrigerator and let sit for 2 hours. Combine the SSAM Sauce or gochujang, Sambal Olek, fish sauce, soy sauce, granulated sugar and the rice wine vinegar in a medium bowl and mix well to combine. Pour the liquid mixture over the cabbage mix and stir to coat all of the cabbage (if the cabbage looks dry after mixing add SSAM Sauce or gochujang 1 tablespoon at a time until the cabbage mix is well coated).<br/>Working in batches, transfer 1/3 of the cabbage to the siphon being careful not to fill past the fill line. Close the canister tightly and charge with 2 chargers, let the canister sit at room temperature for 30 minutes, slowly release the gas by lightly pulling down on the trigger of the canister until all the gas has been released. Open the canister and transfer the kimchee to a large bowl. Repeat this process adding all the kimchee to the bowl until you are out of cabbage mix. Serve and enjoy.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
})
