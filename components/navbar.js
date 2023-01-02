import React from "react";
import "../styles/navbar.css";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas, faFontAwesome, faMaximize } from '@fortawesome/free-solid-svg-icons'

const Navbar = ({ setShow, size }) => {
  return (
    <nav>
      <div className="nav_box">
        <span className="my_shop" onClick={() => setShow(true)}>
          Shopping Items
        </span>
        <div className="cart" onClick={() => setShow(false)}>
          <span>
            <button style={{height: "35px", width: "60px", backgroundColor: "red", borderColor: "black", color: "white", fontWeight: "bold"}}>Cart</button>

          </span>
          <span>{size}</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;