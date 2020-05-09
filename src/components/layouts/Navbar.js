import React from 'react';
import logo from "../../logo.png";
import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <NavbarContainer>
            <nav className="navbar navbar-expand-lg" style={{ background: '#000000' }}>
                <Link className="navbar-brand text-light" to="/">
                    <img src={logo} alt="..."/>
                    e-languages Nadj
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span>
                        <i className="fas fa-bars" style={{color:'#fff'}}></i>
                    </span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className
                        ="nav-item active">
                            <NavLink className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/languages">Languages</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/courses">Courses</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/levels">Levels</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/aboutus">About Us</NavLink>
                        </li>
                        </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <a className="btn-floating btn-lg btn-fb text-white" type="button" role="button"><i className="fab fa-facebook-f"></i></a>
                        <a className="btn-floating btn-lg btn-tw text-white" type="button" role="button"><i className="fab fa-twitter"></i></a>
                        <a className="btn-floating btn-lg btn-ins text-white" type="button" role="button"><i className="fab fa-instagram"></i></a>
                        <a className="btn-floating btn-lg btn-email text-white" type="button" role="button"><i className="fas fa-envelope"></i></a>
                        <a className="btn-floating btn-lg btn-whatsapp text-white" type="button" role="button"><i class="fab fa-whatsapp"></i></a>
                    </form>
  </div>
</nav>
        </NavbarContainer>
    )
}
export default Navbar;

const NavbarContainer = styled.div`
    img {
        width: 2rem;
    }
    .nav-link {
        color: white !important;
        &:hover {
            color: var(--tomato) !important ;
        }
    }
    
`