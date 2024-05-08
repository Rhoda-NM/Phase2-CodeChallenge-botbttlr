import React from "react";

function SortBar({handleCategory, handleClass}){
    <div className="sortbar">
        <div className="sort">
        <h2>Sort by</h2>
      <button id="health" onClick={() => handleCategory(1)}>
        Health
      </button>
      <button id="damage" onClick={() => handleCategory(2)}>
        Damage
      </button>
      <button id="armor" onClick={() => handleCategory(3)}>
        Armor
      </button>
        </div>
        <div className="filter">
            <h2>Filter By Class</h2>
            <button id="Support" onClick={() => handleClass(1)}>
                Support
            </button>
            <button id="Medic" onClick={() => handleClass(2)}>
                Medic
            </button>
            <button id="Assault" onClick={() => handleClass(3)}>
                Assault
            </button>
            <button id="Defender" onClick={() => handleClass(4)}>
                Defender
            </button>
            <button id="Captain" onClick={() => handleClass(5)}>
                Captain
            </button>
            <button id="Witch" onClick={() => handleClass(6)}>
                Witch
            </button>
        </div>
      

      
    </div>
}
export default SortBar;