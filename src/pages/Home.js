import React from 'react';
import { Image } from "react-bootstrap";
// import Slider from "react-slick";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const Home = props => {


  // );




  return (
    <div style={{
      backgroundImage: "url(/2233.jpg)",
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      alignItems: 'center',
      width: '100%',
      height: '100vh', padding: '350px',
      display: "flex", justifyContent: "space-between"


    }}>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <div className="card4" style={{ textAlign: 'center' }} width="200" height="200">
              <div className="card4-image">
                <img src="images/expired.png" width="200" height="200" padding="30" />
              </div>
              <div className="card-body text-dark">
                <h4 style={{ color: 'white' }} className="cad-title">
                  <b>Expiry Reminder</b>
                </h4>
                <a href="http://localhost:3000/expiryReminder" className="btn btn-success">
                  Start
                </a>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="card1" style={{ textAlign: 'center' }} width="200" height="200">
              <div className="card1-image">
                <img src="images/warehouse.png" width="200" height="200" padding="30" />
              </div>
              <div className="card-body text-dark">
                <h4 style={{ color: 'white' }} className="cad-title">
                  <b>Stock Reminder</b>
                </h4>
                <a href="http://localhost:3000/stockReminder" className="btn btn-success">
                  Start
                </a>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="card2" style={{ textAlign: 'center' }} width="200" height="200" padding="50">
              <div className="card2-image">
                <img src="images/repeat.png" width="200" height="200" padding="30" />
              </div>
              <div className="card-body text-dark">
                <h4 style={{ color: 'white' }} className="cad-title">
                  <b>Re-Order Reminder</b>
                </h4>
                <a href="http://localhost:3000/reorder" className="btn btn-success">
                  Start
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-6">
            <div className="card1" style={{ textAlign: 'center', marginLeft: "100px" }} width="200" height="200">
              <div className="card1-image">
                <img src="images/cart.png" width="200" height="200" padding="30" />
              </div>
              <div className="card-body text-dark">
                <h4 style={{ color: 'white' }} className="cad-title">
                  <b>Create Materials</b>
                </h4>
                <a href="http://localhost:3000/products" className="btn btn-success">
                  Start
                </a>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="card2" style={{ textAlign: 'center', marginRight: "100px" }} width="200" height="200">
              <div className="card2-image">
                <img src="images/packages.png" width="200" height="200" padding="30" />
              </div>
              <div className="card-body text-dark">
                <h4 style={{ color: 'white' }} className="cad-title">
                  <b>Stock</b>
                </h4>
                <a href="http://localhost:3000/stock" className="btn btn-success">
                  Start
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>



    // <div className="card-wrapper">



    // </div>

  )
}






export default Home;













