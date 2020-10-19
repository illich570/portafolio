import styled from 'styled-components';
import { Grid, withTheme,Typography, Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
const useStyles = makeStyles({
  button:{
    color: 'white',
    borderColor: 'white',
    border: '2.5px solid',
    borderRadius: '5px'
  },
  nameTitle:{
    fontFamily: 'Alegreya'
  }
});


const ContainerParallax = styled(Grid)`
  background-color: #C4C4C4;
  height: 89.8vh;
  width: 100%;
`;

const CardParallax = styled(Grid)`
  background-color: white;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.4);
`
const RedSectionCard = withTheme(styled(Grid)`
  background-color: ${props => props.theme.palette.primary.main};
  color: white;
  padding: 1em 2.5em;
  font-size: 1em;
  display: flex;
  justify-content: center;
  flex-direction: column;
  @media only screen and (min-width: 960px){
    padding: 1.5em 4.5em;
    min-height: 410px;
  }
`)

const WhiteSectionCard = styled(Grid)`
  padding: 1em;
  @media only screen and (min-width: 960px){
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`

const ParagraphCard = styled(Typography)`
  margin-bottom: 0.6em !important;
  @media only screen and (min-width: 960px){
    margin-bottom: 1em !important;
  }
`;

const CircleButton = withTheme(styled.div`
  background-color: ${props => props.theme.palette.primary.main};
  height: 60px;
  width: 60px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`);

const ArrowButton = styled(KeyboardArrowDownIcon)`
  font-size: 3em !important;
  color: white;
`

const ContainerButton= styled(Grid)`
  display: flex;
  justify-content: center;
  align-items: center;
`


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
          <Typography variant="h5" align="justify">I'm a</Typography>
          <ParagraphCard variant="h5" align="justify">Front-end Developer.</ParagraphCard>
          <ParagraphCard variant="h5" align="justify">I love coding, and make great websites using front-end technologies.</ParagraphCard>
          <ParagraphCard variant="h5" align="justify">I want to tell you a bit more about me.</ParagraphCard>
          <ContainerButton item xs={12} justify="center">
            <Button className={classes.button}  variant="outlined" color="secondary">See my work</Button>
          </ContainerButton>
        </RedSectionCard>
      </CardParallax>
      <Grid container item xs={12} justify="center">
        <CircleButton>
          <ArrowButton/>
        </CircleButton>
      </Grid>
    </ContainerParallax>
  )
}