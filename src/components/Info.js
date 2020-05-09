import React, { Component } from 'react';
import { DataConsumer } from './context';
import { Link } from 'react-router-dom'


class Info extends Component {
    render() {

        const {
            id,
            title,
            price,
            img,
            level
        } = this.props.item;
        return (
            <DataConsumer>
                {value => (
                <div className="col-10 col-lg-4 mx-auto mb-5">
                <div className="card" style={{width:'18rem'}}>
                <img src={img} alt={title} className="card-img-top"/>
                <div className="card-body">
                <h3 className="card-title text-uppercase">{title}</h3>
                <h5 className="card-price">{price}</h5>
                <h5 className="card-level">{level}</h5>
                <Link 
                onClick={() => value.handleDetail(id) }
                to="/details" className="btn btn-outline-secondary">
                Course
                </Link>
                </div>
                </div>
                </div>
                )}
                
            </DataConsumer>
        )
    }
}
export default Info;
