import React from 'react'
import { useNavigate } from 'react-router-dom';

function Home(props) {
    const navigate = useNavigate()
    console.log("Home");
    return (
        <>
        <div>{props.text}</div>
        {props.btn == 'true' ? <button onClick={() => navigate('order-summery')}>Place order</button> : ''}
        {props.btn == 'false' ? <button onClick={() => navigate(-1)}>Back</button> : ''}
        </>
    )
}

export default Home 