import React from "react";
import StatisticLine from "./StatisticLine";

export default function Statistics({ good, neutral, bad, total }) {
  return (
    <div>
      <StatisticLine text="good" value={good} />
      <StatisticLine text="neutral" value={neutral} />
      <StatisticLine text="bad" value={bad} />
      <StatisticLine text="all" value={total} />
      <StatisticLine
        text="average"
        value={(good * 1 + bad * -1 + neutral * 0) / total}
      />
      <StatisticLine text="positive" value={(good / total) * 100} />
    </div>
  );
}
