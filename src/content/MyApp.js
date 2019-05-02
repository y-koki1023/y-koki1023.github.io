import React from 'react'
import style from '../css/footer.module.css'
import Footer from './Footer'
function MyApp(){
    return(
        <div>
            <h1 style = {style}> Welcome to my profile! </h1>
            <Footer />
        </div>
    )
}
export default MyApp