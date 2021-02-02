import { Grid, Typography, Button} from '@material-ui/core';
import { makeStyles, styled} from '@material-ui/core/styles';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';


const useStyles = makeStyles((theme) => ({
  "@keyframes typing":{
    "0%":{
      width: '0'
    },
    "100%":{
      width: '100%'
    }
  },
  "@keyframes blink-caret":{
    "0%":{
      borderColor: 'transparent'
    },
    "50%":{
      borderColor: `${theme.palette.primary.main}`
    },
    "100%":{
      borderColor: 'transparent'
    }
  },
  button:{
    color: 'white',
    borderColor: 'white',
    border: '2.5px solid',
    borderRadius: '5px',
    background: 'linear-gradient(to right, #fff,#fff)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 0',
    transition: 'all 0.5s 0s',
    '&:hover':{
      backgroundSize: '100% 100%',
      borderColor: 'black',
      color: 'black',
      border: '2.5px solid'
    }
  },
  nameTitle:{
    fontFamily: 'Alegreya',
    overflow: 'hidden',
    borderRight: `.1em solid ${theme.palette.primary.main}`,
    whiteSpace: 'nowrap',
    margin: '0 auto',
    letterSpacing: '0.15em',
    animation: '$typing 2.5s steps(21,end) alternate 3, $blink-caret .75s step-end infinite',
  },
  paragraphCard:{
    marginBottom: "0.5em",
    fontSize: '1rem',
    "@media (min-width: 700px)": {
      marginBottom: "1em",
      fontSize: '1.25rem'
    }
  },
  circleButton:{
    backgroundColor: theme.palette.primary.main,
    height: "45px",
    width: "45px",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: '0.5em'
  },
  greetingTitle:{
    "@media(min-width: 650px) and (max-width: 959px)":{
      textAlign: 'center',
      paddingRight: '7em'
    }
  }
}))


const ContainerParallax = styled(Grid)({
  backgroundColor: '#C4C4C4',
  minHeight: "89vh",
  width: "100%",
  padding: '2em 0',
  marginTop: '4.1em'
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
    padding: "1.2em 4em",
    minHeight: "410px"
  }
}));


const WhiteSectionCard = styled(Grid)({
  padding: "0.5em",
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
    <ContainerParallax container item xs={12} justify="center" alignItems="center" className={classes.containerParallax}>
      <CardParallax container item xs={10} md={7} justify="center">
        <WhiteSectionCard item xs={9} md={4}>
          <Typography className={classes.greetingTitle}  variant="h6">Hello,I'm </Typography>
          <Typography align="center" variant="h4" className={classes.nameTitle}>Illich Rada</Typography>
        </WhiteSectionCard>
        <RedSectionCard item xs={12} md={8}>
          <Typography className={classes.paragraphCard}  variant="h6">I'm a</Typography>
          <Typography className={classes.paragraphCard} variant="h6">Front-end Developer.</Typography>
          <Typography className={classes.paragraphCard} variant="h6">I love coding, and make great websites using front-end technologies.</Typography>
          <Typography className={classes.paragraphCard} variant="h6">I want to tell you a bit more about me.</Typography>
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