import React, { useState } from "react";
import "./BoxComponent.css";
import { KeyCodes } from "./KeyboardListener/keyCodes";

const BoxComponent = () => {
  const [boxState, setboxState] = useState({
    activeBox: {},
    objects: [
      { id: 1, top: 1 , zindex: 10, display: "block"},
    ],
  });
  const toggleActive = (index) => {
    setboxState({ ...boxState, activeBox: boxState.objects[index] });
  };
  const toggleActiveStyles = (index) => {
    if (boxState.objects[index] === boxState.activeBox) {
      return "box active";
    } else {
      return "box inactive";
    }
  };

  const increaseObjects = (index) => {
   // console.log(boxState.objects.concat({ id: index }), "obj");
    setboxState({
      ...boxState,
      objects: boxState.objects.concat({ id: index, top: 1, zindex: index+20, display: "block" }),
    });
  };

  const handleKeyDown = (keyCode) => {
      console.log("w_up",KeyCodes.ARROW_UP || KeyCodes.W_UP)
    // eslint-disable-next-line default-case
    switch (keyCode) {
        case KeyCodes.ARROW_UP:
            handleGoUp();
            break;
        case KeyCodes.W_UP:
            handleGoUp();
            break;
        case KeyCodes.ARROW_DOWN:
            handleGoDown();
            break;
        case KeyCodes.KeyCodes.S_DOWN:
            handleGoDown();
            break;
        case KeyCodes.DELETE:
            handleDelete()
    }
  };
  const handleGoUp = () => {
    console.log("Up key pressed", boxState.activeBox); //{id: 4, margins: "40px"}
    // setboxState(prevStyle => ({
    //     ...prevStyle,
    //     activeBox: { ...prevStyle.activeBox, margins: "200px"}
    // }));
    // setboxState
    const boxIndex = boxState.objects.findIndex(
      (i) => i.id === boxState.activeBox.id
    );
    console.log("handleGoDown -> boxIndex", boxState.activeBox);

    let newBoxData = boxState;
    newBoxData.objects[boxIndex] = {
      ...boxState.activeBox,
      top: boxState.activeBox.top-30,
    };
    setboxState({ ...newBoxData });
  };

  const handleGoDown = () => {
    //console.log("down key pressed", boxState.activeBox); //{id: 4, top: "40px"}
    const boxIndex = boxState.objects.findIndex(
      (i) => i.id === boxState.activeBox.id
    );
    let newBoxData = boxState;
    newBoxData.objects[boxIndex] = {
      ...boxState.activeBox,
      top: boxState.activeBox.top+30,
    };
    setboxState({ ...newBoxData });
  };

  const handleDelete = () => {
    //console.log("delete key pressed", boxState.activeBox); //{id: 4, top: "40px"}
    const boxIndex = boxState.objects.findIndex(
      (i) => i.id === boxState.activeBox.id
    );
    let newBoxData = boxState;
    newBoxData.objects[boxIndex] = {
      ...boxState.activeBox,
      display: "none",
    };
    setboxState({ ...newBoxData });

  };


  return (
    <>
        <div className="inputbutton">
          <button
            type="submit"
            onClick={() => increaseObjects(boxState.objects.length + 1)}
          >
            Add More Boxes
          </button>
        </div>
        <div className="constBox">
          {boxState.objects.map((elements, index) => (
            <div
              key={index}
              className={toggleActiveStyles(index)}
              style={{ top: `${ boxState.objects[index].top }px`, zIndex: boxState.objects[index].zindex,  position: "relative", display: boxState.objects[index].display }}
              onClick={() => toggleActive(index)}
            >
              {boxState.objects[index].top}
              <br></br>
              Box number:{index+1}
            </div>
          ))}
        </div>
    </>
  );
};

export default BoxComponent;