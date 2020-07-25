import React, { useState } from "react";
import "./BoxComponent.css";
import KeyBoardListner from "./KeyboardListener";

//Functional Component to display Box and 
const BoxComponent = () => {

  //Initial boxState 
  const [boxState, setboxState] = useState({
    activeBox: {},
    objects: [
      { id: 1, top: 1 , zindex: 10, display: "block", left:1 },
    ],
  });

  //Increase the no. of box and their respective zindex
  const increaseObjects = (index) => {
   // console.log(boxState.objects.concat({ id: index }), "obj");
    setboxState({
      ...boxState,
      objects: boxState.objects.concat({ id: index, top: 1, zindex: index+20, left:1 }),
    });
  };

  //Select a box
  const toggleActive = (index) => {
    setboxState({ ...boxState, activeBox: boxState.objects[index] });
  };

  //Change styling of selected box
  const toggleActiveStyles = (index) => {
    if (boxState.objects[index] === boxState.activeBox) {
      return "box active";
    } else {
      return "box inactive";
    }
  };

  //Move the box a/c to keys by changing different css styling 
  const handleGo = (topDifference, sideDifference, displayDelete) => {
    const {objects, activeBox} = boxState
    const boxIndex = objects.findIndex(
      (i) => i.id === activeBox.id
    );
    console.log("handleGoDown -> boxIndex", activeBox);
    let newBoxData = boxState;
    newBoxData.objects[boxIndex] = {
      ...activeBox,
      top: activeBox.top-topDifference,
      left: activeBox.left-sideDifference,
      display: displayDelete
    };
    setboxState({ ...newBoxData });
  };

  return (
    <>
      <KeyBoardListner  handleGo={handleGo}>
        <div className="inputbutton">
          <button
            type="submit"
            onClick={() => increaseObjects(boxState.objects.length + 1)}
          >
            Add More Boxes
          </button>
        </div>
        <div className="constBox">
          {boxState.objects.map((elements, index) => {
            const {top, left, zindex, display} = elements
            return(
            <div
              key={index}
              className={toggleActiveStyles(index)}
              style={{ display: display, top: `${top}px`, zIndex: zindex,left:`${left}px`, position: "relative"}}
              onClick={() => toggleActive(index)}
            >
              {boxState.objects[index].top}
              <br></br>
              {index+1}rd Box
            </div>
            )
          })}
        </div>
      </KeyBoardListner>
    </>
  );
};

export default BoxComponent;