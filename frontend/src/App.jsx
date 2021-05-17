import React from "react";
import BoardController from "./BoardController";
import MainFooter from "./MainFooter";
import MainHeader from "./MainHeader";
import { UIStore } from "./UIStore";
import "./App.scss";
import tocData from "./tocData.json";

function loadData(data) {
  const { activePathWayId, cards, layout, title, pathWays } = data;

  UIStore.update((s) => {
    s.activePathWayId = activePathWayId;
    s.layout = layout;
    s.title = title;
    s.cards = cards;
    s.pathWays = pathWays;
  });
}

function App() {
  loadData(tocData);
  return (
    <>
      <MainHeader />
      <BoardController />
      <MainFooter />
    </>
  );
}

export default App;
