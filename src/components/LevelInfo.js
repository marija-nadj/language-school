import React, { Component} from 'react';
import { DataConsumer } from './context';
import styled from 'styled-components';

class LevelInfo extends Component {
    render(){
                const {
                    id,
                    levelTitle,
                    score,
                    description
                } = this.props.item;
    return (
        <DataConsumer>
            {value => (
                <CardContainer className="card-container mt-2 mb-2 p-5">
            <div className="card-body">
            <h5 key={id} className="card-title">{levelTitle}</h5>
                        <h4 className="card-score">Test score:{score}</h4>
                        <h3 className="card-text">{description}</h3>
            </div>
                </CardContainer>
            )}
        </DataConsumer>
    )
    }
}
export default LevelInfo;

const CardContainer = styled.div `
h5 {
    color: var(--tomato);
    font-size: 1.5rem;
}
h4 {
    color: var(--grey)
}
h3 {
    font-size: 1.5rem;
    padding-top:1rem;
}

`