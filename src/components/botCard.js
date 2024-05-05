import React from "react";
import "../App.css";

function BotCard( { bot }) {
    const { id, name, 
        avatar_url, bot_class, 
        catchphrase, armor, updated_at, 
        created_at, damage, health} = bot;

    const classIcons = {
        Support: "circle icon",
        Defender: "shield alternate icon",
        Captain: "star icon",
        Witch: "magic icon",
        Assault: "fighter jet icon",
        Medic: "ambulance icon"
    }
    
    return (
        <div className="ui column">
            <div className="ui card">
                <div className="image">
                    <img alt="bot img" src={avatar_url} />
                </div>
                <div className="content">
                    <div className="header">
                        {name}
                        <i className= {classIcons[bot_class]} />
                    </div>
                    <div className=" meta ">
                        <small>{catchphrase} </small>
                    </div>
                </div>
                <div className="extra content">
                    <span>
                        <i className="heartbeat icon" />
                        {health}
                    </span>
                    <span>
                        <i className="lightning icon" />
                        {damage}
                    </span>
                    <span>
                        <i className="shield alternate icon" />
                        {armor}
                    </span>
                </div>
                
            </div>
        </div>
    )
}
export default BotCard;