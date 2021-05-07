import { Grid, Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ButtonIcon from '../ButtonIcon/ButtonIcon'

const useStyles = makeStyles((theme) => ({
  card:{
    maxWidth: '320px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.4)",
    borderRadius: '15px',
    margin: '1.5em',
    "@media (min-width: 1084px)": {
      margin: '0 1.5em',
      marginTop: props => props.index === 1 ? '5em' : '0'
    }
  },
  containerImage:{
    width: '100%'
  },
  image:{
    width: '100%',
    maxHeight: '220px',
    borderTopLeftRadius: '15px',
    borderTopRightRadius: '15px'
  },
  titleCard:{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    letterSpacing: '1px'
  },
  paragraphCard:{
    margin: '1em 0',
  },
  paragraph:{
    lineHeight: 1.80,
    letterSpacing: '1px',
  },
  buttonContainer:{
    margin: '0.8em 0'
  },
  containerBodyCard:{
    paddingBottom: '1.5em'
  },
}))

export default function ProjectCard(props){

  const classes = useStyles(props);

  return(
    <div className={classes.card}>
      <div className={classes.containerImage}>
        <img src="/testImage.png" className={classes.image}/>
      </div>
      <Grid container justify="center" alignItems="center" className={classes.containerBodyCard}>
        <Grid item xs={10}>
          <Typography className={classes.titleCard} variant="h5">Lorem.dev</Typography>
        </Grid>
        <Grid item xs={10} className={classes.paragraphCard}>
          <Typography variant="body2" className={classes.paragraph}>
            Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim 
          </Typography>
        </Grid>
        <Grid item container xs={10} justify="center" alignItems="center" className={classes.buttonContainer}>
          <ButtonIcon icon="code" variant="contained" color="primary" title="View on Github"/>
        </Grid>
        <Grid item container xs={10} justify="center" alignItems="center" className={classes.buttonContainer}>
          <ButtonIcon icon="code" variant="outlined" color="primary" title="See example"/>
        </Grid>
      </Grid>
    </div>
  )
}