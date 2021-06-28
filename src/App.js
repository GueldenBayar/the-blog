import { useState, useCallback, useEffect } from "react";

import "./App.css";
import Main from "./Main";
import Navbar from "./Navbar";

import axios from "axios";

// const {
//   REACT_APP_CONTENTFUL_URL,
//   REACT_APP_CONTENTFUL_SPACE_ID,
//   REACT_APP_CONTENTFUL_KEY_ACCESS_TOKEN,
// } = process.env;

function App() {
  const [posts, setPosts] = useState();
  const [isFetching, setIsFetching] = useState(true);

  const fetchData = useCallback(async (queryString, selectedQueryOption) => {
    // let fetchParameter = ``;
    // if (queryString) {
    //   queryParameter === "query"
    //     ? (fetchParameter = `&query=${queryString}`)
    //     : queryParameter === "city"
    //     ? (fetchParameter = `&content_type=tableLocation&fields.adress[match]=${queryString}`)
    //     : (fetchParameter = `&content_type=tableLocation&fields.supplies[match]=${queryString}`);
    // }

    try {
      setIsFetching(true);
      if (!selectedQueryOption) {
        const retrievedData = await axios.get(
          `http://localhost:3001/api/locations/posts`
        );
        setPosts(retrievedData.data);
        setIsFetching(false);
        console.log(typeof retrievedData.data);
      }

      const queryOptions = ["show_all", "city", "snacks"];

      // if (queryOptions.includes(selectedQueryOption)) {
      //   const retrievedData = await axios.get(
      //     `http://localhost:3001/api/locations/posts`
      //   );
      //   setPosts(retrievedData.data);
      //   setIsFetching(false);
      //   console.log(typeof retrievedData.data);
      // }

      // add body
    } catch (e) {
      console.log(e.message);
    }
    // old fetch to contentful
    //  try {
    //    setIsFetching(true);
    //    const retrievedData = await axios.get(
    //      `${REACT_APP_CONTENTFUL_URL}/spaces/${REACT_APP_CONTENTFUL_SPACE_ID}/entries?access_token=${REACT_APP_CONTENTFUL_KEY_ACCESS_TOKEN}${fetchParameter}`
    //    );
    //    setPosts(retrievedData.data.items);
    //    setIsFetching(false);
    //  } catch (e) {
    //    console.log(e.message);
    //  }
  }, []);
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  //console.log(posts);
  return (
    <div className="row w-100">
      <Navbar fetchData={fetchData}></Navbar>
      {!isFetching && <Main posts={posts}></Main>}
    </div>
  );
}

export default App;
