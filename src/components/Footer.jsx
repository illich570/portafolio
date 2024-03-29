import { Grid, Typography } from '@material-ui/core'
import { Mail, LinkedIn, GitHub, Twitter } from '@material-ui/icons'
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
	link: {
		color: 'white',
	},
}))

export default function Footer() {
	const classes = useStyles()
	const { t } = useTranslation('footer')
	const date = new Date().getFullYear()
	return (
		<Grid className={classes.container} container>
			<Grid className={classes.containerGrid} container item xs={6}>
				<Typography variant="body1">{`© ${date} Illich Rada. ${t('side')} `}</Typography>
			</Grid>
			<Grid alignItems="center" container item justify="center" xs={6}>
				<a className={classes.link} href={t('email')} rel="noreferrer noopener" target="_blank">
					<Mail className={classes.spacingIcon} />
				</a>
				<a
					className={classes.link}
					href={t('urlLinkedin')}
					rel="noreferrer noopener"
					target="_blank"
				>
					<LinkedIn className={classes.spacingIcon} />
				</a>
				<a className={classes.link} href={t('urlGithub')} rel="noreferrer noopener" target="_blank">
					<GitHub className={classes.spacingIcon} />
				</a>
				<a className={classes.link} href={t('urlTwitter')} rel="noreferrer noopener" target="_blank">
					<Twitter className={classes.spacingIcon} />
				</a>
			</Grid>
		</Grid>
	)
}
