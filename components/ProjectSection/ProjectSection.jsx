import ProjectCard from '../ProjectCard/ProjectCard'
import { Grid, Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container:{
    display: 'flex',
    justifyContent: 'center',
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
    alignItems: 'center'
  },
  containerCards:{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}))

const test = [1,2,3]

export default function ProjectSection(props){
  const classes = useStyles();
  return(
    <Grid container className={classes.container}>
      <Grid item xs={12}>
        <Typography variant="h4" className={classes.containerTitle}>Projects</Typography>
      </Grid>
      <Grid container item xs={12} className={classes.containerCards}>
        {test.map((element,index) => <ProjectCard index={index} key={`abc_${index}`}/>) }
      </Grid>
    </Grid>
  )
}