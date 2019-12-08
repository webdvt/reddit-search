import React, {useState} from 'react';
import './App.css';
import deepOrange from '@material-ui/core/colors/deepOrange';
import orange from '@material-ui/core/colors/orange';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Header from './components/layout/Header';
import SearchForm from './components/SearchForm';
import Posts from './components/Posts';
import Spinner from './components/Spinner';

const theme = createMuiTheme({
  palette: {
    primary: deepOrange,
    secondary: orange,
  }
});

const useStyles = makeStyles(theme => ({
  container: {
    padding: theme.spacing(5),
  },
  input: {
    padding: theme.spacing(1, 0),
  },
  box: {
    padding: theme.spacing(2),
  }
}));


const App = () => {
  const classes = useStyles();

  // Search Reddit
  const search = async () => {
    // ...
  };

  return (
    <div>
      <ThemeProvider theme={theme}>
       <Header/>
        <Container maxWidth="lg" className={classes.box}>
          <SearchForm classes={classes} search={search}/>
        </Container>
        <Container maxWidth="lg" className={classes.box}>
        </Container>
      </ThemeProvider>
    </div>
  )
};

export default App;


