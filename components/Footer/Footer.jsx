import { Grid, Typography} from '@material-ui/core';
import { Mail, LinkedIn, GitHub, Twitter, WhatsApp} from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container:{
    backgroundColor: theme.palette.primary.main,
    padding: '1em 2em',
    color: 'white'
  },
  spacingIcon:{
    margin: ' 0.15em'
  },
  containerGrid:{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  }
}))
 
export default function Footer(props){

  const classes = useStyles();
  return(
    <Grid container className={classes.container}>
    <Grid item xs={6} container className={classes.containerGrid}>
      <Typography variant="body2">{`Created with <3`}</Typography>
      <Typography variant="body2"> &copy;2020 Illich Rada</Typography>
    </Grid> 
    <Grid item xs={6} container justify="center" alignItems="center">
      <Mail className={classes.spacingIcon}/>
      <LinkedIn className={classes.spacingIcon}/>
      <GitHub className={classes.spacingIcon}/>
      <Twitter className={classes.spacingIcon}/>
      <WhatsApp className={classes.spacingIcon}/>
    </Grid>
    </Grid>
  )
}