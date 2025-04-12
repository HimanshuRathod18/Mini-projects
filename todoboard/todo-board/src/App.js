import "./App.css";
import { useState } from "react";
import { Input } from "./components/Input";
import { Board } from "./components/Board";

function App() {
  const [taskList, setTaskList] = useState([]);
  return (
    <div class="container">
      <div class="todo-app">
        <h2>To Do Board</h2>
        <Input taskList={taskList} setTaskList={setTaskList} />
        {taskList.map((task, index) => {
          return (
            <Board
              task={task}
              index={index}
              setTaskList={setTaskList}
              taskList={taskList}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
