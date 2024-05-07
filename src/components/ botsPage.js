import React, { useEffect, useState } from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";
import BotSpecs from "./specPage";

function BotsPage() {
  const [bots, setBots] = useState([]);
  const [selection, setSelection] = useState([])
  const [availableBots, setAvailableBots] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/bots")
    .then((res) => res.json())
    .then((data) => {
      setBots(data);
      setAvailableBots(data);
    });
  }, [])

  const addBot = (id) => {
    const newArmy = availableBots.find((bot) => id === bot.id);
    setSelection([...selection, newArmy]);
    const newBotList = availableBots.filter((bot) => bot.id !== newArmy.id);
    setAvailableBots(newBotList);
  }
  const removeBot = (id) => {
    const removedBot = selection.find((bot) => bot.id === id);
    const newBotList = selection.filter((bot) => bot.id !== removedBot.id);
    setSelection(newBotList);

  }
  const deleteBot = (botToRemove)=> {
    setBots(bots.filter((bot) => bot.id !== botToRemove.id));
  }
  

  return (
      <div>
          <div className="botsPage">
          <YourBotArmy selectedBots={selection} removeBot={removeBot}dischargeBot={deleteBot}/>
          

         <BotCollection allbots={availableBots} enrollBot={addBot} dischargeBot={deleteBot} />
          </div>
      </div>
  )

}
export default BotsPage;