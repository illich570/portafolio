import { Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import ButtonIcon from '@/components/ButtonIcon'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'

const useStyles = makeStyles(() => ({
	card: {
		maxWidth: '320px',
		minHeight: '550px',
		maxHeight: '550px',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		boxShadow: '0px 8px 10px rgba(0, 0, 0, 0.4)',
		borderRadius: '15px',
		margin: '1.5em',
		'@media (min-width: 1084px)': {
			marginTop: (props) => (props.index === 1 ? '5em' : '0'),
		},
	},
	containerImage: {
		width: '100%',
	},
	image: {
		width: '100%',
		maxHeight: '220px',
		borderTopLeftRadius: '15px',
		borderTopRightRadius: '15px',
	},
	titleCard: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		letterSpacing: '1px',
		textAlign: 'center',
		height: '3em',
	},
	paragraphCard: {
		margin: '1em 0',
		'@media (max-width: 330px)': {
			margin: '2.25em 0',
		},
		height: '7em',
		display: 'flex',
		alignItems: 'center',
	},
	paragraph: {
		lineHeight: 1.8,
		letterSpacing: '0.5px',
	},
	buttonContainer: {
		margin: '0.6em 0',
	},
	containerBodyCard: {
		'@media (min-width: 330px)': {
			paddingBottom: '1.5em',
		},
	},
}))

export default function ProjectCard({ data }) {
	const classes = useStyles()
	const { t } = useTranslation('projects')
	return (
		<div className={classes.card}>
			<div className={classes.containerImage}>
				<Image
					alt={data.title}
					className={classes.image}
					height={220}
					src={data.localizations[0].image.url}
					width={320}
				/>
			</div>
			<Grid alignItems="center" className={classes.containerBodyCard} container justify="center">
				<Grid item xs={10}>
					<Typography className={classes.titleCard} variant="h5">
						{data.title}
					</Typography>
				</Grid>
				<Grid className={classes.paragraphCard} item xs={9}>
					<Typography className={classes.paragraph} variant="body2">
						{data.description}
					</Typography>
				</Grid>
				<Grid
					alignItems="center"
					className={classes.buttonContainer}
					container
					item
					justify="center"
					xs={10}
				>
					{data.githubUrl !== 'N' && (
						<>
							<a href={data.githubUrl} rel="noopener noreferrer" target="_blank">
								<ButtonIcon
									color="primary"
									icon="code"
									title={t('buttonAction')}
									variant="contained"
								/>
							</a>
						</>
					)}
				</Grid>
				<Grid
					alignItems="center"
					className={classes.buttonContainer}
					container
					item
					justify="center"
					xs={10}
				>
					<a href={data.exampleUrl} rel="noopener noreferrer" target="_blank">
						<ButtonIcon color="primary" icon="code" title={t('buttonExample')} variant="outlined" />
					</a>
				</Grid>
			</Grid>
		</div>
	)
}
