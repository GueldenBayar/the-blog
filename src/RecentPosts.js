import React from "react";
import Map from "./Map";
import SummarizedPost from "./SummarizedPost";
import { Link } from "react-router-dom";

export default function RecentPosts({ posts }) {
  //console.log(posts)
  return (
    <>
      <section className="col-5">
        <ul>
          {posts.map((post) => {
            return (
              <li>
                <Link to={`/post/${post.sys.id}`}>
                  Link to post with id: {post.sys.id}
                </Link>
              </li>
            );
          })}
        </ul>
        {/* // Content: e.g. list of four most recent entries in database */}
        {/* <SummarizedPost/> */}
      </section>
      <section className="col-7">
        <Map></Map>
      </section>
    </>
  );
}
