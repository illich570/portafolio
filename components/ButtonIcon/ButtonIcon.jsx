import { Button } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  button:{
    display:'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: '10px'
  },
  buttonOutlined: {
    border: '2.5px solid'
  }
}))


export default function ButtonIcon(props) {
  const {icon , title, ...rest} = props
  const classes = useStyles();
  return(
    <Button
    {...rest}
    className={`${classes.button} ${rest.variant === 'outlined' ? classes.buttonOutlined : ''}`}
    >
      {icon && <Icon>{icon}</Icon>}
      {title}
    </Button>
  )
}