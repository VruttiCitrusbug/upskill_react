import React,{useReducer} from 'react'

const initstate = {
    firstcount: 0,
    secondcount: 0
}

const reducer = (state,action) => {
    switch(action.type){
        case 'up':
            return {...state,firstcount:state.firstcount+action.value};
        case 'down':
            return {...state,firstcount:state.firstcount-action.value};
        case 'up2':
            return {...state,secondcount:state.secondcount+action.value};
        case 'down2':
            return {...state,secondcount:state.secondcount-action.value};
        case 'reset':
            return initstate;
        default:
            return state;
    }
} 

function Counter2() {

    const [state,dispatch] = useReducer(reducer,initstate)

    return (
        <div>
            state - {state.firstcount}
            state - {state.secondcount}
            <button onClick={()=>dispatch({type:'up',value:1})}>up</button>
            <button onClick={()=>dispatch({type:'down',value:1})}>down</button>
            <button onClick={()=>dispatch({type:'up',value:5})}>up 5</button>
            <button onClick={()=>dispatch({type:'down',value:5})}>down 5</button>
            <button onClick={()=>dispatch({type:'up2',value:1})}>up2</button>
            <button onClick={()=>dispatch({type:'down2',value:1})}>down2</button>
            <button onClick={()=>dispatch({type:'reset'})}>reset</button>
        </div>
    )
}
export default Counter2