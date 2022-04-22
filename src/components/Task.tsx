import React from "react";

interface IProps {
  name: string;
  description?: string;
  handleRemove: (email: string) => void;
}

const Task = ({ name, description = "N/A", handleRemove }: IProps) => {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Description: {description}</p>
      <button onClick={() => handleRemove(description)}>Complete</button>
    </div>
  );
};

export default Task;
