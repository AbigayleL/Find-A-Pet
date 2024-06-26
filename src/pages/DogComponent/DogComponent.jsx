import React from "react";
import "./DogComponent.scss";

import { useState, useEffect } from "react";

function DogComponent({ name, image, bred, life, temperament, origin }) {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div
      className={`dog-card ${expanded ? "expanded" : ""}`}
      onClick={toggleExpand}
    >
      <div className="card-body">
        <img src={image.url} alt={name} />
      </div>
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

export default DogComponent;
