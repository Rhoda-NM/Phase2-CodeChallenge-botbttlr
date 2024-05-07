import React from "react";
import "../App.css";
import BotCard from "./botCard";
//import BotSpecs from "./specPage";

function YourBotArmy({selectedBots, removeBot, dischargeBot}) {
    const displayBots = selectedBots.map((bot) => (
        <BotCard 
            key={bot.id}
            bot={bot}
            handleBot={removeBot}
            dischargeBot={dischargeBot}
        />       
       
    ))
    
    return (
        <div className="bot-container">
            <div className="ui four column grid">
                <h1>Your Bot Army</h1>
                <div className="row">
                    {displayBots}
                </div>
            </div>
        </div>
    )
}
export default YourBotArmy;