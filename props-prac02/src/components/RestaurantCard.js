import React from "react";
import Score from "./Score";
import Details from "./Details";

const RestaurantCard = ({name, categories, location, isOpen, offer, score}) => (
  <>
    <div className="restaurant">
      <Details
        name={name}
        category={categories}
        location={location}
        status={isOpen}
        offerText={offer}
      />
      <Score value={score} />
    </div>
  </>
);

export default RestaurantCard;
