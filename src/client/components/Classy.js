import React from 'react'
import { Link } from 'react-router'
import 'assets/styles/classy.css'
import Classy1 from 'assets/images/classy1.png'
import Classy2 from 'assets/images/classy2.png'
import Classy3 from 'assets/images/classy3.png'

export default React.createClass({
  render: function (){
    return(
      <div id="classyContainer">
        <div className="classyRecipeContainer">
          <div className="classyPhoto">
            <img className="classyImage" src={Classy1}/>
          </div>
          <div className="classySummary">
            <h3 className="classyTitle">Roasted Tri Tip with Yam Brûlée, Shrooms, Cipollini Onions and Red Wine Demi Glace</h3>
            <p className="classyRecipeSummary">I wasn't sure exactly what category to file this recipe in at first and then i plated the dish, since the plate came out very upscale looking i figured it would fit well in “The Classy” section of the website but this dish is perfect for a family meal or a fancy dinner. I wanted the red wine sauce to be extra rich in this recipe so I added more red wine than i normally would for a classic red wine reduction. If you can’t find shimeji mushrooms use regular button mushrooms cut into quarters.</p>
          </div>
          <h3 className="serveAmount">Serves 4 - 6</h3>
          <div className="classyIngredients">
            <div className="classyIngredient">
              <h3 className="classyIngredientTitle">For the Tri Tip</h3>
              <p className="classyEachIngredient">2 tablespoons mushroom powder (preferably portobello)<br/>2 tablespoons ancho powder<br/>1 teaspoon garlic powder<br/>1 teaspoon onion powder<br/>1 teaspoon harissa powder (optional)<br/>1/2 teaspoon ground coriander<br/>1/2 teaspoon ground cumin<br/>3 tablespoons kosher salt<br/>2 tablespoons freshly ground black pepper<br/>2-3 pound tri tip<br/>2 tablespoons extra virgin olive oil</p>
            </div>
            <div className="classyIngredient">
              <h3 className="classyIngredientTitle">For the Yam Brûlée </h3>
              <p className="classyEachIngredient">4 baby yams, cut in half lengthwise<br/>2 tablespoons extra virgin olive oil<br/>3 sprigs rosemary<br/>Salt and freshly ground black pepper<br/>1 tablespoon brown sugar</p>
            </div>
            <div className="classyIngredient">
              <h3 className="classyIngredientTitle">For the Red Wine Sauce</h3>
              <p className="classyEachIngredient">1 tablespoon extra virgin olive oil<br/>2 shallots, roughly chopped<br/>4 cloves of garlic, smashed<br/>3 cups red wine (preferably cabernet)<br/>1/4 cup balsamic vinegar<br/>1 1/2 tablespoon beef demi glace<br/>1 1/2 cup beef stock<br/>6 tablespoons unsalted butter<br/>Salt & freshly ground black pepper to taste</p>
            </div>
            <div className="classyIngredient">
              <h3 className="classyIngredientTitle">For the Cipollini Onions</h3>
              <p className="classyEachIngredient">12-16 cipollini onions, peeled<br/>1 tablespoon extra virgin olive oil<br/>Salt & freshly ground black pepper<br/>1/2 cup malt vinegar</p>
            </div>
            <div className="classyIngredient">
              <h3 className="classyIngredientTitle">For the Shimeji Mushrooms</h3>
              <p className="classyEachIngredient">1 tablespoon extra virgin olive oil<br/>Salt & freshly ground black pepper </p>
            </div>
            <div className="classyIngredient">
              <h3 className="classyIngredientTitle">Garnish</h3>
              <p className="classyEachIngredient">Micro kale greens</p>
            </div>
          </div>
          <div className="classyDirections">
            <div className="classyDirection">
              <h3 className="classyDirectionTitle">To make the Tri Tip</h3>
              <p className="classyDirectionSummary">Pre heat the oven to 375 degree. Combine all the ingredients for the trip tip except for the meat and the olive oil in a small bowl to make the rub for the tri tip, When thoroughly combined evenly spread over the try tip and allow to sit at room temperature for 30-45 minutes. Heat a large cast iron skillet over high heat until smoking, add the olive oil and let heat for 30 seconds. Place the tri tip in the skillet and brown on all sides roughly 2  minutes per side on all sides. When browned place on a baking sheet with a rack and place in the oven until the internal temperature is 128 degrees about 30 to 45 minutes. Remove from the oven and tent with foil to rest for 15 to 20 minutes.</p>
            </div>
            <div className="classyDirection">
              <h3 className="classyDirectionTitle">To make the Yam Brûlée</h3>
              <p className="classyDirectionSummary">Place the yams on a baking sheet lined with parchment paper and brush with the olive oil. Break the rosemary into several pieces and scatter among the yams and season with salt and freshly ground black pepper. Place in the oven and cook until tender about 30 minutes, remove from oven. Right before serving sprinkle with the brown sugar and using a brûlée torch brown the sugar on top of the yams. If you do not have a torch throw the yams in the oven and set to broil cook for about 2 minutes.</p>
            </div>
            <div className="classyDirection">
              <h3 className="classyDirectionTitle">For the Red Wine Sauce</h3>
              <p className="classyDirectionSummary">In a large skillet heat the olive oil over medium high heat, add the shallot season with salt and pepper and cook, stirring often for 5 minutes, add the garlic and continue stirring and cooking for 5 minutes. Add the red wine, balsamic vinegar and the beef demi glace and reduce by 2/3 approximately 20 minutes. Add the beef stock and reduce by 2/3 again, about 20 minutes. Strain the sauce through a fine mesh sieve and return to a cleaned skillet. Return the sauce to a boil and cook for 5 more minutes, reduce heat to low and whisk in the butter 1 tablespoon at a time adding the next only after the butter has completely dissolved. Season with salt and freshly ground black pepper and set aside for serving.</p>
            </div>
            <div className="classyDirection">
              <h3 className="classyDirectionTitle">For the Cipollini Onions</h3>
              <p className="classyDirectionSummary">Heat an oven safe skillet over high heat, add the olive oil and bring to smoking. Add the onions to the pan and season with salt and freshly ground black pepper, cook the onions for about 8 minutes stirring often. Place the skillet in the oven and cook for roughly 10 minutes or until onions are fork tender. Set aside for serving.</p>
            </div>
            <div className="classyDirection">
              <h3 className="classyDirectionTitle">To make the Shimeji Mushrooms</h3>
              <p className="classyDirectionSummary">In a small skillet over medium high heat, heat the olive oil until smoking add the mushrooms and cook stirring often for 2 to 3 minutes. Season with salt and pepper and add butter cook for 1 more minute. Set aside for serving.</p>
            </div>
            <div className="classyDirection">
              <h3 className="classyDirectionTitle">To Serve</h3>
              <p className="classyDirectionSummary">Slice the trip tip about 1/4 inch thick and plate as pictured or serve family style.</p>
            </div>
          </div>
        </div>
        <div className="classyRecipeContainer2">
          <div className="classyPhoto">
            <img className="classyImage" src={Classy2}/>
          </div>
          <div className="classySummary">
            <h3 className="classyTitle">Roasted Butternut Squash Soup</h3>
            <p className="classyRecipeSummary">This is a great winter soup even though it is rich and warming it also has subtle tropical notes that can transport you to a summer beach vacation just by closing your eyes. I took some inspiration from the cuisine of Thailand in this soup using both coconut oil and coconut milk, very popular ingredients in Thai soups. This dish can become a gorgeous presentation with a little extra time spent on the garnishes but if you don't have a small melon baller you can skip the garnishing steps and just make the soups.</p>
          </div>
          <h3 className="serveAmount">Serves 6</h3>
          <div className="classyIngredients2">
            <div className="classyIngredient">
              <h3 className="classyIngredientTitle">For the Soup</h3>
              <p className="classyEachIngredient">3 large butternut squash<br/>2 tablespoons coconut oil, melted<br/>1 teaspoon crushed red pepper<br/>1 teaspoon mild curry powder<br/>Salt & freshly ground pepper<br/>1 15 ounce can full fat coconut milk<br/>1 tablespoons extra virgin olive oil<br/>2 tablespoons ginger, peeled and grated<br/>2 cloves garlic, smashed<br/>2 stalks lemongrass, bruised with the back of a chefs knife<br/>2 cups chicken stock<br/>1 cup whole milk</p>
            </div>
            <div className="classyIngredient">
              <h3 className="classyIngredientTitle">For the Garnish</h3>
              <p className="classyEachIngredient">21 squash balls, removed from the roasted squash for the soup<br/>1 tablespoon coconut oil, melted<br/>2 carrots, thin peels with a vegetable peeler<br/>Micro cilantro greens<br/>Black sesame seeds, toasted<br/>White sesame seeds, toasted<br/>Sesame oil</p>
            </div>
          </div>
          <div className="classyDirections">
            <div className="classyDirection">
              <h3 className="classyDirectionTitle">For the Soup</h3>
              <p className="classyDirectionSummary">Pre heat the oven to 375 degrees. Cut the butternut squash in half lengthwise exposing the flesh, remove the seeds and guts from the squash and set skin side down on a baking sheet lined with parchment paper. Brush on the melted coconut oil and season with the crush red pepper. mild curry powder, salt and freshly ground black pepper. Place in the oven and roast for about 30 minutes or until the squash is beginning to soften. At this point remove two halves of the squash and using a melon baller remove 21 balls of squash and set on a separate baking sheet and set aside for garnish and finishing, return the squash to the oven if there is much flesh left in the skins. Continue cooking the squash for another 30 minutes or until the squat is completely tender, you should be able to insert a fork without applying any pressure. Remove from the oven and let sit until cool enough to handle. Scrape the flesh of the squash into a high powered blender along with half of the can of coconut milk, (shake can well before opening), ginger and garlic blend on medium high to high until smooth. Strain the soup through a fine mesh strainer into a large pot over medium high heat, add the lemongrass, chicken stock and whole milk and cook stirring often for 30 minutes.</p>
            </div>
            <div className="classyDirection">
              <h3 className="classyDirectionTitle">For the Garnish</h3>
              <p className="classyDirectionSummary">While the soup is cooking in the pot, coat the squash balls with the melted coconut oil and place in the oven until just tender about 15 minutes (They should hold there shape but be tender enough to cut with a fork), set aside for plating. Place the carrot peels in a bowl of ice water for about 20 minutes to allow them to curl up for plating.</p>
            </div>
            <div className="classyDirection">
              <h3 className="classyDirectionTitle">To Plate</h3>
              <p className="classyDirectionSummary">In a shallow bowl, place the squash balls around one edge of the bowl, gently place the carrot strips on and around the squash, place several pieces of micro cilantro greens in the carrot curls. Pour in the squash soup (after removing the lemongrass) about 1/4 the way up the squash balls. Sprinkle the sesame seeds along the edge of the garnish and drizzle on a couple drops of sesame oil.</p>
            </div>
          </div>
        </div>
        <div className="classyRecipeContainer3">
          <div className="classyPhoto">
            <img className="classyImage" src={Classy3}/>
          </div>
          <div className="classySummary">
            <h3 className="classyTitle">Squid Ink and Lobster Ravioli with Lobster Reduction and Lemon Air</h3>
            <p className="classyRecipeSummary">This dish is a perfect example of how a dish is never truly completed, the base of this dish is a lobster ravioli that i have been cooking for years and so much of a favorite that the original recipe is featured in my cookbook “My Modern American Table”. This spin incorporates a squid ink pasta dough and instead of a lemon cream sauce as my original recipe featured I have created a unique lemon air using soy lecithin powder.</p>
          </div>
          <h3 className="serveAmount">Serves 4</h3>
          <div className="classyIngredients3">
            <div className="classyIngredient">
              <h3 className="classyIngredientTitle">For the Lobster Filling:</h3>
              <p className="classyEachIngredient">1 to 2 live lobsters, blanched, meat removed and shells reserved<br/>½ cup plus 2 tablespoons mascarpone cheese<br/>1 large egg, lightly beaten<br/>1 tablespoon all-purpose flour<br/>1 tablespoon minced fresh tarragon<br/>1 tablespoon minced chives<br/>1 tablespoon lemon zest<br/>1 tablespoon lemon juice<br/>Salt and freshly ground black pepper</p>
            </div>
            <div className="classyIngredient">
              <h3 className="classyIngredientTitle">For the Squid in Pasta Dough</h3>
              <p className="classyEachIngredient">2 cups all-purpose flour<br/>2 large eggs<br/>4 large egg yolks<br/>1 teaspoon salt<br/>4 teaspoons said ink<br/>1 tablespoon cold water, plus more as needed<br/>Semolina flour for dusting</p>
            </div>
            <div className="classyIngredient">
              <h3 className="classyIngredientTitle">For the Lobster Reduction:</h3>
              <p className="classyEachIngredient">1 tablespoon extra virgin olive oil<br/>1 carrot, finely diced<br/>2 celery stalks, finely diced<br/>1 large shallot, minced<br/>3 cloves garlic, minced<br/>½ cup Pernod<br/>1 ½ cups Shellfish Stock<br/>4 tablespoons unsalted butter<br/>Salt and freshly ground black pepper</p>
            </div>
            <div className="classyIngredient">
              <h3 className="classyIngredientTitle">For the Lemon Air</h3>
              <p className="classyEachIngredient">1 cup heavy cream<br/>Zest of 3 lemons<br/>Salt to taste<br/>8 grams soy lecithin powder</p>
            </div>
            <div className="classyIngredient">
              <h3 className="classyIngredientTitle">For the Garnish</h3>
              <p className="classyEachIngredient">Butter poached lobster claw meat<br/>Micro cilantro greens<br/>Micro chives<br/>Bulls blood micro greens<br/>Shaved Parmesan</p>
            </div>
          </div>
          <div className="classyDirections">
            <div className="classyDirection">
              <h3 className="classyDirectionTitle">To make the Lobster Filling:</h3>
              <p className="classyDirectionSummary">Place the roughly chopped lobster meat in a medium bowl. Add the mascarpone, egg, flour, tarragon, chives lemon zest and juice and mix lightly to combine, taking care not to break the lobster meat apart. Season with salt and pepper. Cover the bowl with plastic wrap and place the filling in the refrigerator until you are ready to stuff the ravioli.</p>
            </div>
            <div className="classyDirection">
              <h3 className="classyDirectionTitle">To make the Dough:</h3>
              <p className="classyDirectionSummary">Combine the all-purpose flour, whole eggs, egg yolks, and salt in the bowl of a food processor fitted with the blade and pulse until combined. Add the squid ink and the cold water and pulse until mixture looks like wet sand and holds its shape when formed into a small ball. If the dough seems too sticky, add a bit more flour. If the dough is too dry, add another teaspoon of water, pulse again, and check. Continue adding 1 teaspoon of water at a time until you reach the correct consistency. Move the dough to a floured surface and knead until the dough is smooth, solid, and elastic, 2 to 3 minutes. Tightly wrap the dough in plastic wrap and leave it on the counter to rest for 1 hour, or refrigerate it for up to 1 day (take it out of the refrigerator to rest, covered, at room temperature for 1 hour before you roll it out).<br/>Line a baking sheet with parchment paper and sprinkle it generously with semolina flour. Lightly dust the work surface with semolina flour. Cut off one quarter of the dough and wrap the remaining dough in plastic wrap. Dust the dough lightly with flour and flatten it out with your hands into a rectangle. Roll the pasta through the thickest setting of your pasta machine twice, continuing to flour the dough to prevent sticking as needed. Set the machine to the next lowest setting and repeat. Continue to roll the pasta until it is very thin, ideally thin enough to see through it. If the pasta becomes too long to handle, cut it in half. Once the pasta sheet is rolled out, dust it lightly with semolina flour, set it onto a baking sheet, and cover with a slightly dampened clean kitchen towel. Repeat with the remaining dough, laying a sheet of plastic wrap between each finished pasta sheet before adding the next, ending with a damp towel on top.</p>
            </div>
            <div className="classyDirection">
              <h3 className="classyDirectionTitle">To Fill the Ravioli:</h3>
              <p className="classyDirectionSummary">Line a baking sheet with parchment paper and dust with semolina flour. Lay one pasta sheet onto your work surface and scoop 1 tablespoon of filling in two rows down the pasta sheet, setting them diagonally in a zigzag-like pattern and leaving 1 inch of space around each mound of filling. Dip your finger in a small bowl of water and run your finger around the edges of the filling to help the pasta stick together. Place a second sheet of pasta on top of the filling, very gently stretching the dough to reach and meet the edges of the bottom pasta sheet. Carefully work your way down the sheet and around each ravioli, sealing in the filling as you go. It is important to get out all of the air in the filling pocket so the ravioli don’t explode when cooking. Using a 3-inch round cutter or a ravioli stamp, cut the ravioli and place them onto the baking sheet. Cover with plastic wrap and place in the refrigerator until ready to cook.</p>
            </div>
            <div className="classyDirection">
              <h3 className="classyDirectionTitle">To make the Lobster Reduction:</h3>
              <p className="classyDirectionSummary">Heat the oil in a large skillet over medium heat. Add the carrots and celery and cook for 2 minutes, or until they begin to soften. Add the shallots and garlic and cook, stirring frequently, for 2 minutes, or until the vegetables are translucent and lightly colored. Pour in the Pernod and carefully ignite it with a stick lighter. When the flame has died out, add the shellfish stock, increase the heat to medium-high, and bring to a boil. Cook until the liquid is reduced by half, about 8 minutes. Strain the reduction through a fine-mesh strainer, wipe out the skillet of any solids, and return the reduction to the pan. Place over medium-high heat, bring to a boil, and cook for 3 minutes, or until the liquid lightly coats the back of a spoon. Turn off the heat and whisk in the butter 1 tablespoon at a time. Transfer the sauce to a squeeze bottle and set aside for plating.</p>
            </div>
            <div className="classyDirection">
              <h3 className="classyDirectionTitle">To Cook the Ravioli:</h3>
              <p className="classyDirectionSummary">Place a large pot of water over high heat and bring to a rolling boil. Salt the water. Add 10 ravioli and cook for 2 minutes, or until the ravioli begin to float. While the ravioli are cooking, reheat the cream sauce over low heat until simmering. Add the ravioli to the skillet along with 2 teaspoons of the pasta cooking liquid and cook, basting for 1 minute to lightly coat the pasta, then use a slotted spoon to remove them from the skillet to plates. Spoon a little of the sauce over the ravioli. Repeat with the remaining ravioli.</p>
            </div>
            <div className="classyDirection">
              <h3 className="classyDirectionTitle">To make the Demo Air:</h3>
              <p className="classyDirectionSummary">In a medium sauce pot over medium high heat bring the heavy cream and lemon zest to a light simmer an hold at a simmer for 10 minutes, remove from heat and allow to steep for 30 minutes. Bring back to a simmer and season with salt to taste. Add the soy lecithin powder and whisk well. Transfer to a high sided bowl and using an emersion blender foam the liquid to create firm air bubbles. This must be done right before serving the dish.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
})
