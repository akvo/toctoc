import React from "react";
import "./ExcessBrand.scss";

function ExessBrand() {
  return (
    <svg viewBox="0 0 960 300">
      <symbol id="s-text">
        <text textAnchor="middle" x="50%" y="80%">
          Akvo TocToc
        </text>
      </symbol>
      <g className="g-ants">
        <use xlinkHref="#s-text" className="text-copy" />
        <use xlinkHref="#s-text" className="text-copy" />
        <use xlinkHref="#s-text" className="text-copy" />
        <use xlinkHref="#s-text" className="text-copy" />
        <use xlinkHref="#s-text" className="text-copy" />
      </g>
    </svg>
  );
}

export default ExessBrand;
