import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [searchText, setSearchText] = useState("");
  const [listings, setListings] = useState([]);

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then((r) => r.json())
      .then(setListings);
  }, []);

  function handleSearchSubmit(query) {
    setSearchText(query);
  }

  function handleDeleteListing(deletedListing) {
    const updatedListings = listings.filter((listing) => listing.id !== deletedListing.id);
    setListings(updatedListings);
  }

  return (
    <div className="app">
      <Header onSearchSubmit={handleSearchSubmit}/>
      <ListingsContainer listings={listings} searchText={searchText} onDelete={handleDeleteListing} />
    </div>
  );
}

export default App;
