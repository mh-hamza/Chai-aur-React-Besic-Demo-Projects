import React from "react";

function Card({src, title, description}) {
  return (
     <div className="card">
      <img src={src}/>
      <div>
        <h3>{title}</h3>
        <p>
          {description}
        </p>
      </div>
    </div>
  );
}

export default Card;
