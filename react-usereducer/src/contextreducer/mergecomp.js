import React,{useReducer,useContext} from 'react'
import ComponentA from './componenta'
import ComponentB from './componentb'
import ComponentC from './componentc'

const initstate = 0

const reducer = (state,action) => {
    switch(action){
        case 'up':
            return state+1
        case 'down':
            return state-1
        case 'reset':
            return initstate
    }
}

const Contex = useContext()

function MergeComp() {

    const [count,dispatch] = useReducer(reducer,initstate)

    return (
        <Contex.Provider value={{count:count,dispatch:dispatch}}>

        <div>MergeComp</div>
        <ComponentA></ComponentA>
        <ComponentB></ComponentB>
        <ComponentC></ComponentC>

        </Contex.Provider>
    )
}

export default MergeComp