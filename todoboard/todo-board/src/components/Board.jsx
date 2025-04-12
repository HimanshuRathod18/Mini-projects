export const Board = ({ task, index, setTaskList, taskList }) => {
  const deleteTask = () => {
    console.log("::: delete", index);
    console.log("::: before tasklist", taskList);

    taskList.splice(index, 1);
    console.log("::: tasklist", taskList);
    setTaskList(taskList);
  };
  return (
    <div>
      <p>{task}</p>
      <button onClick={deleteTask}>Delete</button>
    </div>
  );
};
