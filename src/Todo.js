import React, { useState } from "react";

const Todo = (props) => {
  const [data, setData] = useState("");
  const [button, setButton] = useState("ADD");
  const [editData, setEditData] = useState(false);
  const [editDataIndex, seteditDataIndex] = useState(0);

  // ADD FUNCTIONALITY
  const add = () => {
    setButton("ADD");
    if (data !== "") {
      if (editData) {
        props.setTodoList([
          ...props.todoList.filter((item, index) => {
            if (index == editDataIndex) {
              item.data = data;

              return item;
            }
            return item;
          }),
        ]);
        setEditData(false);
      } else {
        props.setTodoList([
          ...props.todoList,
          {
            id: props.count,
            data: data,
            status: "incomplete",
          },
        ]);
        props.setCount(props.count + 1);
      }

      setData("");
    }
  };

  //  EDIT FUNCTIONALITY
  const edit = (event) => {
    props.todoList.filter((item, index) => {
      if (index == event.currentTarget.id) {
        setData(item.data);
        setButton("UPDATE");
        setEditData(true);
        seteditDataIndex(index);
      }
    });
  };

  // DELETE FUNCTIONALITY
  const remove = (event) => {
    props.setTodoList(
      props.todoList.filter((item, index) => {
        return index != event.currentTarget.id;
      })
    );
  };

  // CHECKED FUNCTIONALITY
  const checked = (event) => {
    // debugger;
    props.setTodoList(
      props.todoList.filter((item, index) => {
        if (event.currentTarget.id == index) {
          item.status = "Complete";
          return item;
        }
        return item;
      })
    );
  };

  const checkedComp = (event) => {
    props.setTodoList(
      props.todoList.filter((item, index) => {
        if (event.currentTarget.id == index) {
          item.status = "incomplete";
          return item;
        }
        return item;
      })
    );
  };
  console.log(props.todoList);
  return (
    <>
      <div className="add">
        <input
          type="text"
          placeholder="Add a Task"
          className="txt"
          id="inputText"
          onChange={(event) => setData(event.target.value)}
          value={data}
        />
        <button onClick={add}>
          <i className="fas fa-plus"></i>
        </button>
      </div>

      <div className="incomplete">
        <h3>ToDo</h3>
        {props.todoList.map((item, index) => {
          return item.status == "incomplete" ? (
            <div className="task" key={index}>
              <input
                className="check"
                id={index}
                type="checkbox"
                onClick={checked}
              />
              {item.data}
              <button className="btn" id={index} onClick={remove}>
                <i className="fas fa-trash-alt"></i>
              </button>
              <button className="btn" id={index} onClick={edit}>
                <i className="fas fa-pencil"></i>
              </button>
            </div>
          ) : null;
        })}
      </div>

      <div className="complete">
        <h3>Completed</h3>
        {props.todoList.map((item, index) => {
          return item.status == "Complete" ? (
            <div className="task" key={index}>
              <input
                type="checkbox"
                name=""
                className="check"
                id={index}
                onClick={checkedComp}
              />
              <del>{item.data}</del>
              <button className="btn">
                <i className="fas fa-trash-alt" id={index} onClick={remove}></i>
              </button>
            </div>
          ) : null;
        })}
      </div>
    </>
  );
};

export default Todo;
