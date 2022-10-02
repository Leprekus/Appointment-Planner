import React from "react";

export const Tile = ( props ) => {
  const { dataObject } = props
  const keys = Object.keys(dataObject)
  return (
    <div className="tile-container">
    {keys.map(key =><p>{`${key}: ${dataObject[key]}`}</p>)}
    <hr/>
    </div>
  );
};
