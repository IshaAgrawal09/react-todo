import React from 'react'

const Complete = (props) => {
    // DELETE ITEM 
    const deleteItem = (e) =>{
        props.setComp(props.comp.filter(obj =>{
            return obj.id != e.currentTarget.id;
        }))
       
    }
    // CHECKED 
    const checked = (event) =>{
      let id = event.currentTarget.id;
      props.comp.map((item) =>
     { if(id == item.id){
         props.setItemarr([
            ...props.textArr,
            {
              id: props.count,
              text: item.text,
              status: "incomplete",
            },
          ])
          props.setCount(props.count + 1)
        }}
  
    );
    props.setComp(
      props.comp.filter((obj) => {
        return obj.id != event.currentTarget.id;
      })
    );

    }
    console.log("COMPLETE FUNCTIONALITY")
    console.log(props.textArr)
    console.log(props.comp)
  return (
    <div className='complete'>
        <h3>Completed</h3>
        {props.comp.map((item)=>(
            <div className='task' id={item.id} key={item.id.toString()}>
            <input
            type="checkbox"
            name=""
            className="checkbox"
            id={item.id}
            onClick={checked}
          />
            <del>{item.text}</del>
            <button className='btn' ><i className='fas fa-trash-alt' id={item.id} onClick={deleteItem}></i></button>
           
        </div>
        ))}
        
    </div>
  )
}

export default Complete