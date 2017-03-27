import React from 'react'
import { Link } from 'react-router'
import 'assets/styles/family.css'
import Family1 from 'assets/images/family1.png'
import Family2 from 'assets/images/family2.png'

export default React.createClass({
  render: function (){
    return(
      <div id="familyContainer">
        <div className="familyRecipeContainer">
          <div className="familyPhoto">
            <img className="familyImage" src={Family1}/>
          </div>
          <div className="familySummary">
            <h3 className="familyTitle">Honey Mustard Pork Tenderloin with Honey Steamed Broccolini and Roasted Purple Potatoes</h3>
            <p className="familyRecipeSummary">This pork tenderloin preparation is delicious and simple, it works great for a weeknight family dinner or with a little attention spent on plating can be an impressive dish for a romantic date night dinner. If broccolini is unavailable feel free to substitute regular broccoli as it works great here also.</p>
          </div>
          <h3 className="serveAmount">Serves 4</h3>
          <div className="familyIngredients">
            <div className="familyIngredient">
              <h3 className="familyIngredientTitle">For the Roasted Baby Purple Potatoes</h3>
              <p className="familyEachIngredient">1 pound baby purple potatoes<br/>3 sprigs rosemary<br/>5 sprigs thyme<br/>5 cloves garlic<br/>2 tablespoons extra virgin olive oil<br/>Salt and freshly ground black pepper to taste</p>
            </div>
            <div className="familyIngredient">
              <h3 className="familyIngredientTitle">For the Pork Tenderloin</h3>
              <p className="familyEachIngredient">2 pounds pork tenderloin<br/>2 tablespoons kosher salt<br/>2 tablespoons freshly ground black pepper<br/>1 tablespoon mustard powder<br/>1/2 Tablespoon ancho powder<br/>2 tablespoons extra virgin olive oil</p>
            </div>
            <div className="familyIngredient">
              <h3 className="familyIngredientTitle">For the Honey Mustard Glaze</h3>
              <p className="familyEachIngredient">1/2 cup dijon mustard<br/>1/2 good quality honey<br/>1 tablespoon Sriracha<br/>1 tablespoon cider vinegar<br/>Salt and freshly ground black pepper to taste</p>
            </div>
            <div className="familyIngredient">
              <h3 className="familyIngredientTitle">For the Broccolini</h3>
              <p className="familyEachIngredient">1 pound broccolini<br/>1 cup honey (divided)<br/>1 cup water<br/>4 tablespoons butter<br/>Salt and freshly ground black pepper to taste</p>
            </div>
            <div className="familyIngredient">
              <h3 className="familyIngredientTitle">Garnish</h3>
              <p className="familyEachIngredient">Pink peppercorns<br/>Micro radish greens</p>
            </div>
          </div>
          <p className="ovenTemp">Pre heat the oven to 375 degrees</p>
          <div className="familyDirections">
            <div className="familyDirection">
              <h3 className="familyDirectionTitle">To make the Roasted Baby Purple Potatoes</h3>
              <p className="familyDirectionSummary">Cut the purple potatoes in half lengthwise, in a large bowl combine the purple potatoes, rosemary, thyme, garlic, extra. virgin olive oil, salt and freshly ground back pepper and toss to coat the potatoes. Line a baking sheet with parchment paper and pour the potatoes on to the sheet. Try to arrange the potatoes so that all the cut sides are facing down. Place in the oven and roast until tender, about 30 minutes.</p>
            </div>
            <div className="familyDirection">
              <h3 className="familyDirectionTitle">To make the Pork Tenderloin</h3>
              <p className="familyDirectionSummary">Place the pork tenderloin on a baking sheet. Combine the salt, pepper, ancho powder and the mustard powder in a small bowl and stir to combine, season the pork heavily with the seasoning mixture. Place a large cast iron skillet and heat over high heat until smoking, add the extra virgin olive oil and let heat for about 30 seconds. Place the pork in the skillet and sear until brown on all sides about 1 minute per side.
Remove the pork to a sheet pan and let cool for 5 minutes, while the meat is cooling make the honey mustard glaze. Combine the mustard, honey, Sriracha, cider vinegar, salt and freshly ground black pepper in a small bowl and stir well to combine. Once the pork has cooled, liberally brush the glaze on to the pork tenderloin and place in the oven to finish cooking. Pork should cook to about medium with an internal temp of roughly 150 degrees about 8 minutes in the oven. Rest pork tenderloin for 10 minutes.</p>
            </div>
            <div className="familyDirection">
              <h3 className="familyDirectionTitle">To make the Honey Steamed Broccolini</h3>
              <p className="familyDirectionSummary">In a large pot fitted with a steamer basket add 1 cup of water and 3/4 cup of the honey and bring to a boil. Place the broccolini in the steamer basket and season with salt and freshly ground black pepper, place the lid on the pot and steam for 8 minutes. Remove the lid and scatter the butter around the broccolini, toss to distribute replace cover and steam for 2 minutes. Remove over and pour over remaining honey and stir to distribute, continue steaming for 2 minutes. Remove from heat and serve.</p>
            </div>
            <div className="familyDirection">
              <h3 className="familyDirectionTitle">To Plate</h3>
              <p className="familyDirectionSummary">Serve family style or plate as pictured.</p>
            </div>
          </div>
          
        </div>
        <div className="familyRecipeContainer2">
          <div className="familyPhoto">
            <img className="familyImage" src={Family2}/>
          </div>
          <div className="familySummary">
            <h3 className="familyTitle">Pan Seared Orange Roughy with Eggplant Puree, Roasted Cauliflower and White Wine Cream Sauce</h3>
            <p className="familyRecipeSummary">Orange Roughy is very much an under appreciated fish, I personally love it! Since it is a reasonably priced fish i decided to make this family meal something special, with a little finesse  while plating and a silky smooth cream sauce to complement the fish this dish is a guaranteed hit for a weeknight meal with class.</p>
          </div>
          <h3 className="serveAmount">Serves 4</h3>
          <div className="familyIngredients2">
            <div className="familyIngredient">
              <h3 className="familyIngredientTitle">For the Eggplant Puree</h3>
              <p className="familyEachIngredient">3 Japanese eggplants<br/>1 tablespoon extra virgin olive oil<br/>1/2 cup heavy cream<br/>Salt and freshly ground black pepper to taste</p>
            </div>
            <div className="familyIngredient">
              <h3 className="familyIngredientTitle">For the Roasted Cauliflower</h3>
              <p className="familyEachIngredient">1 small head of cauliflower, broken into quarter sized pieces<br/>2 tablespoons extra virgin olive oil<br/>Salt and freshly ground black pepper to taste</p>
            </div>
            <div className="familyIngredient">
              <h3 className="familyIngredientTitle">For the White Wine Cream Sauce</h3>
              <p className="familyEachIngredient">1 tablespoon extra virgin olive oil<br/>2 shallots, roughly chopped<br/>2 cloves garlic, smashed<br/>1 cup white wine<br/>3/4 cup heavy cream<br/>1 tablespoon grated orange zest<br/>1 tablespoon, cilantro, finely chopped<br/>Salt and white pepper to taste</p>
            </div>
            <div className="familyIngredient">
              <h3 className="familyIngredientTitle">For the Orange Roughy</h3>
              <p className="familyEachIngredient">2 tablespoons extra virgin olive oil<br/>4 Orange Roughy filets, around 8 ounces each<br/>Red curry powder (optional)<br/>Salt to taste</p>
            </div>
            <div className="familyIngredient">
              <h3 className="familyIngredientTitle">Garnish</h3>
              <p className="familyEachIngredient">Micro cilantro greens<br/>Radish, sliced paper thin<br/>Pink peppercorn </p>
            </div>
          </div>
          <div className="familyDirections">
            <div className="familyDirection">
              <h3 className="familyDirectionTitle">To make the Eggplant Puree</h3>
              <p className="familyDirectionSummary">Pre heat the oven to 375 degrees. Place the eggplants on a baking sheet lined with parchment paper, pierce the skin several times with a for to prevent exploding eggplants and coat with the olive oil, season with salt and pepper and bake for 30 minutes or until the eggplants are very soft. Remove from oven and place the eggplants in a bowl and cover with saran wrap, let sit until cool enough to handle, while cooling place the cream in a small pot over low heat to warm. When cooled, cut the eggplant in half lengthwise and using a spoon scrape out the flesh, discarding the skin. Add the eggplant to a blender and blend on medium high slowly adding the cream until very smooth (you may not need all the cream, depending on the size of the eggplant). Season with salt and freshly ground pepper to taste and set aside for plating.</p>
            </div>
            <div className="familyDirection">
              <h3 className="familyDirectionTitle">To make the Roasted Cauliflower</h3>
              <p className="familyDirectionSummary">Place the cauliflower florets in a large bowl and add the olive oil, season with salt and freshly ground black pepper and place on a baking sheet lined with parchment paper. Bake for about 20 minutes or until the cauliflower has softened and is beginning to brown and even burn in some spot (the crispy bites are the best). Remove from the oven and set aside for plating.</p>
            </div>
            <div className="familyDirection">
              <h3 className="familyDirectionTitle">To make the White Wine Cream Sauce</h3>
              <p className="familyDirectionSummary">In a large skillet over medium high heat add the olive oil and heat until shimmering, add the shallots and season with salt cook stirring often for 5 minutes or until the shallots are translucent, stirring often. Add the garlic and continue cooking for 5 more minutes. Pour in the white wine and reduce by 2/3, add the heavy cream and continue cooking over medium heat for 5 minutes. Strain the sauce and return the liquid to the cleaned pan, discarding the solids. Continue to cook until sauce begins to thicken, add the orange zest and cook for 2 minutes, remove from the heat and stir in the cilantro, season with salt and white pepper to taste.</p>
            </div>
            <div className="familyDirection">
              <h3 className="familyDirectionTitle">To make the Orange Roughy</h3>
              <p className="familyDirectionSummary">Place a large cast iron skillet over high heat and heat until almost smoking, add the oil and let heat for 1 minute. Season the fish with the curry powder and salt. place the fish in the skillet and cook for 3 minutes, flip the fish and place the skillet in the oven to finish cooking about 5 minutes (depending on the thickness of the fish). Remove the fish from the oven and place on a wire rack over a baking sheet.</p>
            </div>
            <div className="familyDirection">
              <h3 className="familyDirectionTitle">For Plating</h3>
              <p className="familyDirectionSummary">Using a medium sized spoon place a dollop of the eggplant puree on the side of the plate, quickly move your spoon across the plate creating a nice design with the puree. Place a scoop of the cauliflower on the skinny side of the puree and place the fish on top of the cauliflower. Pour a spoonful of sauce over each piece of fish and top with a small pile of the micro cilantro and 3 of the thinly sliced radishes, finish with a few pink peppercorns and serve.</p>
            </div>
          </div>
          
        </div>
      </div>
    )
  }
})
