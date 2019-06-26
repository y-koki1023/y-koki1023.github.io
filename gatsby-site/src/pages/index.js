import React,{useState} from 'react'
import {createMuiTheme} from '@material-ui/core/styles'
import EventListener from 'react-event-listener'
import SEO from '../components/seo'
import Header from "../components/Header"
import MainVisual from '../components/MainVisual';
import Profile from '../components/Profile'
import Footer from "../components/Footer"


function index(){
    const [screenWidth,setScreenWidth] = useState(window.parent.screen.width);

    const handleResize = () =>{
        setScreenWidth(window.innerWidth)
    }
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
            <EventListener target="window" onResize={handleResize} />
            <SEO title= "KokiYamamoto"/>
            <Header width = {screenWidth} theme={theme}/>
            <MainVisual />
            <Profile />
            <Footer />
        </div>
    )
}

export default index