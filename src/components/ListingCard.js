import React, {useState} from "react";

function ListingCard({listing, onDeleteListing}) {
  const [favorite, setFavorite] = useState(false);

  function handleFavoriteClick() {
    setFavorite(!favorite);
  }

  function handleDeleteClick() {
    fetch(`http://localhost:6001/listings/${listing.id}`, {
      method: "DELETE",
    });
    onDeleteListing(listing.id);
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={listing.image} alt={listing.description} />
      </div>
      <div className="details">
        {favorite ? (
          <button onClick={handleFavoriteClick} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={handleFavoriteClick} className="emoji-button favorite">☆</button>
        )}
        <strong>{listing.description}</strong>
        <span> · {listing.location}</span>
        <button onClick={handleDeleteClick} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
