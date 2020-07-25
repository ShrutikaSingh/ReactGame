import React, {useState} from "react";
import "./BoxComponent.css";
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
        console.log(boxState.objects.concat({ id: index }), "obj");
         setboxState({
           ...boxState,
           objects: boxState.objects.concat({zindex: index+20 }),
         });
       };
    return(
        <>
        Box Component
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
              style={{ top: `${ boxState.objects[index].top }px`, zIndex: boxState.objects[index].zindex,  position: "relative", display: boxState.objects[index].display, left: `${ boxState.objects[index].left }px`}}
              onClick={() => toggleActive(index)}
            >
              {boxState.objects[index].top}
              <br></br>
              Box number:{index+1}
            </div>
          ))}
        </div>
        </>
    )
}

export default BoxComponent;
