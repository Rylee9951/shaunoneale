import React from 'react'
import { Link } from 'react-router'
import 'assets/styles/cocktail.css'
import Cocktail1 from 'assets/images/cocktail1.png'


export default React.createClass({
  render: function (){
    return(
      <div id="cocktailContainer">
        <div className="cocktailRecipeContainer">
          <div className="cocktailPhoto">
            <img className="cocktailImage" src={Cocktail1}/>
          </div>
          <div className="summary">
            <h3 className="coctailTitle">Blood Orange, Honey & Ginger Margarita</h3>
            <p className="cocktailSummary">This is an absolutely perfect margarita the tartness of the blood orange works in harmony with the honey-ginger simple syrup used as a sweetener in this unique cocktail. Perfect for a hot summer day or as in this case when reminiscing of warmer weather during the cold windy desert months here in Las Vegas.</p>
          </div>
          <h3 className="drinkAmount">Makes 2 Drinks</h3>
          <div className="ingredients">
            <div className="ingredient">
              <h3 className="ingredientTitle">For the honey-ginger simple syrup</h3>
              <p className="eachIngredient">1/4 cup ginger syrup<br/>1/4 cup honey<br/>1/2 cup water</p>
            </div>
            <div className="ingredient">
              <h3 className="ingredientTitle">For the margarita</h3>
              <p className="eachIngredient">3 ounces honey-ginger simple syrup<br/>3 ounces tequila<br/>3 blood oranges (Juiced)<br/>1 lime (juiced)</p>
            </div>
            <div className="ingredient">
              <h3 className="ingredientTitle">Garnish</h3>
              <p className="eachIngredient">Blood orange wheels<br/>Salt for rimming the glass</p>
            </div>
          </div>
          <div className="directions">
            <h3 className="directionsTitle">To make the simple syrup</h3>
            <p className="directionsSummary">Combine all the ingredients in a small saucepan and stir to incorporate, bring to a light simmer and remove from heat. Allow to cool completely before using.</p>
          </div>
          <div className="directions">
            <h3 className="directionsTitle">To make the margarita</h3>
            <p className="directionsSummary">In a cocktail shaker add one scoop of ice, simple syrup, tequila, blood orange juice and the lime juice and shake well to combine. Salt the rim of a tall glass and fill with ice, for the cocktail over the ice and garnish with a blood orange wheel.</p>
          </div>
        </div>
      </div>
    )
  }
})
