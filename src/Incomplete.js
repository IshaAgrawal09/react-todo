import React from "react";

const Incomplete = (props) => {
  // DELETE ITEM
  function deleteItem(e) {
    props.setItemarr(
      props.textArr.filter((obj) => {
        return obj.id != e.currentTarget.id;
      })
    );
   
  }

  // EDIT ITEM
  const editItem = (event) => {
    let id = event.currentTarget.id;
    let itemData;
    props.textArr.map((item) =>
      id == item.id ? (itemData = item.text) : null
    );

    props.setText(itemData);

    props.setItemarr(
      props.textArr.filter((obj) => {
        return obj.id != event.currentTarget.id;
      })
    );
  };

  // CHECK BOX
  const checked = (event) => {
    let id = event.currentTarget.id;
   

    props.textArr.map((item) =>
      id == item.id
        ? props.setComp([
            ...props.comp,
            {
              id: item.id,
              text: item.text,
              status: "complete",
            },
          ])
        : null
    );
    props.setItemarr(
      props.textArr.filter((obj) => {
        return obj.id != event.currentTarget.id;
      })
    );
    
  };
  console.log(props.textArr)
    console.log(props.comp)
 
  return (
    <div className="incomplete">
      <h3>ToDo</h3>
      {props.textArr.map((item) => (
        <div className="task" id={item.id} key={item.id.toString()}>
          <input
            type="checkbox"
            name=""
            className="checkbox"
            id={item.id}
            onClick={checked}
          />
          {item.text}
          <button className="btn" id={item.id} onClick={deleteItem}>
            <i className="fas fa-trash-alt"></i>
          </button>
          <button className="btn" id={item.id} onClick={editItem}>
            <i className="fas fa-pencil"></i>
          </button>
        </div>
      ))}
    </div>
  );
};

export default Incomplete;
