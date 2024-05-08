import React from "react";

function SortBar({handleCategory, handleClass}){
    return (
    <div className="sortbar">
        <div className="sort">
        <h2>Sort by</h2>
      <button id="health" onClick={handleCategory}>
        Health
      </button>
      <button id="damage" onClick={handleCategory}>
        Damage
      </button>
      <button id="armor" onClick={handleCategory}>
        Armor
      </button>
        </div>
        <div className="filter">
            <h2>Filter By Class</h2>
            <button id="all" onClick={handleClass}>
                All bots
            </button>
            <button id="Support" onClick={handleClass}>
                Support
            </button>
            <button id="Medic" onClick={handleClass}>
                Medic
            </button>
            <button id="Assault" onClick={handleClass}>
                Assault
            </button>
            <button id="Defender" onClick={handleClass}>
                Defender
            </button>
            <button id="Captain" onClick={handleClass}>
                Captain
            </button>
            <button id="Witch" onClick={handleClass}>
                Witch
            </button>
        </div>
      

      
    </div>
    )
}
export default SortBar;