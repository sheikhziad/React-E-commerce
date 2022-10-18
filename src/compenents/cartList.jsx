import React from 'react'

export default function cartList({ id, image, title, price, handleDelete }) {

  return (
    <>
      <div className="card container cart">
        <div className="row py-2">
          <div className="col-2">
            <img  src={image} />
          </div>
          <div className="col-10">
            <h6>{title}</h6>
            <p>$ {price}</p>
            <a
              onClick={() => handleDelete(id)}
              className="btn btn-sm btn-danger"
            >
              Delete
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
