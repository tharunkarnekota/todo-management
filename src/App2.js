import React,{useState} from 'react'


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
  return (
    <div>
      <center>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Todo Management Appilication</h5>
              <form onSubmit={submitHandler}>
                <input type="text" name="task" value={task} onChange={changehandler}/>&nbsp; &nbsp;
                <input type="submit" name="Add" value="Add" />
              </form>
            </div>
          </div>
        </center>
    </div>
  )
}

export default App
