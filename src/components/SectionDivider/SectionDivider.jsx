import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  line:{
    border: '2px solid',
    borderColor: theme.palette.primary.main,
    backgroundColor: theme.palette.primary.main,
    width: '100%',
    display: 'flex'
  },
  container:{
    display:'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '2.5em 0'
  },
  square:{
    border: '4px solid',
    borderColor: theme.palette.primary.main,
    boxSizing: 'border-box',
    transform: 'rotate(-45deg)',
    width: '40px',
    height: '40px'
  }
  }))


export default function SectionDivider(props){
  
  const classes = useStyles();

  return(
    <Grid container className={classes.container}>
      <Grid item xs={3} md={5} lg={4}>
        <hr className={classes.line}/>
      </Grid>
      <Grid item container xs={3} md={1} lg={1} justify="center" alignItems="center" >
        <div className={classes.square}/>
      </Grid>
      <Grid item xs={3} md={5} lg={4}>
        <hr className={classes.line}/>
      </Grid>
    </Grid>
  )
}