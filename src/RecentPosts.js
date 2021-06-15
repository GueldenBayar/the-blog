import React from "react";
import Map from "./Map";
import SummarizedPost from "./SummarizedPost";
import { Link } from "react-router-dom";
import CardPost from "./CardPost"



export default function RecentPosts({posts}) {
    //console.log(posts)
    //creates a new array
    let cPosts = [];
    //maps over posts and puts the date and time of update in the array
    cPosts = posts.map(post => {
        return post.sys.updatedAt
    });
    //console.log(cPosts);
    //return of the component
    return (
       <> 
       <section className="col-5">
                <ul>
                    // maps over the post, compares the posts update date with 
                    // all dates in the array cPosts, if later add a 1 to the place
                    // if place is lower 5 (1-4 newesrt entries), cardPost is returned
                    {posts.map(post => {
                        let d1 = post.sys.updatedAt;
                        let place = 1;
                        cPosts.map(cPost => {
                            if (d1 > cPost){
                                place++;
                            }
                        })
                        
                        if(place<5)

                        return (
                            <>
                                <CardPost
                                    desc={post.fields.description}
                                    title={post.fields.title}
                                    adress={post.fields.adress}
                                    supplies={post.fields.supplies}
                                    ids={post.sys.id}
                                />
                            </>
                        )
                        else return 
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

