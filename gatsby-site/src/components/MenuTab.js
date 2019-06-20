import React,{useState} from 'react'
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuStyle from '../css/MenuTab.module.css'

function MenuTab (props){
    const [value,setValue] = useState(0)
    const handleChange = (event,value) =>{
        setValue(value)
    }
    
    return (
        <div className = {MenuStyle.body}>
            {props.width >= 470 ?
                <Tabs value = {value} onChange={handleChange}>
                    <Tab label = "Home" />
                    <Tab label = "Career"/>
                    <Tab label = "Awards"/>
                </Tabs>
            :
                <IconButton onClick = {props.onClick}>
                    <MenuIcon />
                </IconButton>
            }
        </div>
    ) 

}

export default MenuTab