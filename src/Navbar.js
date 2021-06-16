import React, { useState } from "react";

export default function Navbar({ fetchData }) {
  const [searchText, setSearchText] = useState();
  const handleChange = (e) => {
    e.preventDefault();
    console.log(e.target.value);

    setSearchText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(e.target.searchInput.value);
    fetchData(e.target.searchInput.value);
  };
  return (
    <header className="row">
      <nav class="navbar navbar-expand-lg navbar-light bg-light navbar-container-custom">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            PingPong Locator
          </a>

          <form class="d-flex container-fluid" onSubmit={handleSubmit}>
            <input
              name="searchInput"
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={handleChange}
              value={searchText}
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </header>
  );
}
