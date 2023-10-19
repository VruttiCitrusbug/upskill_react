import React,{useReducer,useEffect} from 'react';
import axios from 'axios';

const initvalue = {
    loading:true,
    data:{},
    error:''
}

function Data2() {

    const reducer = (state,action) => {
        switch(action.type){
            case 'Fetch':
                return {
                    loading:false,
                    data:action.payload,
                    error:''
                }
            case 'error':
                return {
                    loading:false,
                    data:{},
                    error:'Something Wrong'
                }
            default:
                return initvalue
        }
    }
    
    const [state,dispatch] = useReducer(reducer,initvalue)

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/1').then(res=>{
            dispatch({type:'Fetch',payload:res.data})
        }).catch(err=>{
            dispatch({type:'error'})
        })
    })

  return (
        <>
        <div>{state.loading?"Loading":state.data.title}</div>
        <div>{state.error}</div>
        </>
  )
}

export default Data2