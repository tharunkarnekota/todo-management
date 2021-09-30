import React,{useState} from 'react'
import Todolist from './Todolist';

const App = () => {
  const [task,setTask] = useState("");
  const [todos,setTodos] = useState([]);

  const changehandler = e =>{
    setTask(e.target.value);
  }
  const submitHandler = e =>{
    e.preventDefault();
    const newTodos = [...todos,task];
    setTodos(newTodos);
    setTask("");
  }

  const deleteHandler = (indexValue) =>{
    const newTodos = todos.filter((todos,index) => index !== indexValue);
    setTodos(newTodos);
  }
  return (
    <div>
      <center>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Todo Management Appilication</h5>
              <form onSubmit={submitHandler}>
                <input size="30" type="text" name="task" value={task} onChange={changehandler}/>&nbsp; &nbsp;
                <input type="submit" name="Add" value="Add" />
              </form><br />
              <Todolist todolist={todos} deleteHandler={deleteHandler}/>
            </div>
          </div>
        </center>
    </div>
  )
}

export default App
