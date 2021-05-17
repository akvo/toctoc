import React from "react";
import BoardFilters from "./BoardFilters";
import BoardHeader from "./BoardHeader";
import BoardGrid from "./Board/BoardGrid.jsx";

export default function BoardController() {
  return (
    <>
      <BoardFilters />
      <BoardHeader />
      <BoardGrid />
    </>
  );
}
