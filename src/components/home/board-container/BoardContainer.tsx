import React, { useState } from "react";
import "./board-container.styles.scss";
import BoardStage from "./board-stage/BoardStage";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { data as initialData } from "../../../initialData";

interface Props {}

const BoardContainer: React.FC<Props> = () => {
  const [data, setData] = useState(initialData);

  const handleonDragEnd = (result: DropResult) => {
    const { draggableId, destination, source } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    let sourceIndex: number | null = null;
    let destinationIndex: number | null = null;

    const sourceStage = data.stages.find((stage, index) => {
      sourceIndex = index;
      return stage.id === source.droppableId;
    });
    const destinationStage = data.stages.find((stage, index) => {
      destinationIndex = index;
      return stage.id === destination.droppableId;
    });

    const task = sourceStage?.tasks.find(task => task.id === draggableId);
    sourceStage?.tasks.splice(source.index, 1);
    destinationStage?.tasks.splice(destination.index, 0, task!);

    const stages = data.stages;
    stages[sourceIndex!] = sourceStage!;
    stages[destinationIndex!] = destinationStage!;

    setData(data => ({
      ...data,
      stages
    }));
  };

  return (
    <div className="board-container">
      <div className="boards">
        <DragDropContext onDragEnd={handleonDragEnd}>
          {data.stages.map(stage => (
            <BoardStage key={stage.id} stage={stage} />
          ))}
        </DragDropContext>
      </div>
    </div>
  );
};

export default BoardContainer;
