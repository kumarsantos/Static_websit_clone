import React from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import { FaFire } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { GiCrystalize } from "react-icons/gi";
import { BsXDiamondFill } from "react-icons/bs";
import "./Pricing.css";
export const Pricing = () => {
  return (
    <IconContext.Provider value={{ color: "#fff", size: "64" }}>
      <div>
        <div className="pricing__section">
          <div className="pricing__wrapper">
            <div className="pricing__heading">
              <div className="pricing__container">
                <Link to="/sign-up" className="pricing__container__card">
                  <div className="pricing__container-cardInfo">
                    <div className="icon">
                      <FaFire />
                    </div>
                    <h3>Starter</h3>
                    <h4>$8.99</h4>
                    <p>per month</p>
                    <ul className="pricing__container-features">
                      <li>100 Transaction</li>
                      <li>2% Cash Back</li>
                      <li>$10,000 Limit</li>
                    </ul>
                    <Button buttonSize="btn--wide" buttonColor="btn--primary">
                      Choose Plan
                    </Button>
                  </div>
                </Link>
                <Link to="/sign-up" className="pricing__container__card">
                  <div className="pricing__container-cardInfo">
                    <div className="icon">
                      <BsXDiamondFill />
                    </div>
                    <h3>Gold</h3>
                    <h4>$29.99</h4>
                    <p>per month</p>
                    <ul className="pricing__container-features">
                      <li>1000 Transaction</li>
                      <li>3.5% Cash Back</li>
                      <li>$100,000 Limit</li>
                    </ul>
                    <Button buttonSize="btn--wide" buttonColor="blue">
                      Choose Plan
                    </Button>
                  </div>
                </Link>
                <Link to="/sign-up" className="pricing__container__card">
                  <div className="pricing__container-cardInfo">
                    <div className="icon">
                      <GiCrystalize />
                    </div>
                    <h3>Diamond</h3>
                    <h4>$99.99</h4>
                    <p>per month</p>
                    <ul className="pricing__container-features">
                      <li>Unlimited Transaction</li>
                      <li>5% Cash Back</li>
                      <li>Unlimited Spending</li>
                    </ul>
                    <Button buttonSize="btn--wide" buttonColor="btn--primary">
                      Choose Plan
                    </Button>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
};
export default Pricing;
