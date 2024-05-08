import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


function BotSpecs({ enlistBot, goBack }) {
    const [bot, setBot] = useState({});
    const params = useParams();
    const botId = params.id;

    useEffect(() => {
        fetch(`http://localhost:3000/bots/${botId}`)
            .then(res => res.json())
            .then(data => setBot(data))
            .catch(error => console.log(error));
    }, [botId]);
    
    const { id, name, 
        avatar_url, bot_class, 
        catchphrase, armor, 
        damage, health} = bot;

    const classIcons = {
        Support: "circle icon",
        Defender: "shield alternate icon",
        Captain: "star icon",
        Witch: "magic icon",
        Assault: "fighter jet icon",
        Medic: "ambulance icon"
    }

    function handleBack(){
        goBack();
    }
    function handleEnlist(e) {
        enlistBot();
    }

    return (
        <div className="ui segment" key={id}>
            <div className="ui two column">
                <div className="row">
                    <div className="four wide column">
                        <img src={avatar_url} alt="botImage" />
                    </div>
                    <div className="four wide column">
                        <h2> Name: {name}</h2>
                        <p>
                            <strong>Catchphrase: </strong>
                            {catchphrase}
                        </p>
                        <strong>
                            Class: {bot_class}
                            <i className={classIcons[bot_class]} />
                        </strong>
                        <br />
                        <div className="ui segment">
                            <div className="ui three column centered grid">
                                <div className="row">
                                    <div className="column">
                                        <i className="large heartbeat icon" />
                                        <strong> {health}</strong>    
                                    </div>
                                    <div className="column">
                                        <i className="large lightning icon" />
                                        <strong>  {damage} </strong>  
                                    </div>
                                    <div className="column">
                                        <i className="large shield alternate icon" />
                                        <strong>{armor} </strong>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="ui buttonfluid" onClick={handleBack}>
                            Go Back
                        </button>
                        <button className="ui button fluid" onClick={handleEnlist}>
                            Enlist
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default BotSpecs