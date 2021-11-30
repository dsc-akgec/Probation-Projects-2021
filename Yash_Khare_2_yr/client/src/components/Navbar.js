import React from "react"
import { Link } from "react-router-dom"

function Navbar(){
    return(
        <>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link class="navbar-brand mt-2 mt-lg-0" to="/" style={{marginLeft : 10}}>
                    <h3>E-Kart</h3>
                </Link>
            <div class="container-fluid">
                <button
                class="navbar-toggler"
                type="button"
                data-mdb-toggle="collapse"
                data-mdb-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
                >
                <i class="fas fa-bars"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                    <Link class="nav-link" to="/register">Register</Link>
                    </li>
                    <li class="nav-item">
                    <Link class="nav-link" to="/login">Login</Link>
                    </li>
                    <li class="nav-item">
                    <Link class="nav-link" to="/profile">My Profile</Link>
                    </li>
                    <li class="nav-item">
                    <Link class="nav-link" to="/cart">Cart</Link>
                    </li>
                    <li class="nav-item">
                    <Link class="nav-link" to="/logout">Logout</Link>
                    </li>
                </ul>
                </div>
                <div class="d-flex align-items-center">
                <a class="text-reset me-3" href="/">
                    <i class="fas fa-shopping-cart"></i>
                </a>
                <a
                    class="text-reset me-3 dropdown-toggle hidden-arrow"
                    href="/"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-mdb-toggle="dropdown"
                    aria-expanded="false"
                >
                    <i class="fas fa-bell"></i>
                    <span class="badge rounded-pill badge-notification bg-danger">1</span>
                </a>
                <ul
                    class="dropdown-menu dropdown-menu-end"
                    aria-labelledby="navbarDropdownMenuLink"
                >
                    <li>
                    <a class="dropdown-item" href="/">Some news</a>
                    </li>
                    <li>
                    <a class="dropdown-item" href="/">Another news</a>
                    </li>
                    <li>
                    <a class="dropdown-item" href="/">Something else here</a>
                    </li>
                </ul>
                <a
                    class="dropdown-toggle d-flex align-items-center hidden-arrow"
                    href="/profile"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-mdb-toggle="dropdown"
                    aria-expanded="false"
                >
                    <img
                    src="https://media.istockphoto.com/vectors/user-avatar-profile-icon-black-vector-illustration-vector-id1209654046?k=20&m=1209654046&s=612x612&w=0&h=Atw7VdjWG8KgyST8AXXJdmBkzn0lvgqyWod9vTb2XoE="
                    class="rounded-circle"
                    height="25"
                    alt=""
                    loading="lazy"
                    />
                </a>
                <ul
                    class="dropdown-menu dropdown-menu-end"
                    aria-labelledby="navbarDropdownMenuLink"
                >
                    <li>
                    <a class="dropdown-item" href="/">My profile</a>
                    </li>
                    <li>
                    <a class="dropdown-item" href="/">Settings</a>
                    </li>
                    <li>
                    <a class="dropdown-item" href="/">Logout</a>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
            <div className="below-nav" style={{width:"100vw",backgroundColor :"red"}}>
                <h5 style={{color:"white"}}>Welcome to E-kart!!</h5>
                <span style={{color:"white" ,marginLeft  : "0vw",fontSize :20}}> 
                    We have the widest Range of <Link style={{color:"white"}}to="/electronics">Electronics</Link> <Link style={{color:"white"}}to="/clothes">Clothes</Link> <Link style={{color:"white"}}to="/books">Books</Link> <Link style={{color:"white"}}to="/home">Home-Supplies</Link>
                </span>
            </div>
        </>
    )
}
export default Navbar
