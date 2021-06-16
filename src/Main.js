import React from "react";
import { Switch, Route } from "react-router-dom";
import RecentPosts from "./RecentPosts";
import FullPost from "./FullPost";
import SearchResults from "./SearchResults";

export default function Main({ posts, coordinates }) {
  return (
    <main>
      <div className="row">
        {/* // 2 columns: content view (left screen), map view (right screen) */}
        {/* // Routing: recentPosts view OR post details view OR search results view */}
        <Switch>
          <Route path="/post/:id?">
            <FullPost posts={posts}></FullPost>
          </Route>
          <Route path="/query">
            <SearchResults posts={posts}></SearchResults>
          </Route>
          <Route exact path="/">
            <RecentPosts posts={posts}></RecentPosts>
          </Route>
        </Switch>
      </div>
    </main>
  );
}
