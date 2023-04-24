import { useState } from "react";

function SearchBar(){

    const[searchForm, setSearchForm] = useState({
        searchtext:''
    });

    const searchState = (event) =>{
        console.log(event.target.value);
    }

    return(
        <div>
            <h1>Search Bar</h1>
            <input onKeyUp={searchState} type="text" name="searchtext"></input>
            <button>Search</button>
        </div>
    );
}

export default SearchBar;