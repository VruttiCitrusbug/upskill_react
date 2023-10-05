import React from "react";

const styles = {
    fontSize: '72px',
    color: 'blue'
}

function Inline(props) {
    let className = props.primary ? 'primary' : ''
    return (
        <div>
            <h1 style={styles}>
                Inline
            </h1>
        </div>
    )
}

export default Inline