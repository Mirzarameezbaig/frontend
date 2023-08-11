import React from "react";

const ImageCard = ({ image, description }) => {
  return (
    <div className="image-card">
      <img src={image} alt={description} className="card-image" />
      <div className="card-description">{description}</div>
    </div>
  );
};

export default ImageCard;