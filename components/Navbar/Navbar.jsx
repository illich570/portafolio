import { useState } from 'react';
import { styled, makeStyles } from '@material-ui/core/styles';
import { Grid, IconButton, Typography} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Hidden from '@material-ui/core/Hidden';
import Drawer from '@material-ui/core/Drawer';

const Navbar = styled(Grid)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  padding: '0 4em',
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


export default function Nav(){
  const [showSidebar,setShowSidebar] = useState(false);
  const classes = useStyles();
  const handleShowSidebar = () => setShowSidebar(!showSidebar);

  return(
    <Navbar
      container
      direction="row"
      justify="space-between"
      alignItems="center"
      >
        <Grid item xs={6}>
        <h2 className={classes.headerTitle}>Illich Rada</h2>
        </Grid>
        
        <Grid item xs={6}>
          <Hidden xsDown implementation="css">
            <Grid direction="row" container justify="center">
              <span>
                <a className={classes.links}href="#" target="_blank" rel="noopener noreferrer">Proyectos</a>
                <a className={classes.links}href="#" target="_blank" rel="noopener noreferrer">Home</a>
                <a className={classes.links}href="#" target="_blank" rel="noopener noreferrer">About</a>
              </span>
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
            <Typography align="center" color="primary" variant="h6">Illich Rada</Typography>
          </Grid>
        </Drawer>
    </Navbar>
  )
}