import React from 'react'
import {createContext} from 'react'

export const CounterContext = React.createContext()

export default class ContextProvider extends React.Component {
    render() {
        const { store } = this.props
        return (
           <CounterContext.Provider value={{store}}>
               {this.props.children}
           </CounterContext.Provider>

        )
    }
}

