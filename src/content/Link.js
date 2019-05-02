import React from 'react'

function Link(props){
    const url = props.content;
    return (
        <div>
            <button onClick = {props.onClick} style = {props.style}> {url} </button>
        </div>    
    )
}
export default Link;