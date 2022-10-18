import { height, width } from '@mui/system';
import React from 'react'

export default function header() {
  return (
    <>
      <div>
        <div class="headerBg position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center mt-5 banner">
          <div class="col-md-5 p-lg-5 mx-auto my-5">
            <h2 class="display-6 fw-normal">Your shopping destination</h2>
            <p class="lead fw-normal">
              E-Commerce Website 
            </p>
            <a class="btn btn-outline-secondary" href="#products">
              Buy Now
            </a>
          </div>
          <div class="product-device shadow-sm d-none d-md-block"></div>
          <div class="product-device product-device-2 shadow-sm d-none d-md-block"></div>
        </div>
      </div>
    </>
  );
}
