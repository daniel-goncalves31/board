import React from "react";
import "./task-styles.scss";
import { Task as TaskInterface } from "../../../../../initialData";
import { Draggable } from "react-beautiful-dnd";

interface Props {
  task: TaskInterface;
  index: number;
}

const Task: React.FC<Props> = ({ task, index }) => {
  return (
    <Draggable draggableId={task.id} index={index}>
      {provided => (
        <div
          className="card"
          {...provided.dragHandleProps}
          {...provided.draggableProps}
          ref={provided.innerRef}
        >
          <div className="card-content">
            <p className="title is-size-6">{task.title}</p>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default Task;
