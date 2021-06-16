
import { useState, useCallback, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Main from "./Main";
import Navbar from "./Navbar";
import mockData from "./mockData.json";
import axios from "axios";

const {
  REACT_APP_CONTENTFUL_URL,
  REACT_APP_CONTENTFUL_SPACE_ID,
  REACT_APP_CONTENTFUL_KEY_ACCESS_TOKEN,
} = process.env;

function App() {
  const [posts, setPosts] = useState();
  const [isFetching, setIsFetching] = useState(true);

  const fetchData = useCallback(async (queryParameter) => {
    let fetchParameter;
    queryParameter
      ? (fetchParameter = queryParameter)
      : (fetchParameter = "entries?");

    try {
      setIsFetching(true);
      const retrievedData = await axios.get(
        `${REACT_APP_CONTENTFUL_URL}/spaces/${REACT_APP_CONTENTFUL_SPACE_ID}/${fetchParameter}access_token=${REACT_APP_CONTENTFUL_KEY_ACCESS_TOKEN}`
      );
      setPosts(retrievedData.data.items);
      setIsFetching(false);
    } catch (e) {
      console.log(e.message);
    }
  }, []);
  useEffect(() => {
    fetchData("entries?");
  }, [fetchData]);

  //console.log(posts);
  return (
    <>
      <Navbar></Navbar>
      {!isFetching && <Main posts={posts}></Main>}
    </>
  );
}

export default App;
