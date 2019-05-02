import React from 'react'
import LinkButton from './LinkButton'
import ProfileData from '../json/ProfileData.json'

function Header () {
    
    const components = ProfileData.datas.map( data => 
        <LinkButton key = {data.id} id = {data.id}title = {data.title}/>)
        
    return (
        <div>
            {components}
        </div>
    )
}
export default Header