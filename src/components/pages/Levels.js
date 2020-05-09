import React, { Component } from 'react';
import { DataConsumer } from '../context';
import LevelInfo from '../LevelInfo';

class Levels extends Component {
    render(){
    return (
            <DataConsumer>
                {value => {
                    return value.levelInfo.map(item => {
                        return <LevelInfo key={item.id} item={item}/>
                    })
                }}
            </DataConsumer>
    )
}
}
export default Levels;
