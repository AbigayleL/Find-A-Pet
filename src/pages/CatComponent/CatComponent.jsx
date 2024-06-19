import React from "react";
import "./CatComponent.scss";

import { useState, useEffect } from "react";

function CatComponent({ name, image, bred, life, temperament, origin }) {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div
      className={`dog-card ${expanded ? "expanded" : ""}`}
      onClick={toggleExpand}
    >
      <div className="card-name">
        <h2>{name}</h2>
      </div>
      {expanded && (
        <div className="card-details">
          <p>{bred}</p>
          <p>{life}</p>
          <p>{temperament}</p>
          <p>{origin}</p>
        </div>
      )}
    </div>
  );
}

export default CatComponent;
