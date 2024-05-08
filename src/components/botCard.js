import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function BotCard( { bot, handleBot, dischargeBot }) {
    const { id, name, 
        avatar_url, bot_class, 
        catchphrase, armor,
         damage, health} = bot; //Destructure bot prop

    const classIcons = {
        Support: "circle icon",
        Defender: "shield alternate icon",
        Captain: "star icon",
        Witch: "magic icon",
        Assault: "fighter jet icon",
        Medic: "ambulance icon"
    } //Assign icons for each bot class

    function handleClick(id){
        handleBot(id);
        //console.log(id);
    }
    /*function handleDischarge(id) {
        dischargeBot(bot)
    }*/
    function handleDischarge(e) {
        console.log(id)
        e.stopPropagation();
        //e.preventDefault();
        // Send DELETE request to API to remove bot
        fetch(`http://localhost:3000/bots/${id}`, {
          method: "DELETE",
        })
          .then(() => {
            
            dischargeBot(bot);
          })
          .catch(error => console.error('Error discharging bot:', error));
      }

    
    return (
        <div className="ui column">
           { /*display bot card*/}
            <div 
            className="ui card"
            key={id}
            onClick={() => handleClick(id)}
            >
                <div className="image" key={id}>
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
                        <div className="ui center alignment segment basic">
                            <button
                                className="ui red mini button"
                                onClick={handleDischarge}
                            >
                                X
                            </button>
                        </div>
                        
                    </span>
                </div>
                
            </div>
        </div>
    )
}
export default BotCard;