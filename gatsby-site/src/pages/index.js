import React,{useState} from 'react'
import EventListener from 'react-event-listener'
import SEO from "../components/seo"
import Header from "../components/Header"
import Content from "../components/Content"
import Footer from "../components/Footer"

function index(){
    const [screenWidth,setScreenWidth] = useState(window.parent.screen.width);

    const handleResize = () =>{
        setScreenWidth(window.innerWidth)
    }
    return(
        <div>
            <EventListener target="window" onResize={handleResize} />
            <SEO title = "KokiYamamoto's profile"/>
            <Header width = {screenWidth}/>
            <div>
                <Content />
            </div>
            <Footer />
        </div>
    )
}

export default index