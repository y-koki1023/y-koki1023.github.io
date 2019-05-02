import React from 'react'

class LinkButton extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            id : props.id,
            title : props.title
        }
    }
    handleClick(id){
        
    }

    render(){
        return(
            <button onClick = { () => {this.handleClick(this.state.id)}}>{this.state.title}</button>  
        )
    }
}

export default LinkButton