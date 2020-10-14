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

const LinksNavbar = styled.a`
  color: white;
  text-decoration: none;
  padding: 0 1.5em;
`
const HeaderTitle = styled.h3`
  color: white;
`;

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
        <HeaderTitle>Illich</HeaderTitle>
        </Grid>
        
        <Grid item xs={6} justify="center">
          <Hidden xsDown implementation="css">
            <Grid direction="row" container justify="center">
              <span>
                <LinksNavbar href="#" target="_blank" rel="noopener noreferrer">Home</LinksNavbar>
                <LinksNavbar href="#" target="_blank" rel="noopener noreferrer">Proyectos</LinksNavbar>
                <LinksNavbar href="#" target="_blank" rel="noopener noreferrer">About</LinksNavbar>
              </span>
            </Grid>
          </Hidden>
          <Hidden smUp>
          <Grid direction="row" container justify="flex-end">
            <IconButton style={{color: 'white'}} onClick={handleShowSidebar}>
            <MenuIcon style={{ fontSize: '1.7em'}}/>
            </IconButton>
            </Grid>
          </Hidden>
        </Grid>
        <Drawer anchor="right" open={showSidebar} onClose={handleShowSidebar}>
          <Grid container direction="column" justify="center" alignItems="center" style={{height: '100%', display: 'flex', padding: '1em'}}>
            <Typography color="primary" variant="h5">Proyectos</Typography>
            <Typography color="primary" variant="h5">Contacto</Typography>
            <Typography color="primary" variant="h5">About</Typography>
          </Grid>
          <Grid container direction="column" justify="center" alignItems="center" style={{padding: '1em'}}>
            <Typography align="center" color="primary" variant="h6">Illich Rada</Typography>
          </Grid>
        </Drawer>
    </Navbar>
  )
}