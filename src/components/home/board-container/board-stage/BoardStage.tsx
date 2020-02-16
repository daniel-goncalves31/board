import React from "react";
import { Stage } from "../../../../initialData";
import "./board-stage.styles.scss";
import Task from "./task/Task";
import { Droppable } from "react-beautiful-dnd";

interface Props {
  stage: Stage;
}

const BoardStage: React.FC<Props> = ({ stage }) => {
  return (
    <Droppable droppableId={stage.id}>
      {provided => (
        <div
          className="stage"
          {...provided.droppableProps}
          ref={provided.innerRef}
        >
          {stage.tasks.map((task, i) => (
            <Task key={task.id} task={task} index={i} />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default BoardStage;
