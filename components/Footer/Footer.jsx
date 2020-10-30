import { Grid, Typography} from '@material-ui/core';
import { Mail, LinkedIn, GitHub, Twitter } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container:{
    backgroundColor: theme.palette.primary.main,
    padding: '1em 2em',
    color: 'white'
  }
}))
 
export default function Footer(props){

  const classes = useStyles();
  return(
    <Grid container className={classes.container}>
    <Grid item xs={6}>
      <Typography variant="body2">{`Created with <3`}</Typography>
      <Typography variant="body2"> &copy;2020 Illich Rada</Typography>
    </Grid> 
    <Grid item xs={6}>
      <Mail/>
      <LinkedIn/>
      <GitHub/>
      <Twitter/>
    </Grid>
    </Grid>
  )
}