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
    <header className="mt-5 ">
      <nav className="row px-5 justify-content-between navbar navbar-expand-lg navbar-light bg-light ">
        <div className="col-auto">
          <Link className="navbar-brand m-3" to="/">
            PingPong Locator
          </Link>
        </div>
        <div className=" col-auto">
          <button
            className=" btn  btn-outline-secondary "
            onClick={() => history.push("/submit")}
          >
            Add
          </button>
        </div>
        <div className=" col-5 px-4">
          <form className="col-auto" onSubmit={handleSubmit}>
            <div className="input-group  col-auto">
              <input
                name="searchInput"
                className="col-auto border-secondary form-control "
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={handleChange}
                value={searchText}
              />

              <select
                name="options"
                id="options"
                className="col-auto p-2 text-secondary custom-select"
                onChange={handleSelect}
                value={selectedQueryOption}
              >
                <option selected>Show all</option>
                <option value="city">City</option>
                <option value="snacks">Snacks</option>
              </select>

              <button
                className="col btn btn-outline-secondary col-auto"
                type="submit"
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </nav>
    </header>
  );
}
