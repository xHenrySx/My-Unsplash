import React from "react";

export default function SearchField(props) {


  return (
    <div className="search-container">
      <div className="search-field">
        <span className="material-symbols-outlined search-icon">search</span>
        <input type="text" className="search-input" placeholder="Search" onChange={
          (e) => {
            props.setSearch(e.target.value);
          }
        } />
      </div>
    </div>
  );
}
