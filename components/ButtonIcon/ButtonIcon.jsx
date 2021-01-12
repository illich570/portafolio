import { Button } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  button:{
    display:'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: '10px',
    border: '2px solid',
    borderColor: theme.palette.primary.main
  },
  buttonOutlined: {
    border: '2.5px solid'
  },
  buttonContainedSweep:{
    background: `linear-gradient(to bottom,${theme.palette.primary.main} 50%, #fff 50%)`,
    backgroundSize: '100% 200%',
    transition: 'all 0.5s',
    '&:hover':{
      backgroundPosition: '0 -95%',
      borderColor: 'black',
      color: 'black',
      border: '2px solid',
      transform: 'scale(1.05,1.05)'
    }
  },
  buttonOutlinedSweep:{
    background: `linear-gradient(to bottom,#fff 50%,${theme.palette.primary.main} 50%)`,
    backgroundSize: '100% 200%',
    transition: 'all 0.5s',
    '&:hover':{
      backgroundPosition: '0 -95%',
      color: 'white',
      border: '2px solid',
      transform: 'scale(1.05,1.05)'
    }
  }
}))


export default function ButtonIcon(props) {
  const {icon , title, ...rest} = props
  const classes = useStyles();
  return(
    <Button
    {...rest}
    className={
              `
                ${classes.button} 
                ${rest.variant === 'outlined' ? classes.buttonOutlined : ''} 
                ${rest.variant === 'outlined' ? classes.buttonOutlinedSweep : classes.buttonContainedSweep}
              `
              }
    >
      {icon && <Icon>{icon}</Icon>}
      {title}
    </Button>
  )
}