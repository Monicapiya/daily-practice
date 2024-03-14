import React, {useState} from "react";

const Offer = ({offerText}) => {
  const [showOffer, setShowOffer] = useState(false);
  return (
    <div className="res-offers" onClick={() => setShowOffer(true)}>
      {showOffer
        ? offerText
          ? offerText
          : "No offers available"
        : "Get Offers"}
    </div>
  );
};

Offer.defaultProps = {
  offerText: "No offers available"
};

export default Offer;
