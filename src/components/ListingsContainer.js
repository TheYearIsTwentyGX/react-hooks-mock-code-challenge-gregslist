import React, {useEffect, useState} from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listings, searchText, onDelete}) {

  const filteredListings = listings.filter((listing) => {
    if (searchText === "") {
      return true;
    } else {
    return listing.description.toLowerCase().includes(searchText.toLowerCase())
    }
  });

  return (
    <main>
      <ul className="cards">
        {filteredListings.map((listing) => (<ListingCard key={listing.id} listing={listing} onDeleteListing={onDelete}/>))}
      </ul>
    </main>
  );
}

export default ListingsContainer;
