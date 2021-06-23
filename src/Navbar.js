import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";

export default function Navbar({ fetchData }) {
  const [searchText, setSearchText] = useState();
  const [selectedQueryOption, setSelectedQueryOption] = useState("Show all");
  let history = useHistory();
  const handleChange = (e) => {
    e.preventDefault();
    console.log(e.target.value);

    setSearchText(e.target.value);
  };
  const handleSelect = (e) => {
    console.log(e.target.value);
    //e.preventDefault();
    setSelectedQueryOption(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    console.log(e.target.searchInput.value);
    fetchData(e.target.searchInput.value, selectedQueryOption);
    //history.push(`/${e.target.options.value}`);
  };
  return (
    <header className="row">
      <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-container-custom">
        <div className="row">
          <div className="col-auto">
            <a className="navbar-brand" href="#">
              PingPong Locator
            </a>
            <form className="d-flex container-fluid" onSubmit={handleSubmit}>
              <input
                name="searchInput"
                className="form-control me-2 col-auto"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={handleChange}
                value={searchText}
              />
              <select
                name="options"
                id="options"
                className="col-auto"
                onChange={handleSelect}
                value={selectedQueryOption}
              >
                <option value="query">Show all</option>
                <option value="city">City</option>
                <option value="snacks">Snacks</option>
              </select>
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
        <div className="col-auto">
          <button
            className="btn btn-primary"
            onClick={() => history.push("/submit")}
          >
            Add
          </button>
        </div>
      </nav>
    </header>
  );
}
