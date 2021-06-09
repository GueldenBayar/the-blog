import React from "react";

export default function Navbar() {
    return (
<header>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
      PingPong Locator
    </a>

    <form class="d-flex container-fluid" >
      <input
        class="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        name="searchQuery"
      />
      <button class="btn btn-outline-success" type="submit">
        Search
      </button>
    </form>
  </div>
</nav>
</header>
    )
}

