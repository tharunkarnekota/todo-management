import React,{useState} from 'react'

const App = () => {
  const [task,setTask] = useState("");
  const changehandler = e =>{
    setTask(e.target.value);
  }
  const submitHandler = e =>{
    e.preventDefault();
    console.log(task);
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
