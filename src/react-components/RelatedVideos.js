import React, { useMemo, useRef, useState } from "react";

const RelatedVideos = () => {
  const x = useRef(0);
  const [y, sety] = useState(0);
  //   const z = useMemo(0);
  return (
    <div flex flex-col>
      RelatedVideos
      <button
        onClick={() => {
          x.current = x.current + 1;
          if (x.current % 2 === 0) alert(x.current);
        }}
      >
        increment X
      </button>
      <button onClick={() => sety(y + 1)}>increment Y</button>
      {/* <button
        onClick={() => {
          z = z + 1;
          if (z % 2 === 0) alert(z);
        }}
      >
        increment X
      </button> */}
      <p>x= {x.current}</p>
      <p>y={y}</p>
      {/* <p>z={z}</p> */}
    </div>
  );
};

export default RelatedVideos;
