import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Image from 'next/image'

const useStyles = makeStyles((theme) => ({
	card: {
		width: '180px',
		height: '180px',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		boxShadow: '1.4px 0px 4px 4px rgba(0, 0, 0, 0.08)',
		borderRadius: '15px',
		margin: '2em',
		padding: '1em',
		transition: '.25s',
		'&:hover': {
			borderLeft: `8px solid ${theme.palette.primary.main}`,
			boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
		},
		'@media (max-width: 768px)': {
			margin: '1em',
			padding: '.5em',
		},
		'@media (max-width: 415px)': {
			width: '130px',
			height: '130px',
			margin: '.75em',
			padding: '.25em',
		},
	},
	image: {
		width: '85px',
		height: '85px',
		marginBottom: '1em',
	},
	titleCard: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	title: {
		margin: 0,
		fontSize: '1rem',
		letterSpacing: '1px',
		'@media (min-width: 700px)': {
			fontSize: '1.25rem',
		},
	},
	buttonContainer: {
		margin: '0.8em 0',
	},
	containerBodyCard: {
		paddingBottom: '1.5em',
	},
	containerCards: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
}))

export default function TechCard({ data }) {
	const classes = useStyles()

	return (
		<div className={classes.containerCards}>
			<div className={classes.card}>
				<Image
					alt={data.title}
					className={classes.image}
					height={86}
					src={data.image.url}
					width={86}
				/>
				<Grid container justify="center">
					<Grid className={classes.titleCard} item xs={6}>
						<span className={classes.title}>{data.title}</span>
					</Grid>
				</Grid>
			</div>
		</div>
	)
}
