import React from 'react';
import AppBar from '@material-ui/core/AppBar/AppBar';
import { Container } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const Header = () => {
  return (
      <AppBar color='primary' position="static">
        <Container>
          <Toolbar>
            <Typography variant="h6">
              Reddit Search App
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
  );
};

export default Header;