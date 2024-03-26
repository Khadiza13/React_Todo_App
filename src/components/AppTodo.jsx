import { useState } from "react";

function AppTodo({onNewItem}){
  const [todoName, setTodoName] = useState("");
  const [dueDate, setdueDate] = useState("");
   
  const handleNameChange=(event)=> {
    setTodoName(event.target.value);
  }

  const handleDateChange=(event)=> {
    setdueDate(event.target.value);
  }

  const handleAddButtonClicked = () => {
    onNewItem(todoName, dueDate);
    setdueDate("");
    setTodoName("");
  };

    return (
<div className="container text-center">
  <div className="row input-row">
    <div className="col-6"><input type="text"placeholder="Enter Task" value={todoName} onChange={handleNameChange}/></div>
    <div className="col-4"><input type="date" value={dueDate} onChange={handleDateChange}/></div>
    <div className="col-2"><button type="button" className="btn btn-success input-button" onClick={handleAddButtonClicked}>ADD</button></div>
  </div>
</div>
);
}
export default AppTodo;