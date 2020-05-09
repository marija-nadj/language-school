import React from 'react'
import { DataConsumer } from '../context';
import Info from '../Info';

const Languages = () => {
    return (
        <div className="container">
            <div className="row mt-5">
                <DataConsumer>
                    {value => {
                        return value.info.map(item=> {
                            return <Info key={item.id} item={item}/>
                        })
                    }}
                </DataConsumer> 
            </div>
        </div>

        
    )
}
export default Languages;
