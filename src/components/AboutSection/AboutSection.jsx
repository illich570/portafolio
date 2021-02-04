import { Grid, Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ButtonIcon from '../ButtonIcon/ButtonIcon'

const useStyles = makeStyles((theme) => ({
  container:{
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    flexDirection: 'column',
    "@media (min-width: 700px)": {
      flexDirection: 'row'
    }
  },
  containerTitle:{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '1em'
  },
  buttonContainer:{
    margin: '1.8em 0'
  },
  containerParagraph:{
    lineHeight: '30px',
    letterSpacing: '1.25px'
  },
  lastParagraph:{
    textAlign: 'right',
    "@media (min-width: 700px)": {
      marginTop: '7em'
    }
  }
}))

export default function AboutSection(props){
  const classes = useStyles();
  return(
    <Grid container className={classes.container}>
      <Grid item xs={12}>
        <Typography variant="h4" id="about_me" className={classes.containerTitle}>About me</Typography>
      </Grid>
      <Grid item xs={9} md={3}>
          <Typography variant="body1" className={classes.containerParagraph}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
             Magnam nobis, 
             similique hic dignissimos quo placeat
             nesciunt soluta laudantium veritatis maxime
             similique hic dignissimos quo placeat
             nesciunt soluta laudantium veritatis maxime.
          </Typography>
          <Grid item xs={12} container justify="center" alignItems="center" className={classes.buttonContainer}>
            <ButtonIcon icon="code" variant="contained" color="primary" title="See example"/>
          </Grid>
      </Grid>
      <Grid item xs={9} md={3} className={classes.lastParagraph}>
          <Typography variant="body1" className={classes.containerParagraph}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
             Magnam nobis, 
             similique hic dignissimos quo placeat
             nesciunt soluta laudantium veritatis maxime
             similique hic dignissimos quo placeat
             nesciunt soluta laudantium veritatis maxime.
          </Typography>
          <Grid item xs={12} container justify="center" alignItems="center" className={classes.buttonContainer}>
            <ButtonIcon icon="code" variant="contained" color="primary" title="See example"/>
          </Grid>
      </Grid>
    </Grid>
  )
}