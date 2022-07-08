import React from "react";

const Add = (props) => {
  const taskValue = (e) => {
    props.setText(e.target.value);
  };

  const addText = () => {
  
    if(props.text !== ""){
        props.setItemarr([
            ...props.itemarr,
            {
              id: props.count,
              text: props.text,
              status: "incomplete",
            },
          ]);
        props.setCount(props.count + 1);
        props.setText("");
    }
    
    
  };
 
  return (
    <div className="add">
      <input
        type="text"
        placeholder="Add a Task"
        className="txt"
        id="inputText"
        onChange={taskValue}
        value={props.text}
        
      />
      <button onClick={addText}>
        <i className="fas fa-plus"></i>
      </button>
    </div>
  );
};
export default Add;
