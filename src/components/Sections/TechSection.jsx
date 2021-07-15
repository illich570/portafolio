import { Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import TechCard from '@/components/TechCard'
import Slider from '@/components/Slider'
import { useTranslation } from 'next-i18next'

const useStyles = makeStyles(() => ({
	container: {
		overflow: 'hidden',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%',
		margin: '4em 0',
		flexDirection: 'column',
		'@media (min-width: 700px)': {
			flexDirection: 'row',
		},
	},
	containerTitle: {
		display: 'flex',
		justifyContent: 'center',
		textAlign: 'center',
		alignItems: 'center',
		margin: '1em 0',
		marginTop: '0',
		'@media (max-width: 700px)': {
			fontSize: '2.6em',
		},
	},
	containerCards: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		maxWidth: '1000px',
	},
	containerSlider: {
		minHeight: '260px',
	},
}))

export default function TechSection({ dataCards }) {
	const classes = useStyles()
	const { t } = useTranslation('tech')
	return (
		<Grid className={classes.container} container>
			<Grid item xs={12}>
				<Typography className={classes.containerTitle} id="projects" variant="h3">
					{t('title')}
				</Typography>
			</Grid>
			<Grid className={classes.containerSlider} item xs={12}>
				<Slider>
					{dataCards.map((element, index) => (
						<TechCard data={element} index={index} key={`abc_${index}`} />
					))}
				</Slider>
			</Grid>
		</Grid>
	)
}
