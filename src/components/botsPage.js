import React, { useEffect, useState } from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";
//import BotSpecs from "./specPage";
import SortBar from "./SortBar";

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


  function handleClass(e) {
    if(e.target.id === 'all'){
      setAvailableBots(bots);
    }
    else{
      const botClass= bots.filter((bot) => bot.bot_class === e.target.id);
      setAvailableBots(botClass);

    }
    
  }
  function handleCategory(e){
    const sortBy = e.target.id;
    const sortedBots = bots.slice().sort((a, b) => b[sortBy] - a[sortBy]);
    setAvailableBots(sortedBots);
    //alert(`you are sorting by: ${sortBy}`);
  }

  const addBot = (id) => {
    const newArmy = availableBots.find((bot) => id === bot.id);
    const classList = selection.filter((bot) => bot.bot_class === newArmy.bot_class);
    if(classList.length === 0) {
      setSelection([...selection, newArmy]);
      const newBotList = availableBots.filter((bot) => bot.id !== newArmy.id);
      setAvailableBots(newBotList);
    }
    else {
      alert(`You can only enroll enroll one bot from ${newArmy.bot_class} class`)
    }
    
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
          <div className="sortbar">
          <SortBar handleClass={handleClass} handleCategory={handleCategory} />
          </div>
         <BotCollection allbots={availableBots} enrollBot={addBot} dischargeBot={deleteBot} />
          </div>
      </div>
  )

}
export default BotsPage;