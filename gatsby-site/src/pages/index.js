import React,{useState} from 'react'
import {createMuiTheme} from '@material-ui/core/styles'
import EventListener from 'react-event-listener'
import SEO from '../components/seo'
import Header from "../components/Header"
import MainVisual from '../components/MainVisual';
import Profile from '../components/Profile'
import Footer from "../components/Footer"


function index(){
<<<<<<< HEAD
=======
    const [screenWidth,setScreenWidth] = useState(window.parent.screen.width);
    const handleResize = () =>{
        setScreenWidth(window.innerWidth)
    }
>>>>>>> 4d13a579b4b62767c3e4da961a538f9f38c0295c
    const theme = createMuiTheme({
        palette:{
            primary:{
                main:"#7EBB5D"
            },
            secondary:{
                main:"#ffa726"
            }
        },
        status: {
            danger: 'orange',
        },
    })
    return(
        <div>
            <SEO title= "KokiYamamoto"/>
            <Header theme={theme}/>
            <MainVisual />
            <Profile />
            <Footer />
        </div>
    )
}

export default index