import React, { useState } from "react";
import "./CardPost.css";
import { Link } from "react-router-dom";

function CardPost(props) {
  const [highlightStyle, setHighlightStyle] = useState(`cardPost`);
  const handleMouseOver = (e) => {
    highlightStyle === `cardPost highlight`
      ? setHighlightStyle(`cardPost`)
      : setHighlightStyle(`cardPost highlight`);
  };

  const subS = props.desc;
  let subS1;
  if (!subS) {
    subS1 = "";
  } else {
    subS.length >= 200
      ? (subS1 = subS.substr(0, 200) + `  ...`)
      : (subS1 = subS.substr(0, subS.length));
    console.log(subS);
  }

  return (
    <div className={highlightStyle}>
      <Link
        onMouseEnter={handleMouseOver}
        onMouseLeave={handleMouseOver}
        to={`/post/${props.ids}`}
        style={{ textDecoration: "none", color: "black" }}
      >
        <div className="p-2">
          <h2 className="fs-3 text-break mb-3">{props.title}</h2>

          <p className="">{subS1}</p>

          <div className="bottom row">
            <div className="column">
              <p className="fs-6">{props.adress}</p>
            </div>

            {props.supplies && (
              <p className="col-auto bg-light border fs-6 m-3">
                {props.supplies}
              </p>
            )}

            <div className="p-3">
              <img
                className="circle-img"
                src="https://www.liveabout.com/thmb/wvVhsu7tXYrZV664uVEPSc0b-44=/1413x1413/smart/filters:no_upscale()/114996552-57bb0f545f9b58cdfde2205e.jpg"
                alt="logo"
              />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default CardPost;
