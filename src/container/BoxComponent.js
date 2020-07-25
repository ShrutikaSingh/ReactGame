import React, {useState} from "react";

const BoxComponent = () => {
    const [boxState, setboxState] = useState({
        activeBox: {},
        objects: [
          { id: 1},
        ],
      });
      const increaseObjects = (index) => {
        console.log(boxState.objects.concat({ id: index }), "obj");
         setboxState({
           ...boxState,
           objects: boxState.objects.concat({ id: index, top: 1, zindex: index+20, display: "block" }),
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
        </>
    )
}

export default BoxComponent;
