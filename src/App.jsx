import React from "react";
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container, Button } from '@material-ui/core';
// import PhotoCamera from '@material-ui/icons';
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';


const App = () => {
    return (
        <div className="App">
            <header className="App-header">
                <ButtonGroup variant="contained" color="secondary">
                    <Button startIcon={<SaveIcon />}>
                        Welcome to ReactJS
                    </Button>
                    <Button startIcon={<DeleteIcon />}>
                        Welcome to ReactJS
                    </Button>
                </ButtonGroup>
                
            </header>
        </div>
    )
}

export default App;