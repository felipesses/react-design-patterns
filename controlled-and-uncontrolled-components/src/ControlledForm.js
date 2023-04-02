import React, { useState, useEffect } from "react";

export const ControlledForm = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState();
  const [hairColor, setHairColor] = useState("");

  useEffect(() => {
    if (name.length < 2) {
      console.log("Name must be 2 or more characters");
    }
  }, [name, age, hairColor]);

  return (
    <form>
      <input
        type="text"
        name="name"
        placeholder="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        name="age"
        placeholder="age"
        value={age}
        onChange={(e) => setAge(Number(e.target.value))}
      />
      <input
        type="text"
        name="hairColor"
        placeholder="hair color"
        value={hairColor}
        onChange={(e) => setHairColor(e.target.value)}
      />

      <input type="submit" value="Submit" />
    </form>
  );
};
