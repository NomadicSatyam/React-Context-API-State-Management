import React from 'react';
import { Link } from 'react-router-dom';
import { useStateValue } from '../stateprovider/StateProvider';

const Navbar = () => {
    const [{ basket, user }, dispatch] = useStateValue();
    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}
        >
            <span className="logo">State Management Context API</span>
            <div>
                <Link className="navLink" to="/">
                    Home
                </Link>
                <Link className="navLink" to="/cart">
                    Cart
                </Link>
                <span className="cartCount">Cart items: {basket?.length}</span>
            </div>
        </div>
    );
};

export default Navbar;
