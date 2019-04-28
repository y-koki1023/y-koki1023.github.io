import React from 'react'
import Link from './Link'
function MyApp(){
    const names = ['Google','Apple','FaceBook','Amazon']
    const Links = names.map( link => <Link content = {link} />)
    return(
        <div>
            <h1> Welcome to my profile! </h1>
            {Links}
        </div>
    )
}
export default MyApp