import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const PageNotFound = () => {
    return (
        <ErrorPage className="container">
        <div className="row">
        <div className="col-md-12">
        <div className="error-template">
            <h2>404 Not Found</h2>
            <div className="error-details">
            The requested page not found.
            </div>
            <div className="error-actions">
            <Link to="/" className="btn btn-outline-secondary btn-lg">
                <i className="fas fa-home">Back to Home</i>
            </Link>
            </div>
        </div>
        </div>
        </div>
        </ErrorPage>
    )
}
export default PageNotFound;

const ErrorPage = styled.div `
.error-template {
    padding: 12rem;
    text-align: center;
}
.error-actions {
    margin: 1rem 1rem;
}

`