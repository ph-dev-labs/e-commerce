import React from "react";
import "./CardItem.scss";

const CardItem = (props) => {
  const { title, description, price, image, id } = props;
  return (
    <div className="menu-item" key={id}>
      <div className="background-image">
        <img src={image} alt="Item" />
      </div>
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
      <span className="subtitle">{description}</span>
      <span className="subtitle">{price}</span>
    </div>
  );
};

export default CardItem;
