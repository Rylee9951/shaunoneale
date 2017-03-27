import React from 'react'
import { Link } from 'react-router'
import 'assets/styles/recipe.css'
import Family from 'assets/images/single_family1.png'
import Classy from 'assets/images/single_classy1.png'
import Dessert from 'assets/images/single_dessertCover.png'
import Sides from 'assets/images/single_side.png'
import Snack from 'assets/images/snacks1.png'
import Cocktails from 'assets/images/single_cocktail1.png'
//temporary
// import Under from 'assets/images/ucp.png'
// import 'assets/styles/blog.css'

export default React.createClass({
  render: function (){
    return(
      <div id="recipeContainer">
        <div className="recipePhotoContainer">
          <div className="recipe">
            <Link to="/family"> 
              <img className="recipeCoverphotos" src={Family}/>
              <p className="recipeGroup">The Family</p>
            </Link>
          </div>
          <div className="recipe">
            <Link to="/classy"> 
              <img className="recipeCoverphotos" src={Classy}/>
              <p className="recipeGroup">The Classy</p>
            </Link>
          </div>
          <div className="recipe">
            <Link to="/dessert"> 
              <img className="recipeCoverphotos" src={Dessert}/>
              <p className="recipeGroup">The Dessert</p>
            </Link>
          </div>
          <div className="recipe">
            <Link to="/sides"> 
              <img className="recipeCoverphotos" src={Sides}/>
              <p className="recipeGroup">The Sides</p>
            </Link>
          </div>
          <div className="recipe">
            <Link to="/snacks"> 
              <img className="recipeCoverphotos" src={Snack}/>
              <p className="recipeGroup">The Snacks</p>
            </Link>
          </div>
          <div className="recipe">
            <Link to="/cocktails"> 
              <img className="recipeCoverphotos" src={Cocktails}/>
              <p className="recipeGroup">The Cocktails</p>
            </Link>
          </div>
        </div>
      </div>
    )
  }
})



//<img className="under" src={Under}/>
