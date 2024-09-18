import React, { useState, useEffect } from "react";

const ColorFlipper = () => {
  const [color, setColor] = useState("");
  const randomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)]; //generates a random number between 0 and 15 (since 16 is the total number of hexadecimal digits).
    }
    return color;
  };
  useEffect(() => {
    const changeColor = () => {
      const newColor = randomColor();
      setColor(newColor);
      document.body.style.backgroundColor = newColor;
    };
    changeColor();
    const intervalId = setInterval(changeColor, 3000);
    return () => clearInterval(intervalId);
  }, []);
  return (
    <>
      <div className="color-flipper">
        <h1>Color Flipper</h1>
        <p>Current Color: {color}</p>
      </div>
    </>
  );
};

export default ColorFlipper;
