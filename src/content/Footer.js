import React from 'react'
import Link from './Link'
import style from '../css/footer.css'

function Footer(){
    const names = ['Profile','History','Works','Contact']
    const Links = names.map( link => <Link key = {link} content = {link} style = {style.error}/>)
    return(
        <div>
            {Links}
        </div>
    );
}

export default Footer