import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Search from "./components/Search/Search";
import Bookmark from "./components/Bookmark/Bookmark";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <a className="link" href="/bookmarks">
          See all bookmarked repos
        </a>
        <Route exact path="/" component={Search} />
        <Route exact path="/bookmarks" component={Bookmark} />
      </BrowserRouter>
    </div>
  );
}

export default App;
