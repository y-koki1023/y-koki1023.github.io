import React from 'react'
import Collapse from '@material-ui/core/Collapse';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid';
import Style from '../css/Menu.module.css'

function Menu(props){
    return(
        <Collapse in={props.isOpen}>
            <Paper>
                <Grid>
                    <Button className = {Style.button}> Home </Button>
                </Grid>
                <Grid>
                    <Button className = {Style.button}> Profile </Button>
                </Grid>
                <Grid>
                    <Button className = {Style.button}> Career </Button>
                </Grid>
                <Grid>
                    <Button className = {Style.button}> Award </Button>
                </Grid>
            </Paper>
        </Collapse>
    )
}

export default Menu