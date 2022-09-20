import React, { useState } from "react";
import { ChromePicker } from "react-color";

const ColorPickerPractice = () => {
  const [color, setColor] = useState("#fff");

  const [showColorPicker, setShowColorPicker] = useState(false);
  return (
    <div>
      <button
        onClick={() =>
          setShowColorPicker((showColorPicker) => !showColorPicker)
        }
      >
        {showColorPicker ? "Close CP" : "Open CP"}
      </button>
      {showColorPicker && (
        <ChromePicker
          color={color}
          onChange={(updatedColor) => setColor(updatedColor.hex)}
        />
      )}

      <h2>You picked {color}</h2>
    </div>
  );
};

export default ColorPickerPractice;
