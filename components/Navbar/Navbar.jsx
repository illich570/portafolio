import styled from 'styled-components';
import { Grid, withTheme} from '@material-ui/core';

const Navbar = withTheme(styled('div')`
  background-color: ${props => props.theme.palette.primary.main};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 2em;
  align-items: center;
  `
)

const WrapperLinks = withTheme(styled('div')`
  display: flex;
  flex-direction: row;
`);

export default function Nav(){
  return(
    <Grid>
      <Navbar>
        <div>Illich</div>
        <WrapperLinks>
          <p>Proyectos</p> 
          <p>Contacto</p> 
          <p>About</p> 
        </WrapperLinks>
      </Navbar>
    </Grid>
  )
}