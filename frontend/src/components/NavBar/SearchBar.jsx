import React from "react";
import "./searchBar.css"

function SearchBar() {


    return (
        <>
            <div className=" search-container ">
            <input className="search-input" type="text" placeholder="Search product"/>
            <button className="search-buttom " type="submit">
                Search
            </button>
        </div>
        </>
    )
}

export default SearchBar;
