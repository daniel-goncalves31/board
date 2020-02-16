import React from "react";
import NavBar from "./navbar/NavBar";
import BoardContainer from "./board-container/BoardContainer";

interface Props {}

const Home: React.FC<Props> = () => {
  return (
    <div className="home">
      <NavBar />
      <BoardContainer />
    </div>
  );
};

export default Home;
