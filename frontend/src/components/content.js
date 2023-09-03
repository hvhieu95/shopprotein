import React from "react";
import BackGroundImage from "../image/background.png";
import MainProduct from "../image/mainproduct.png";
import Whey1 from "../image/whey1.png";
import Vitamin1 from "../image/vitamin1.png";
import ProteinBar1 from "../image/proteinbar1.png";
import Omega1 from "../image/omega1.png";
import Whey2 from "../image/whey2.png";
import Whey3 from "../image/whey3.png";
import Omega2 from "../image/omega2.png";
import PreWorkOut1 from "../image/preworkout1.png";
import PreWorkOut2 from "../image/preworkout2.png";
import PreWorkOut3 from "../image/preworkout3.png";
import "../style/content.css";
import { Link } from "react-router-dom";

export function MainContent() {
  const scrollProducts = (value) => {
    const products = document.querySelector(".listproductsselling");
    products.scrollLeft += value;
  };

  return (
    <div>
      <div className="background">
        <img
          src={BackGroundImage}
          alt="backgroundimage"
          className="backgroundimage"
        />
        <div className="elementor-container">
          <div className="elementor">
            <div className="product_intro">
              <div
                className="product_intro"
                style={{ backgroundImage: `url(${MainProduct})` }}
              ></div>
            </div>
            <div className="information">
              <h1>Premium Whey Protein</h1>
              <h2>Fuel Your Fitness Journey!</h2>
              <p>
                Explore our wide range of high-quality whey protein products,
                designed to support your fitness goals, enhance muscle growth,
                and aid in recovery. Whether you're a professional athlete or
                just starting your fitness journey, our protein supplements are
                the perfect choice for you.
              </p>
              <Link to="/allproducts"className="shop-now-button">
                <span className="new-cart-icon">👜</span> START SHOPPING
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundColor: "		#f8f8ff",
        }}
        className="background2"
      >
        <div className="best-selling-products">
          <h2>Best Selling Products</h2>
          <div className="scroll-container">
            <button
              className="scroll-button left"
              onClick={() => scrollProducts(-100)}
            >
              &lt;
            </button>
            <div className="listproductsselling">
              <div className="productselling">
                <a href="#">
                  <img src={Whey1} alt="whey1" />
                  <h3>Supplements</h3>
                  <p>Gold Stand Whey 100%</p>
                  <span>£35.00</span>
                  <div className="product-rating">★★★★★</div>
                </a>
              </div>
              <div className="productselling">
                <a href="#">
                  <img src={Vitamin1} alt="vitamin1" />
                  <h3>Supplements</h3>
                  <p>Platinum Multi Vitamin</p>
                  <span>£15.00</span>
                  <div className="product-rating">★★★★★</div>
                </a>
              </div>
              <div className="productselling">
                <a href="#">
                  <img src={Omega1} alt="omega1" />
                  <h3>Supplements</h3>
                  <p>Omega-3 Fish Oil</p>
                  <span>£25.00</span>
                  <div className="product-rating">★★★★★</div>
                </a>
              </div>
              <div className="productselling">
                <a href="#">
                  <img src={ProteinBar1} alt="proteinbar1" />
                  <h3>Supplements</h3>
                  <p>High Protein Bar</p>
                  <span>£5.00</span>
                  <div className="product-rating">★★★★★</div>
                </a>
              </div>
              <div className="productselling">
                <a href="#">
                  <img src={Whey2} alt="whey2" />
                  <h3>Supplements</h3>
                  <p>Whey Protein Isolate</p>
                  <span>£35.00</span>
                  <div className="product-rating">★★★★★</div>
                </a>
              </div>
            </div>
            <button
              className="scroll-button right"
              onClick={() => scrollProducts(100)}
            >
              {">"}
            </button>
          </div>
        </div>
      </div>
      <div className="background3">
        <div className="list_new_products">
          <h2>New Products</h2>
          <div className="scroll-container">
            <button
              className="scroll-button left"
              onClick={() => scrollProducts(-100)}
            >
              &lt;
            </button>
            <div className="new_products">
              <div className="new_product">
                <a href="#">
                  <img src={Whey3} alt="whey3" />
                  <h3>Supplements</h3>
                  <p>Vegetarian Protein Powder</p>
                  <span>£35.00</span>
                  <div className="product-rating">★★★★★</div>
                </a>
              </div>
              <div className="new_product">
                <a href="#">
                  <img src={Omega2} alt="omega2" />
                  <h3>Supplements</h3>
                  <p>OmegaGenics EPA-DHA 720</p>
                  <span>£15.00</span>
                  <div className="product-rating">★★★★★</div>
                </a>
              </div>
              <div className="new_product">
                <a href="#">
                  <img src={PreWorkOut1} alt="preworkout1" />
                  <h3>Supplements</h3>
                  <p>Pre-Workout Boogeyman Punchl</p>
                  <span>£25.00</span>
                  <div className="product-rating">★★★★★</div>
                </a>
              </div>
              <div className="new_product">
                <a href="#">
                  <img src={PreWorkOut2} alt="preworkout2" />
                  <h3>Supplements</h3>
                  <p> Pre-Workout Strawberry-Lemonade</p>
                  <span>£25.00</span>
                  <div className="product-rating">★★★★★</div>
                </a>
              </div>
              <div className="new_product">
                <a href="#">
                  <img src={PreWorkOut3} alt="preworkout3" />
                  <h3>Supplements</h3>
                  <p> Pre-Workout Blue Raspberry</p>
                  <span>£25.00</span>
                  <div className="product-rating">★★★★★</div>
                </a>
              </div>
            </div>
            <button
              className="scroll-button right"
              onClick={() => scrollProducts(100)}
            >
              {">"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
