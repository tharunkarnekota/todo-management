import React from 'react'

const Todolist = ({todolist}) => {
    return (
        <div>
            {todolist.map((todo,index)=>
            <div key={index}>
                <h5>{todo} &nbsp; &nbsp; <button>Delete</button></h5>
            </div>
            )}
        </div>
    )
}

export default Todolist