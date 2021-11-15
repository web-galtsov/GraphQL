import React from 'react'
import "./Nav.css";
//import { Container } from "react-bootstrap"
import search from '../../assets/svg/loupe.svg'
import cart from '../../assets/svg/shopping-cart.svg'

export default function Nav() {
    return (
        <div className="Nav">
            <div className="nav-container">
                <a href='/' className="header">petShop<span>.com</span></a>
                <div className="nav-delivery-info-container">
                    <p>Deliver to Laith</p>
                    <h2>432 Park Avenue</h2>
                </div>
                <div className="nav-input-container">
                    <select>
                        <option>All</option>
                    </select>
                    <input />
                    <button className="nav-btn">
                        <img src={search} alt=''/>
                    </button>
                </div>
                <div className="nav-delivery-info-container">
                    <p>Hello, Laith</p>
                    <h2>Account & Lists</h2>
                </div>
                <div className="nav-delivery-info-container">
                    <p>Returns</p>
                    <h2>& Orders</h2>
                </div>
                <div className="nav-cart-container">
                    <img src={cart} alt=''/>
                    <h2>cart</h2>
                </div>
            </div>
        </div>
    )
}
