import { Grid, Typography, Button} from '@material-ui/core';
import { makeStyles, styled} from '@material-ui/core/styles';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';


const useStyles = makeStyles((theme) => ({
  button:{
    color: 'white',
    borderColor: 'white',
    border: '2.5px solid',
    borderRadius: '5px'
  },
  nameTitle:{
    fontFamily: 'Alegreya'
  },
  paragraphCard:{
    marginBottom: "0.6em",
    "@media (min-width: 960px)": {
      marginBottom: "1em"
    }
  },
  circleButton:{
    backgroundColor: theme.palette.primary.main,
    height: "60px",
    width: "60px",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
}))


const ContainerParallax = styled(Grid)({
  backgroundColor: '#C4C4C4',
  height: "89.8vh",
  width: "100%"
})

const CardParallax = styled(Grid)({
  backgroundColor: 'white',
  boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.4)"
})

const RedSectionCard = styled(Grid)(({theme}) => ({
  backgroundColor: theme.palette.primary.main,
  color: "white",
  padding: "1em 2.5em",
  fontSize: "1em",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  "@media (min-width: 960px)": {
    padding: "1.5em 4.5em",
    minHeight: "410px"
  }
}));


const WhiteSectionCard = styled(Grid)({
  padding: "1em",
  "@media (min-width: 960px)": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  }
})


const ArrowButton = styled(KeyboardArrowDownIcon)({
  fontSize: "3em",
  color: "white"
})


const ContainerButton= styled(Grid)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
})




export default function ParallaxCard(){
  const classes = useStyles();
  return(
    <ContainerParallax container item xs={12} justify="center" alignItems="center">
      <CardParallax container item xs={10} md={7} justify="center">
        <WhiteSectionCard item xs={7} md={4}>
          <Typography  variant="h6">Hello,I'm </Typography>
          <Typography align="center" variant="h4" className={classes.nameTitle}>Illich Rada</Typography>
        </WhiteSectionCard>
        <RedSectionCard item xs={12} md={8}>
          <Typography className={classes.paragraphCard}  variant="h6" align="justify">I'm a</Typography>
          <Typography className={classes.paragraphCard} variant="h6" align="justify">Front-end Developer.</Typography>
          <Typography className={classes.paragraphCard} variant="h6" align="justify">I love coding, and make great websites using front-end technologies.</Typography>
          <Typography className={classes.paragraphCard} variant="h6" align="justify">I want to tell you a bit more about me.</Typography>
          <ContainerButton item xs={12}>
            <Button className={classes.button}  variant="outlined" color="secondary">See my work</Button>
          </ContainerButton>
        </RedSectionCard>
      </CardParallax>
      <Grid container item xs={12} justify="center">
        <div className={classes.circleButton}>
          <ArrowButton/>
        </div>
      </Grid>
    </ContainerParallax>
  )
}