 import React from "react";
 import './App.css';
import Navbar from "./components/Navbar" ;
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles" ;
import Home from './components/Home';
import About from './components/About'; 
import Contact from './components/Contact';




const useStyles = makeStyles((theme) => ({
  root: {
    minHeight:'100vh',
    maxWidth:'100vw', 
    margin:'0px',
    paddingLeft:'0px',
    paddingRight:'0px',
    overflow:'hidden',
  },
}))

function App() {
  const classes = useStyles()
  return ( 
  <Container className={classes.root}>
        <Navbar />
        <Home />
        <About /> 
        <Contact />
  </Container>
   
    
  );
}

export default App;
