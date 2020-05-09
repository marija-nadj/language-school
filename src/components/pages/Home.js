import React from 'react'
import styled from 'styled-components';

const Home = () => {
    return (
        <>
        <MainContainer className="main-container">
                <div className="container">
            <h1 className="display-5 text-uppercase py-5 text-center">
                Welcome to Online Language School
            </h1>
                    <div class="alert alert-primary" role="alert">
                        <p>Online Language Courses from  €180</p>
                    </div>
                    <div class="alert alert-primary" role="alert">
                        <p>10-week Language Courses starting in April, May, June, July, September, October</p>
                    </div>
                    <div class="alert alert-primary" role="alert">
                        <p>Private Language Courses from €30</p>
                    </div>
                    <div class="alert alert-primary" role="alert">
                        <p>Corporate Language Training from €30</p>
                    </div>
        <div className="form-box">
                        <div class="alert alert-primary d-flex justify-content-center" role="alert">
                            <p>Register/Login</p>
                        </div>
        <form>
            <div className="form-row mr-auto">
            <div className="col-md-6 mb-4">
                <input type="text" className="form-control" placeholder="First Name"/>
            </div>
                            <div className="col-md-6 mb-4">
                                <input type="text" className="form-control" placeholder="Last Name" />
                            </div>
                            <div className="col-md-6 mb-4">
                                <input type="text" className="form-control" placeholder="Phone" />
                            </div>
                            <div className="col-md-6 mb-4">
                                <input type="text" className="form-control" placeholder="Email" />
                            </div>
            </div>
            <button className="btn btn-primary text-uppercase">Enter Virtual Classroom</button>
        </form>
        </div>
        </div>
        </MainContainer>
        </>
    )
}
export default Home;


const MainContainer = styled.div `

h1 {
    color: var(--tomato);
}
p {
    color: var(--tomato);
    font-size: 1.5rem;
}
h3 {
    color: var(--red);
    position: center; z-index: 1;
    background: white; opacity: 0.75;
    margin: 2rem 20rem;
    padding: 5rem 5rem;
    border-radius: 0.5rem;

}
.alert {
    position: center; z-index: 1;
    background: white; opacity: 0.75;

}
.form-box {
    padding: 1rem 0;
}
button {
    background:transparent;
    width:100%;
    border-color: var(--red);
    &:hover {
        background: var(--red);
    }
    &:focus {
        background:var(--tomato);
        border-color:var(--tomato);

    }

    }
}
`