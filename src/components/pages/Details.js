import React, { Component } from 'react'
import { DataConsumer } from '../context';
import { Link } from 'react-router-dom';

export default class Details extends Component {
    render() {
        return (
            <DataConsumer>
                {data => {
                    const {
                        id,
                        title,
                        img,
                        level,
                        text
                    } = data.detailInfo;
                return (
                    <React.Fragment>
                        <div className="container py-">
                            <div className="row">
                                <div className="col-10 mx-auto text-center my-5">
                                    <h1>{title}</h1>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-10 mx-auto col-md-6 my-3">
                                    <img src={img} className="img-fluid" alt="product" />
                                </div>
                                <div className="col-10 mx-auto col-md-6 my-3">
                                    <h5 className="text-title mt-2 mb-2">
                                        Level: {level}
                                    </h5>
                                    <p className="font-weight-bold mt-2 mb-2">
                                        Learn online
                                </p>
                                    <p className="text-muted">
                                        {text}
                                    </p>
                                    <Link to="/languages" className="language-link">Back to Languages>></Link>
                                </div>
                            </div>
                        </div>
                    </React.Fragment>
                )
                }}
            </DataConsumer>
        )
    }
}
