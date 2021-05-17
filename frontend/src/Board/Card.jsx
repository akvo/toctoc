import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";
import { useStoreState } from "pullstate";
import { UIStore } from "../UIStore";
import { Typography } from "antd";
const { Paragraph } = Typography;

// https://stackoverflow.com/questions/20037122/draw-an-arrow-between-two-divs ?
function useClientRect() {
  const [rect, setRect] = useState(null);
  const ref = useCallback((node) => {
    if (node !== null) {
      setRect(node.getBoundingClientRect());
    }
  }, []);
  return [rect, ref];
}

function Card(props) {
  const { id } = props;
  const [rect, ref] = useClientRect();
  console.log(rect);

  const { cardData } = useStoreState(UIStore, (s) => ({
    cardData: s.cards?.[id],
  }));

  function toggleActiveStatus() {
    UIStore.update((s) => {
      s.cards[id].active = !s.cards[id].active;
      s.cards[id].deps.forEach((cardId) => {
        s.cards[cardId].active = !s.cards[cardId].active;
      });
    });
  }

  return (
    <div
      ref={ref}
      className={`card ${cardData?.active ? "" : "deactive"}`}
      onClick={toggleActiveStatus}
    >
      <Paragraph>{cardData?.text || ""}</Paragraph>
    </div>
  );
}

Card.propTypes = {
  id: PropTypes.number,
};

export default Card;
