// import { useState, useEffect } from "react";
import Map from "./Map";
// import SummarizedPost from "./SummarizedPost";
// import { Link } from "react-router-dom";
import CardPost from "./CardPost";

export default function RecentPosts({ posts }) {
  //console.log(posts)
  //creates a new array
  let cPosts = [];
  //maps over posts and puts the date and time of update in the array
  cPosts = posts.map((post) => {
    return post.updatedAt;
  });
  //console.log(cPosts);
  //return of the component
  return (
    <>
      <section className="col-5 content-container-custom px-4 mt-5 ms-5 me-3">
        <ul>
          {/* maps over the post, compares the posts update date with 
                    all dates in the array cPosts, if later add a 1 to the place
                    if place is lower 5 (1-4 newesrt entries), cardPost is returned */}
          {!posts.length && (
            <h6>Sorry, your search did not match any results</h6>
          )}
          {posts.length &&
            posts.map((post) => {
              // let d1 = post.updatedAt;
              // let place = 1;
              // cPosts.map((cPost) => {
              //   if (d1 > cPost) {
              //     place++;
              //   }
              // });

              // if (place < 20)
              return (
                <>
                  <CardPost
                    desc={post.description}
                    title={post.title}
                    adress={post.adress}
                    supplies={post.supplies}
                    ids={post.id}
                  />
                </>
              );
            })}
        </ul>
        {/* // Content: e.g. list of four most recent entries in database */}
        {/* <SummarizedPost/> */}
      </section>
      <section className="col px-4 mt-5 me-5">
        <Map posts={posts}></Map>
      </section>
    </>
  );
}
