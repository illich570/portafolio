import { useState } from 'react';
import { styled, makeStyles } from '@material-ui/core/styles';
import { Grid, IconButton, Typography} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Hidden from '@material-ui/core/Hidden';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Slide from '@material-ui/core/Slide';

const Navbar = styled(Grid)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  padding: '0 3em',
  alignItems: 'center'
})

const useStyles = makeStyles((theme) => ({
  links: {
    color: theme.palette.primary.main,
    textDecoration: 'none',
    padding: '0 1.5em'
  },
  headerTitle:{
    color: theme.palette.primary.main,
  },
  
}))

function HideOnScroll(props) {
  const {children} = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction='down' in={!trigger}>
      {children}
    </Slide>
  )
}


export default function Nav(){
  const [showSidebar,setShowSidebar] = useState(false);
  const classes = useStyles();
  const handleShowSidebar = () => setShowSidebar(!showSidebar);

  return(
    <HideOnScroll>
    <AppBar color="default">
    <Navbar
      container
      direction="row"
      justify="space-between"
      alignItems="center"
      >
        <Grid item xs={7} sm={6} md={6} container justify="center" alignItems="center">
        <h2 className={classes.headerTitle}>Illich Rada</h2>
        </Grid>
        
        <Grid item xs={5} sm={6} md={6}>
          <Hidden xsDown implementation="css">
            <Grid direction="row" container justify="center">
                <a className={classes.links}href="#projects" rel="noopener noreferrer">
                  <Typography color="primary" variant="h6">Proyectos</Typography>
                </a>
                <a className={classes.links}href="#about_me"  rel="noopener noreferrer">
                  <Typography color="primary" variant="h6">Contacto</Typography>
                </a>
                <a className={classes.links}href="#contact_me"  rel="noopener noreferrer">
                  <Typography color="primary" variant="h6">About</Typography>
                </a>
            </Grid>
          </Hidden>
          <Hidden smUp>
          <Grid direction="row" container justify="flex-end">
            <IconButton color="primary" onClick={handleShowSidebar}>
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
            <Typography align="center" color="primary" variant="subtitle2">&copy;2020 Illich Rada</Typography>
          </Grid>
        </Drawer>
    </Navbar>
    </AppBar>
    </HideOnScroll>
  )
}