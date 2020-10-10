import React from "react";

import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import PostStatusFilter from "../post-status-filter";
import PostList from "../post-list";
import PostAddForm from "../post-add-form";

import "./app.css";
const App = () => {
  const data = [
    // { label: "Going to learn JS", important: false, id: "sda" },
    { label: "Going to learn React", important: true, id: "asd" },
    { label: "Going to learn Vue", important: false, id: "dsa" },
    { label: "Going to learn Angular", important: false, id: "sad" },
  ];

  return (
    <div className="app">
      <AppHeader />
      <div className="search-panel d-flex">
        <SearchPanel />
        <PostStatusFilter />
      </div>
      <PostList posts={data} />
      <PostAddForm />
    </div>
  );
};
export default App;
