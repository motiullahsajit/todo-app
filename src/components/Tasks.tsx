import React, { useState } from "react";
import Task from "./Task";

interface IContact {
  name: string;
  description: string;
}
const Tasks = () => {
  const [task, setTask] = useState<IContact>({} as IContact);
  const [taskList, setTaskList] = useState<IContact[]>([]);

  const onClick = () => {
    setTaskList([...taskList, task]);
    setTask({
      name: "",
      description: "",
    });
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleRemove = (description: string) => {
    const newTaskList = taskList.filter((c) => c.description !== description);
    setTaskList(newTaskList);
  };

  return (
    <div>
      <h1>🦸 Tasks list</h1>
      <div className='form'>
        <input
          value={task.name}
          onChange={onChange}
          name='name'
          placeholder='Task Name'
          type='text'
        />
        <input
          value={task.description}
          onChange={onChange}
          name='description'
          placeholder='Task Description'
          type='description'
        />
        <button onClick={onClick}>Add</button>
      </div>
      {taskList.map((t) => (
        <Task
          key={t.name}
          name={t.name}
          description={t.description}
          handleRemove={handleRemove}
        />
      ))}
    </div>
  );
};

export default Tasks;
