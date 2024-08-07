import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';

const Navbar = () => {
    const { logout, token } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light text-dark">
                <div className="container-fluid">
                    <h2 className="navbar-brand" style={{margin:"0 5px"}}>Ecommerce Shop</h2>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                        </ul>

                        <div className=" text-right">
                            {token ? (
                                <div className="login-info">
                                    <button onClick={handleLogout} className="btn btn-success">
                                        Log Out
                                    </button>
                                </div>
                            ) : null}
                        </div>


                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
