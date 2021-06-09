import {useState} from "react";
import logo from "./logo.svg";
import "./App.css";
import Main from "./Main";
import Navbar from "./Navbar";
import mockData from "./mockData.json";

function App() {
  const [posts,setPosts] = useState(mockData.items);

  return (
    <>
      <Navbar></Navbar>
      <Main posts={posts}></Main>
    </>
  );
}

export default App;
