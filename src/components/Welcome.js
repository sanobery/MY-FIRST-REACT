import React from "react";
import { Link } from 'react-router-dom';


function Welcome() {
    return (
        <>

            <div className="container-fluid">
                <div className="row bg-secondary py-2 px-xl-5">
                    <div className="col-lg-6 d-none d-lg-block">
                        <div className="d-inline-flex align-items-center">
                            <a className="text-dark" href="">FAQs</a>
                            <span className="text-muted px-2">|</span>
                            <a className="text-dark" href="">Help</a>
                            <span className="text-muted px-2">|</span>
                            <a className="text-dark" href="">Support</a>
                        </div>
                    </div>
                    <div className="col-lg-6 text-center text-lg-right">
                        <div className="d-inline-flex align-items-center">
                            <a className="text-dark px-2" href="">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a className="text-dark px-2" href="">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a className="text-dark px-2" href="">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                            <a className="text-dark px-2" href="">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a className="text-dark pl-2" href="">
                                <i className="fab fa-youtube"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="row align-items-center py-3 px-xl-5">
                    <div className="col-lg-3 d-none d-lg-block">
                        <a href="" className="text-decoration-none">
                            <h1 className="m-0 display-5 font-weight-semi-bold"><span className="text-primary font-weight-bold border px-3 mr-1">My</span>Shop</h1>
                        </a>
                    </div>
                    <div className="col-lg-6 col-6 text-left">
                        <form action="">
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Search for products" />
                                <div className="input-group-append">
                                    <span className="input-group-text bg-transparent text-primary">
                                        <i className="fa fa-search"></i>
                                    </span>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col-lg-3 col-6 text-right">
                        <a href="" className="btn border">
                            <i className="fas fa-heart text-primary"></i>
                            <span className="badge"></span>
                        </a>
                        <a href="{{route('cart')}}" className="btn border">
                            <i className="fas fa-shopping-cart text-primary"></i>
                            <span className="badge"></span>
                        </a>
                    </div>
                </div>
            </div>
            {/* <!-- Topbar End --> */}


            <div className="container-fluid">
                <div className="row border-top px-xl-5">
                    <div className="col-lg-9">
                        <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0">
                            <a href="" className="text-decoration-none d-block d-lg-none">
                                <h1 className="m-0 display-5 font-weight-semi-bold"><span className="text-primary font-weight-bold border px-3 mr-1">My</span>Shop</h1>
                            </a>
                            <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                                <div className="navbar-nav mr-auto py-0">
                                    <a href="/" className="nav-item nav-link">Home</a>
                                    <div className="nav-item dropdown">
                                        <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Shop</a>
                                        <div className="dropdown-menu rounded-0 m-0">
                                            <a href="/" className="dropdown-item">Kids</a>
                                            <a href="/" className="dropdown-item">Women</a>
                                            <a href="/" className="dropdown-item">Men</a>
                                        </div>
                                    </div>
                                    <a href="/" className="nav-item nav-link">Shop Detail</a>
                                    <div className="nav-item dropdown">
                                        <a href="/" className="nav-link dropdown-toggle" data-toggle="dropdown">Pages</a>
                                        <div className="dropdown-menu rounded-0 m-0">
                                            <a href="/" className="dropdown-item">Shopping Cart</a>
                                            <a href="/" className="dropdown-item">Checkout</a>
                                        </div>
                                    </div>
                                    <a href="/" className="nav-item nav-link">Contact</a>
                                </div>
                                <div className="navbar-nav ml-auto py-0">
                                    {/* @if(Session::has('user'))
                                    {{-- < a href="{{ route('logout') }}" className="nav-item nav-link">{{ Session::get('user.first_name')}}</a> --}}
                                <div className="nav-item dropdown">
                                    <a href="{{route('logout')}}" className="nav-link dropdown-toggle" data-toggle="dropdown">{{ Session::get('user.first_name')}}</a>
                                    <div className="dropdown-menu rounded-0 m-0">
                                        <a href="{{route('profile')}}" className="dropdown-item">Profile</a>
                                        <a href="{{route('logout')}}" className="dropdown-item">Log-Out</a>
                                    </div>
                                </div>
                                @else */}
                                    <a href="{{route('login')}}" className="nav-item nav-link">Login</a>
                                    <a href="{{route('signup')}}" className="nav-item nav-link">Register</a>
                                    {/* @endif */}
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div >
        </>

    );

}

export default Welcome;