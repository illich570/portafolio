import { useState } from 'react';
import styled from 'styled-components';
import { Grid, withTheme, IconButton, Typography} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Hidden from '@material-ui/core/Hidden';
import Drawer from '@material-ui/core/Drawer';

// background-color: ${props => props.theme.palette.primary.main};

const Navbar = withTheme(styled(Grid)`
  background-color: ${props => props.theme.palette.primary.main};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 4em;
  align-items: center;
  `
)

export default function Nav(){
  const [showSidebar,setShowSidebar] = useState(false);

  const handleShowSidebar = () => setShowSidebar(!showSidebar);

  return(
    <Navbar
      container
      direction="row"
      justify="space-between"
      alignItems="center"
      >
        <Grid item xs={6}>
        <h3>Illich</h3>
        </Grid>
        
        <Grid container item xs={6} direction="row" alignItems="center" justify="center" spacing={6}>
          <Hidden xsDown implementation="css">
            <Typography color="primary" variant="h5">Proyectos</Typography>
            <Typography color="primary" variant="h5">Contacto</Typography>
            <Typography color="primary" variant="h5">About</Typography>
          </Hidden>
          <Hidden smUp>
            <IconButton style={{color: 'white'}} onClick={handleShowSidebar}>
            <MenuIcon/>
            </IconButton>
          </Hidden>
        </Grid>
        <Drawer anchor="right" open={showSidebar} onClose={handleShowSidebar}>
          <Grid direction="column" justify="center" alignItems="center" style={{height: '100%', display: 'flex', padding: '1em'}}>
            <Typography color="primary" variant="h5">Proyectos</Typography>
            <Typography color="primary" variant="h5">Contacto</Typography>
            <Typography color="primary" variant="h5">About</Typography>
          </Grid>
          <Grid direction="column" justify="center" alignItems="center" style={{padding: '1em'}}>
            <Typography align="center" color="primary" variant="h6">Illich Rada</Typography>
          </Grid>
          
          </Drawer>
    </Navbar>
  )
}