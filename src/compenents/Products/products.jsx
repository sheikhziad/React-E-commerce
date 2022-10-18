import React from 'react'
import Product from './product'
import Header from '../header';

  export default function Products({ productData}) {
    return (
      <>
        <Header />
        <div id="products">
          <h3 className="text-center border-bottom mx-5 pt-3 my-3">Inventory</h3>
          <div className="album py-3 bg-light">
            <div className="container">
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
                {productData.map((item) => {
                  return (
                    <div className="col">
                      <Product
                        key={item.id}
                        title={item.title}
                        description={item.description}
                        image={item.image}
                        // image={item.image}
                        price={item.price}
                        item={item}
                      />
                    </div>
                  );
                })}
                <div />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
