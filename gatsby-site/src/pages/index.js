import React from 'react'
import {createMuiTheme} from '@material-ui/core/styles'
import EventListener from 'react-event-listener'
import SEO from '../components/seo'
import Header from "../components/Header"
import MainVisual from '../components/MainVisual';
import Profile from '../components/Profile'
import History from '../components/History'
import Footer from "../components/Footer"


function index(){
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
            <History />
            <Footer />
        </div>
    )
}

export default index