import './App.css';
import React from 'react';
import purple from '@material-ui/core/colors/purple';
import red from '@material-ui/core/colors/red';
import pink from '@material-ui/core/colors/pink';
import blue from '@material-ui/core/colors/blue';
import indigo from '@material-ui/core/colors/indigo';
import deepPurple from '@material-ui/core/colors/deepPurple';
import teal from '@material-ui/core/colors/teal';
import cyan from '@material-ui/core/colors/cyan';
import lightBlue from '@material-ui/core/colors/lightBlue';
import green from '@material-ui/core/colors/green';
import lightGreen from '@material-ui/core/colors/lightGreen';
import lime from '@material-ui/core/colors/lime';
import deepOrange from '@material-ui/core/colors/deepOrange';
import orange from '@material-ui/core/colors/orange';
import Colors from './colors';



class App extends React.Component {
      state = {colors: 
        [purple[500],
        purple[50],
        purple[200],
        purple[700],
        purple[900],
        pink[500],
        pink[50],
        pink[200],
        pink[700],
        pink[900],
        red[500],
        red[50],
        red[200],
        red[700],
        red[900],
        blue[500],
        blue[50],
        blue[200],
        blue[700],
        blue[900],
        indigo[500],
        indigo[50],
        indigo[200],
        indigo[700],
        indigo[900],
        deepPurple[500],
        deepPurple[50],
        deepPurple[200],
        deepPurple[700],
        deepPurple[900],
        teal[500],
        teal[50],
        teal[200],
        teal[700],
        teal[900],
        cyan[500],
        cyan[50],
        cyan[200],
        cyan[300],
        cyan[700],
        cyan[900],
        lightBlue[500],
        lightBlue[50],
        lightBlue[200],
        lightBlue[300],
        lightBlue[700],
        lightBlue[900],
        green[500],
        green[50],
        green[200],
        green[700],
        green[900],
        lightGreen[500],
        lightGreen[50],
        lightGreen[200],
        lightGreen[700],
        lightGreen[900],
        lime[500],
        lime[50],
        lime[200],
        lime[700],
        lime[900],
        deepOrange[500],
        deepOrange[50],
        deepOrange[200],
        deepOrange[700],
        deepOrange[900],
        orange[500],
        orange[50],
        orange[200],
        orange[700],
        orange[900],
      ]}
    render(){
      return(
        <div className="App">
            <Colors colorsNames={this.state.colors} />
        </div>
      )
    }
}

export default App;
