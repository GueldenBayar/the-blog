import React from "react";
import { Switch, Route } from "react-router-dom";
import RecentPosts from "./RecentPosts";
import FullPost from "./FullPost";
import SearchResults from "./SearchResults";
import SubmitPost from "./SubmitPost";

export default function Main({ posts, coordinates }) {
  return (
    <main className="row">
      {/* // 2 columns: content view (left screen), map view (right screen) */}
      {/* // Routing: recentPosts view OR post details view OR search results view */}
      <Switch>
        <Route path="/post/:id?">
          <FullPost posts={posts}></FullPost>
        </Route>
        <Route path="/search/:target?">
          <SearchResults posts={posts}></SearchResults>
        </Route>
        <Route path="/submit">
          <SubmitPost></SubmitPost>
        </Route>
        <Route exact path="/">
          <RecentPosts posts={posts}></RecentPosts>
        </Route>
      </Switch>
    </main>
  );
}
