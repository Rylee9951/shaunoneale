import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render: function (){
    return(
      <div id="dessertContainer">
        <div className="dessertRecipeContainer">
          <div className="dessertPhoto">
            <img className="dessertImage" src={dessert1}/>
          </div>
          <div className="dessertSummary">
            <h3 className="dessertTitle"></h3>
            <p className="dessertRecipeSummary"></p>
          </div>
          <h3 className="serveAmount">Serves 4</h3>
          <div className="dessertIngredients">
            <div className="dessertIngredient">
              <h3 className="dessertIngredientTitle"></h3>
              <p className="dessertEachIngredient"></p>
            </div>
          </div>
          <p className="ovenTemp">Pre heat the oven to 375 degrees</p>
          <div className="dessertDirections">
            <div className="dessertDirection">
              <h3 className="dessertDirectionTitle"></h3>
              <p className="dessertDirectionSummary"></p>
            </div>
          </div>
        </div>
        <div className="dessertRecipeContainer2">
          <div className="dessertPhoto">
            <img className="dessertImage" src={dessert2}/>
          </div>
          <div className="dessertSummary">
            <h3 className="dessertTitle"></h3>
            <p className="dessertRecipeSummary"></p>
          </div>
          <h3 className="serveAmount">Serves 4</h3>
          <div className="dessertIngredients2">
            <div className="dessertIngredient">
              <h3 className="dessertIngredientTitle"></h3>
              <p className="dessertEachIngredient"></p>
            </div>
          </div>
          <p className="ovenTemp">Pre heat the oven to 375 degrees</p>
          <div className="dessertDirections">
            <div className="dessertDirection">
              <h3 className="dessertDirectionTitle"></h3>
              <p className="dessertDirectionSummary"></p>
            </div>
          </div>
        </div>
      </div>
    )
  }
})
