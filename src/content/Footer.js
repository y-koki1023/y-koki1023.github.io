import React from 'react'
import Link from './Link'
function Footer(){
    const names = ['Google','Apple','FaceBook','Amazon']
    const Links = names.map( link => <Link content = {link} />)
    return(
        <div>
            {Links}
        </div>
    );
}

export default Footer