import React, {useState} from "react";

function Search({onSearch}) {
  const [searchText, setSearchText] = useState("");

  function handleSearchChange(event) {
    setSearchText(event.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSearch(searchText);
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchText}
        onChange={handleSearchChange}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
