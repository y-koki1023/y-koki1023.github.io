import React,{useState} from "react"
import AppBar from "@material-ui/core/AppBar"
import ToolBar from "@material-ui/core/Toolbar"
import MenuTab from "../components/MenuTab"
import Menu  from "../components/Menu"
import Styles from "../css/Header.module.css"

function Header(props){
    const [isOpen,setOpen] = useState(false);
    const handleClick = () =>{
        setOpen(!isOpen)
        console.log(isOpen)
    }

    return(
        <div>
            <AppBar position = "static" >
                <ToolBar >
                    <p className = {Styles.title}>Koki Yamamoto</p>
                    <MenuTab width = {props.width} onClick ={handleClick}/>
                </ToolBar>
            </AppBar>
            <Menu isOpen = {isOpen}/>
        </div>

    )
}

export default Header