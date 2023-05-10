import React, {useEffect, useState} from "react";
import { useDispatch } from "react-redux";
import { fetchProductByName } from "../../features/productsByNameSilce";
import "./searchBar.css"


function SearchBar() {
    const dispatch = useDispatch();
    const [searchProduct, setSearchProduct] = useState("");

    const handleInput = (e) => {
        e.preventDefault()
        setSearchProduct(e.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        dispatch(fetchProductByName(searchProduct))
    }

    return (
        <>
            <div className=" search-container ">
            <input className="search-input" type="text" placeholder="Search product" onChange={handleInput}/>
            <button className="search-buttom " type="submit" onClick={handleSubmit}>
                Search
            </button>
        </div>
        </>
    )
}

export default SearchBar;
