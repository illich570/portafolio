import { Grid, Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  link:{
    color: theme.palette.primary.main
  },
  container:{
    margin: '10em 0'
  }
}))

export default function ContactSection(props){
  const classes = useStyles();

  return(
    <Grid container justify="center" alignItems="center" className={classes.container}>
      <Grid item xs={10}>
        <Typography variant="h4" align="center">
        If you want to talk about your next project,   
          <a className={classes.link} href="google.com"> Contact me.</a>
        </Typography>
      </Grid>
    </Grid>
  )
}