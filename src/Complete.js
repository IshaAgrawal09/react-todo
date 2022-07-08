import React from 'react'

const Complete = (props) => {
    // DELETE ITEM 
    const deleteItem = (e) =>{
        props.setComp(props.comp.filter(obj =>{
            return obj.id != e.currentTarget.id;
        }))
       console.log(props.comp)
    }
  return (
    <div className='complete'>
        <h3>Completed</h3>
        {props.comp.map((item)=>(
            <div className='task' id={item.id} key={item.id.toString()}>
            <del>{item.text}</del>
            <button className='btn' ><i className='fas fa-trash-alt' id={item.id} onClick={deleteItem}></i></button>
           
        </div>
        ))}
        
    </div>
  )
}

export default Complete