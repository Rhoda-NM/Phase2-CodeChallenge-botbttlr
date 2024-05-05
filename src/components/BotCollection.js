import React from "react";
import BotCard from "./botCard";

function BotCollection({allbots }) {
    //console.log(allbots)
    const botsItem = allbots.map((bot) => (
        <BotCard 
            key={bot.id}
            bot={bot}
        />       
       
    ))
        
        

    return (
        <div className="ui four column grid">
            <h2>Available Bots</h2>
            <div className="row">
                {botsItem}
            </div>
        </div>
    )
}
export default BotCollection;
