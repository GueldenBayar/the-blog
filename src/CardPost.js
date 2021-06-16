import React from "react";
import "./CardPost.css";
import { Link } from "react-router-dom";

function CardPost(props) {
  const subS = props.desc;
  const subS1 = subS.substr(0, 200);
  console.log(subS1);

<<<<<<< HEAD
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
=======
    return (
      <div className="cardPost">
        <div>
            <p className="title" ><Link to={`/post/${props.ids}`} style={{ textDecoration: 'none', color: 'white', fontStyle: "bold", fontWeight: "bold", fontStyle: "italic", fontSize: "x-large" }}>{props.title}</Link></p>
          <div style={{minHeight: '50px'}}>
            <p className="desc" ><Link to={`/post/${props.ids}`} style={{ textDecoration: 'none', color: "#053E04", fontWeight: "bold" }}>{subS1} ...</Link></p>
          </div>
          <div clasName="bottom row">
            <div className="column1">
              <p className="info" style={{ textDecoration: 'none', color: "#053E04" }}><b>You'll find the tennis-table here:</b> {props.adress}</p>
            </div>
            <div className="column2">
              <p className="info" style={{ textDecoration: 'none', color: "#053E04" }}><b>Delicious food and lots to drink:</b> {props.supplies}</p>
            </div>
            <div className="column3">            
              <img className="circle-img" src="https://www.liveabout.com/thmb/wvVhsu7tXYrZV664uVEPSc0b-44=/1413x1413/smart/filters:no_upscale()/114996552-57bb0f545f9b58cdfde2205e.jpg" />
            </div>
>>>>>>> bccce2672bd3dba1e3cd1373bbcfbd58df846dc7
          </div>
          <div className="column">
            <img
              className="circle-img"
              src="https://www.liveabout.com/thmb/wvVhsu7tXYrZV664uVEPSc0b-44=/1413x1413/smart/filters:no_upscale()/114996552-57bb0f545f9b58cdfde2205e.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardPost;
