import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render: function (){
    return(
      <div id="sidesContainer">
        <div className="sidesRecipeContainer">
          <div className="sidesPhoto">
            <img className="sidesImage" src={sides1}/>
          </div>
          <div className="sidesSummary">
            <h3 className="sidesTitle"></h3>
            <p className="sidesRecipeSummary"></p>
          </div>
          <h3 className="serveAmount">Serves 4</h3>
          <div className="sidesIngredients">
            <div className="sidesIngredient">
              <h3 className="sidesIngredientTitle"></h3>
              <p className="sidesEachIngredient"></p>
            </div>
          </div>
          <p className="ovenTemp">Pre heat the oven to 375 degrees</p>
          <div className="sidesDirections">
            <div className="sidesDirection">
              <h3 className="sidesDirectionTitle"></h3>
              <p className="sidesDirectionSummary"></p>
            </div>
          </div>
        </div>
        <div className="sidesRecipeContainer2">
          <div className="sidesPhoto">
            <img className="sidesImage" src={sides2}/>
          </div>
          <div className="sidesSummary">
            <h3 className="sidesTitle"></h3>
            <p className="sidesRecipeSummary"></p>
          </div>
          <h3 className="serveAmount">Serves 4</h3>
          <div className="sidesIngredients2">
            <div className="sidesIngredient">
              <h3 className="sidesIngredientTitle"></h3>
              <p className="sidesEachIngredient"></p>
            </div>
          </div>
          <p className="ovenTemp">Pre heat the oven to 375 degrees</p>
          <div className="sidesDirections">
            <div className="sidesDirection">
              <h3 className="sidesDirectionTitle"></h3>
              <p className="sidesDirectionSummary"></p>
            </div>
          </div>
        </div>
      </div>
    )
  }
})
