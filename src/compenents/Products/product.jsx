import React, { useContext } from "react";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Context } from '../context';

export default function Product({ key, image, title, price, item }) {
  const { handleClick , handleWishlist } = useContext(Context);

  return (
    <>
      <div className="card">
        <img src={image} />
        <div className="card-body">
          <h6 className="card-title">{title}</h6>
          <p>$ {price}</p>

          <div className="d-flex justify-content-between">
            <a className="btn btn-sm btn-outline-success"
              onClick={() => { handleClick(item);}}> Add to Cart </a>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon onClick={ ()=> {handleWishlist(item);} } />
            </IconButton>
          </div>
        </div>
      </div>
    </>
  );
}
