import React from 'react'
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Link, Navigate } from 'react-router-dom';
import Wishlist from './wishlist';

export default function Navbar({ wish, count, show, setshow }) {
  return (
    <>
      <header className="px-3 pb-2 pt-3 mb-3 border-bottom navbar">
        <div className="bg-primary fixed-top">
          <div className="container">
            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
              <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                <li>
                  <Link
                    to={"/"}
                    className="nav-link px-2 link-light"
                    size='large'
                    onClick={() => setshow(true)}
                  >
                    <HomeOutlinedIcon />
                  </Link>
                </li>
                {/* <li>
                  <a href="/#products" className="nav-link px-2 link-light">
                    Products
                  </a>
                </li> */}
                

              </ul>
              
              <Link to={"/wishlist"} className="nav-link px-2 link-light">
                  <IconButton
                    size="large"
                    aria-label="show 4 new mails"
                    color="inherit"
                    onClick={() => setshow(!show)}>

                    <Badge badgeContent={wish} color="error">
                      <FavoriteBorderIcon />
                    </Badge>

                  </IconButton>
              </Link>

              <div className="dropdown text-end">
                <a
                  href="#"
                  className="d-block link-light text-decoration-none dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <IconButton
                    size="large"
                    aria-label="show 4 new mails"
                    color="inherit"
                    onClick={() => setshow(!show)}>

                    <Badge badgeContent={count} color="error">
                      <ShoppingCartIcon />
                    </Badge>

                  </IconButton>
                </a>
                <ul className="dropdown-menu text-small">
                  <li>
                    <Link className="dropdown-item" to={"/cart"}>
                      My Cart
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>

                  <li>
                    {localStorage.token ? (
                      <button
                        className="btn btn-sm btn-danger mx-2"
                        onClick={() => {
                          localStorage.removeItem("token");
                          window.location.reload(false);
                        }}
                      >
                        {" "}
                        Logout
                      </button>
                    ) : (
                      <button
                        className="btn btn-sm btn-success mx-2">
                        <Link to="/login"> Login</Link>
                      </button>
                    )}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
