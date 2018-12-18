import React from 'react';
import './imageCard.css';

const ImageCard = props => (
  <div
      id={props.name}
      onClick={() => props.handleClick(props.name)}
    >
      <img className="img-thumbnail" alt={props.name} src={props.img_url} />
  </div>
);

export default ImageCard;