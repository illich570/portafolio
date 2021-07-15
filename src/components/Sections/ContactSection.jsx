import { Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { useTranslation } from 'next-i18next'

const useStyles = makeStyles((theme) => ({
	link: {
		color: theme.palette.primary.main,
		marginLeft: '0.2em',
		textDecoration: 'underline',
	},
	container: {
		margin: '10em 0',
	},
}))

export default function ContactSection() {
	const classes = useStyles()
	const { t } = useTranslation('contact')

	return (
		<Grid alignItems="center" className={classes.container} container justify="center">
			<Grid item xs={9}>
				<Typography align="center" id="contact_me" variant="h4">
					{t('contact')}
					<adress>
						<a
							className={classes.link}
							href="mailto:illich570@gmail.com"
							rel="noreferrer noopener"
							target="_blank"
						>
							{t('action')}
						</a>
					</adress>
				</Typography>
			</Grid>
		</Grid>
	)
}
