import React from "react";
import { Switch, Route } from "react-router-dom";
import RecentPosts from "./RecentPosts";
import FullPost from "./FullPost";
import SearchResults from "./SearchResults";

export default function Main() {
    return(
        <main>
            <div className="row">
            {/* // 2 columns: content view (left screen), map view (right screen) */}
            {/* // Routing: recentPosts view OR post details view OR search results view */}
            <Switch>
            <Route><RecentPosts></RecentPosts></Route>
            <Route><FullPost></FullPost></Route>
            <Route><SearchResults></SearchResults>
            </Route>
            </Switch>
            </div>
        </main>
    )
}