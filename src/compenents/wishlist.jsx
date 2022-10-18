import React from "react";

export default function Wishlist({ handleClick, wishlist}) {
  return (
    <>
      <h4 className="text-center py-5">WishList</h4>
      {wishlist != 0 ? (
        <section>
          <div className="album py-5 bg-light">
            <div className="container">
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                {wishlist.map((item) => {
                  return (
                    <div className="col">
                      <div>
                        <img src={item.image} width="180px"/>
                        <h4>{item.title}</h4>
                        {/* <p>{item.description}</p> */}
                        <p>$ {item.price}</p>
                        <a
                          className="btn btn-sm btn-outline-success"
                          onClick={() => {
                            handleClick(item);
                          }}
                        >
                          Add to Cart
                        </a>
                      </div>
                    </div>
                  );
                })}
                <div />
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section>
          <div className="alert container border my-5 fs-5 text-center text-warning ">
            <span>Wishlist is empty, add some item</span>
          </div>
        </section>
      )}
    </>
  );
}
