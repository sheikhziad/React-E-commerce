import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

export default function OrderSuccess() {

  const orders = JSON.parse(localStorage.getItem("ordersdata"));

  const navigate = useNavigate()

    useEffect(() => {
      if((!localStorage.getItem('token'))) {
        navigate('/login');
        window.location.reload(false);
      }
    }, [])
    

  return (
    <>
      {orders.name == null ? (
        <section>{navigate("/")}</section>
      ) : (
        <div className="my-2 container card text-center">
          <h4 className="my-5">Order Placed Successfully</h4>
          <p className="text-monospace">
            Thank you, <strong>{orders.name}</strong> for shopping with us. We
            will process your order shortly
          </p>

          <div className="card">
            <h5 className="py-3">Your Details</h5>
              <ul className="list-group">
                <li className="list-group-item">Name : {orders.name}</li>
                <li className="list-group-item">Phone : {orders.phone}</li>
                <li className="list-group-item">Address : {orders.address}</li>
              </ul>
          </div>

          <a href="/" className="btn btn-success my-2">
            Go to Home
          </a>
        </div>
      )} 
    </>
  );
}
