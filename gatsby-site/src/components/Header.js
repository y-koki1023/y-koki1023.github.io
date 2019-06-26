import React,{useState} from "react"
import AppBar from "@material-ui/core/AppBar"
import ToolBar from "@material-ui/core/Toolbar"
import MenuTab from "../components/MenuTab"
import Menu  from "../components/Menu"
import Style from "../css/Header.module.css"
import { ThemeProvider } from '@material-ui/styles';

function Header(props){
    const [isOpen,setOpen] = useState(false);
    const handleClick = () =>{
        setOpen(!isOpen)
        console.log(isOpen)
    }
    

    return(
        <div className = {Style.headerBody}>
            <ThemeProvider theme={props.theme}>
                <AppBar position = "fixed">
                    <ToolBar theme={props.theme}>
                        <p className = {Style.headerTitle}>Koki Yamamoto</p>
                        {/*<MenuTab width = {props.width} onClick ={handleClick}/>*/}
                    </ToolBar>
                </AppBar>
            </ThemeProvider>
            <Menu isOpen = {isOpen}/>
        </div>

    )
}

export default Header