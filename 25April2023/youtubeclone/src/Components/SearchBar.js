import { useState } from "react";

function SearchBar(props) {

    const [searchForm, setSearchForm] = useState({
        searchtext: ''
    });

    const searchState = (event) => {
        console.log(event.target.value);
        setSearchForm({ searchtext: event.target.value });
    }

    const search = (event) => {
        event.preventDefault();
        props.onSearch(searchForm.searchtext);
    }
    return (
        <div>
            <h1>Search Bar</h1>
            <input size="50" style={{ padding: "10px" }} onKeyUp={searchState} type="text" name="searchtext"></input>
            <button onClick={search} style={{ padding: "10px" }}>Search</button> <br></br><br></br>
        </div>
    );
}

export default SearchBar;