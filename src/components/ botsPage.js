import React, { useEffect, useState } from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";

function BotsPage() {
    const [bots, setBots] = useState([]);

    useEffect(() => {
      fetch("http://localhost:3000/bots")
      .then((res) => res.json())
      .then((data) => {
        setBots(data);
      });
    }, [])
    //console.log(bots);

    return (
        <div>
            <div>
            <YourBotArmy />

            </div>
            <div>
                <BotCollection allbots={bots} />
            </div>
        </div>
    )

}
export default BotsPage;