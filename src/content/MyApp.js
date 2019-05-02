import React from 'react'
import style from '../css/footer.css'
import Footer from './Footer'
function MyApp(){
    console.log(style)
    return(
        <div>
            <h1 style = {style.error}> Welcome to my profile! </h1>
            <Footer />
        </div>
    )
}
export default MyApp