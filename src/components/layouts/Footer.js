import React from 'react'
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const Footer = () => {
    return (
        <FooterContainer>
            <div className="container-fluid">
            <div className="row pt-5">
            <div className="col-sm-3 col-xs-12 d-flex">
            <ul className="list-inline mx-auto justify-content-center">
            <Link to="/aboutus">
            <li>Language Holidays</li>
                            </Link>
                            <Link to="/aboutus">
                                <li>Corporate Training</li>
                                </Link>
                            <Link to="/aboutus">
                                <li>Private Courses</li>
                            </Link>
                            <Link to="/aboutus">
                                <li>TEFL</li>
                            </Link>
                            <Link to="/aboutus">
                                <li>My E-languages Nadj</li>
            </Link>
                            <Link to="/aboutus">
                                <li>Contact Us</li>
                            </Link>
            </ul>
            </div>
                    <div className="col-sm-3 col-xs-12 d-flex">
                        <ul className="list-inline mx-auto justify-content-center">
                            <Link to="/levels">
                                <li>Beginner</li>
                            </Link>
                            <Link to="/levels">
                                <li>Elementary</li>
                            </Link>
                            <Link to="/levels">
                                <li>Intermediate</li>
                            </Link>
                            <Link to="/levels">
                                <li>Upper-Intermediate</li>
                            </Link>
                            <Link to="/levels">
                                <li>Advanced</li>
                            </Link>
                            <Link to="/levels">
                                <li>Proficient</li>
                            </Link>
                        </ul>
                    </div>
                    <div className="col-sm-3 col-xs-12 d-flex">
                        <ul className="list-inline mx-auto justify-content-center">
                            <Link to="/courses">
                                <li>German</li>
                            </Link>
                            <Link to="/courses">
                                <li>English</li>
                            </Link>
                            <Link to="/courses">
                                <li>French</li>
                            </Link>
                            <Link to="/courses">
                                <li>Italian</li>
                            </Link>
                            <Link to="/courses">
                                <li>Spanish</li>
                            </Link>
                            <Link to="/courses">
                                <li>Swedish</li>
                            </Link>
                        </ul>
                    </div>
            <div className="footer-bottom">
                    <p className="pt-3 pb-2 pl-5 copy-right">
                        &copy;&nbsp;e-languages Nadj
                        {`${new Date().getFullYear()}`}
                        &nbsp; All Rights Reserved
                    </p>
            </div>
            </div>
            </div>
        </FooterContainer>
    )
}
export default Footer;

const FooterContainer = styled.div `
background: var(--dark);

ul li {
    list-style: none;
}
a {
    color: var(--white);
    text-decoration:none;
    &:hover {
        color: var(--red);
        text-decoration: none;
    }
}
.copy-right {
    color:var(--white);
}

`
