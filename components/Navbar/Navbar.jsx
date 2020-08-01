import styled from 'styled-components';
import { Grid, withTheme } from '@material-ui/core';


const Navbar = withTheme(styled('div')`
  background-color: ${props => props.theme.palette.primary.main};
  `
)

export default function Nav(){
  return(
    <Grid>
      <Navbar>
        Logo
      </Navbar>
    </Grid>
  )
}