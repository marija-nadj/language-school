import React, { Component } from 'react';
import { languagesInfo, detailInfo, levelInfo } from '../data';

const DataContext = React.createContext();

class DataProvider extends Component {

    state = {
        info: languagesInfo,
        detailInfo: detailInfo,
        levelInfo:levelInfo
    }

    getItem = id => {
        const item = this.state.info.find(item => item.id == id)
        return item
    }

    handleDetail = id => {
        const item = this.getItem(id);
        this.setState(()=> {
            return {
                detailInfo:item
            }
        })
    }

        
        
        
    render() {
        return (
           <DataContext.Provider value={{
               info: this.state.info,
               detailInfo: this.state.detailInfo,
               levelInfo: this.state.levelInfo,
               handleDetail:this.handleDetail
           }}>
               {this.props.children}
           </DataContext.Provider>
        )
    }
}

const DataConsumer = DataContext.Consumer
export { DataProvider, DataConsumer} ;