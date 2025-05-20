import React, { useState } from "react";

const GlowTracker = () => {
  const [weight, setWeight] = useState(58);
  const [willpower, setWillpower] = useState(3);
  const [message, setMessage] = useState("");

  const handleUpdate = () => {
    setMessage("Progress updated!");
  };

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>GlowTracker 365</h1>
      <div>
        <label>Weight (kg): </label>
        <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
      </div>
      <div>
        <label>Willpower (1-5): </label>
        <input type="number" value={willpower} onChange={(e) => setWillpower(e.target.value)} min={1} max={5} />
      </div>
      <button onClick={handleUpdate}>Update Progress</button>
      <p>{message}</p>
    </div>
  );
};

export default GlowTracker;