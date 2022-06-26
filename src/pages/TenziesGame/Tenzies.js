import React from "react";
import "./style.css";
import Dice from "./Dice";
import { nanoid } from "nanoid";
import Confetti from 'react-confetti'

export default function Tenzies() {
  const [dice, setDice] = React.useState(newDice());
  const [tenzies, setTensizes] = React.useState(false);

  React.useEffect(() => {
    console.log("useeffect");
    const allHeld = dice.every((die) => die.isHeld);
    const firstValue = dice[0].value;
    const allSomeHeld = dice.every((die) => die.value === firstValue);
    if (allHeld && allSomeHeld) {
      setTensizes(true);
    //   alert("you won!!!");
    }
  }, [dice]);

  function getRandomNum(min, max) {
    return Math.floor(Math.random() * max + min);
  }

  function generatorNewDice() {
    return {
      value: getRandomNum(1, 6),
      isHeld: false,
      id: nanoid(),
    };
  }

  function newDice() {
    let newArray = [];
    for (let i = 0; i < 10; i++) {
      newArray.push(generatorNewDice());
    }
    return newArray;
  }

  function holdDice(id) {
    setDice((prevDie) =>
      prevDie.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
      })
    );
  }

  const dieElement = dice.map((dice) => {
    return (
      <Dice
        key={dice.id}
        value={dice.value}
        isHeld={dice.isHeld}
        holdDice={() => holdDice(dice.id)}
      />
    );
  });

  const rollDice = () => {
    if(!tenzies){
        setDice((prevDie) =>
            prevDie.map((die) => {
                return die.isHeld ? die : generatorNewDice();
            })
        );
    }else{
        setTensizes(false);
        setDice(newDice())
    }
    
  };

  return (
    <div className="container-ten">
        { tenzies && <Confetti />}
      <div className="ten-game">
        <main className="ten-game_main">
            
          <h1>Tenzies</h1>
          <p className="ten-game_main_p">
            Roll until all dice are the same.Click each die to freeze it at its
            current value between rolls.
          </p>
          <section className="ten-game_section">
            <div className="dies-container">{dieElement}</div>
            <button className="roll-btn" onClick={rollDice}>
              {tenzies ? "New Game" : "Roll"}
            </button>
          </section>
        </main>
      </div>
    </div>
  );
}
