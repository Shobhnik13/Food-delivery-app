import React,{ createContext,useContext,useReducer } from 'react'

export const StateContext=createContext();
export const StateProvider = ({ Reducer,InitialState,children }) =>(
    <StateContext.Provider value={useReducer(Reducer,InitialState)}>
    {children}
    </StateContext.Provider>
)
export const useStateValue=()=>useContext(StateContext)