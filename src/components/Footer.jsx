import { Grid, Typography } from '@material-ui/core'
import { Mail, LinkedIn, GitHub } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'
import { useTranslation } from 'next-i18next'

const useStyles = makeStyles((theme) => ({
	container: {
		backgroundColor: theme.palette.primary.main,
		padding: '1em 2em',
		color: 'white',
	},
	spacingIcon: {
		transition: 'all 0.2s ease-in',
		margin: ' 0.30em',
		fontSize: '2.4em',
		'&:hover': {
			cursor: 'pointer',
			transform: 'scale(1.5,1.5)',
		},
	},
	containerGrid: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'flex-start',
		flexDirection: 'column',
		'@media(min-width: 550px)': {
			alignItems: 'center',
		},
	},
}))

export default function Footer() {
	const classes = useStyles()
	const { t } = useTranslation('footer')
	return (
		<Grid className={classes.container} container>
			<Grid className={classes.containerGrid} container item xs={6}>
				<Typography variant="body1">{t('side')}</Typography>
				<Typography variant="body1"> &copy;2021 Illich Rada</Typography>
			</Grid>
			<Grid alignItems="center" container item justify="center" xs={6}>
				<Mail className={classes.spacingIcon} />
				<LinkedIn className={classes.spacingIcon} />
				<GitHub className={classes.spacingIcon} />
			</Grid>
		</Grid>
	)
}
