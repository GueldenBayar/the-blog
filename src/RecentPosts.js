import React from "react";
import Map from "./Map";
import SummarizedPost from "./SummarizedPost";

export default function RecentPosts() {
    return (
       <> 
       <section className="col-5">

            {/* // Content: e.g. list of four most recent entries in database */}
            <SummarizedPost/>
        </section>
        <section className="col-7">
            <Map></Map>
        </section>
       </> 
    );
}