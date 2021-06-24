import React from "react";
import "./CardPost.css";
import { Link } from "react-router-dom";

function CardPost(props) {
  const subS = props.desc;
  const subS1 = subS.substr(0, 2);
  console.log(subS);

  return (
    <div className="cardPost">
      <div>
        <p className="title">{props.title}</p>
        <div style={{ minHeight: "50px" }}>
          <p className="desc">
            <Link
              to={`/post/${props.ids}`}
              style={{ textDecoration: "none", color: "black" }}
            >
              {subS1} ...
            </Link>
          </p>
        </div>
        <div className="bottom row">
          <div className="column">
            <p className="info">{props.adress}</p>
          </div>
          <div className="column">
            <p className="info">{props.supplies}</p>
          </div>
          <div className="column">
            <img
              className="circle-img"
              src="https://www.liveabout.com/thmb/wvVhsu7tXYrZV664uVEPSc0b-44=/1413x1413/smart/filters:no_upscale()/114996552-57bb0f545f9b58cdfde2205e.jpg"
              alt="logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardPost;
