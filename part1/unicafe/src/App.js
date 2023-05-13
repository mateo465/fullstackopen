import { useState } from "react";
import Button from "./Button";
import Statistics from "./Statistics";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [clicked, setClicked] = useState(false);

  const total = good + neutral + bad;
  const handleButtonGoodClick = () => {
    setClicked(true);
    setGood(good + 1);
  };

  const handleButtonNeutralClick = () => {
    setClicked(true);
    setNeutral(neutral + 1);
  };

  const handleButtonBadClick = () => {
    setClicked(true);
    setBad(bad + 1);
  };
  return (
    <div>
      <h1>give feedback</h1>
      <Button text="good" handleClick={handleButtonGoodClick}></Button>
      <Button text="neutral" handleClick={handleButtonNeutralClick}></Button>
      <Button text="bad" handleClick={handleButtonBadClick}></Button>
      <h1>statistics</h1>

      {clicked && (
        <Statistics good={good} bad={bad} total={total} neutral={neutral} />
      )}

      {!clicked && <p>no feedback given</p>}
    </div>
  );
};

export default App;
