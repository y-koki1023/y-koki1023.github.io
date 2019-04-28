import React from 'react'

function Link(props){
    const pStyle = props.style;
    const url = props.content;
    return (
        <div style = {pStyle}>
            <p> {url} </p>
        </div>    
    )
}
export default Link;