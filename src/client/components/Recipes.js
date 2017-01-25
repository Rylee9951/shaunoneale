import React from 'react'
import { Link } from 'react-router'
import 'assets/styles/recipe.css'
import Family from 'assets/images/family.png'
import Classy from 'assets/images/classy.png'
import Dessert from 'assets/images/desert.png'
import Sides from 'assets/images/side.png'
import Snack from 'assets/images/snack.png'
import Cocktails from 'assets/images/cocktail.png'

export default React.createClass({
  render: function (){
    return(
      <div id="recipeContainer">
        <div className="recipe"> 
          <img className="recipeCoverphotos" src={Family}/>
          <p className="recipeGroup">The Family</p>
        </div>
        <div className="recipe"> 
          <img className="recipeCoverphotos" src={Classy}/>
          <p className="recipeGroup">The Classy</p>
        </div>
        <div className="recipe"> 
          <img className="recipeCoverphotos" src={Dessert}/>
          <p className="recipeGroup">The Dessert</p>
        </div>
        <div className="recipe"> 
          <img className="recipeCoverphotos" src={Sides}/>
          <p className="recipeGroup">The Sides</p>
        </div>
        <div className="recipe"> 
          <img className="recipeCoverphotos" src={Snack}/>
          <p className="recipeGroup">The Snacks</p>
        </div>
        <div className="recipe"> 
          <img className="recipeCoverphotos" src={Cocktails}/>
          <p className="recipeGroup">The Cocktails</p>
        </div>
      </div>
    )
  }
})
