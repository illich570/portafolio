'use client'

import { Grid, Typography } from '@mui/material'
import { makeStyles } from 'tss-react/mui'

const useStyles = makeStyles()((theme) => ({
	link: {
		color: theme.palette.primary.main,
		marginLeft: '0.2em',
		textDecoration: 'underline',
	},
	container: {
		margin: '10em 0',
	},
}))

export default function ContactSection({ preamble, actionLabel }) {
	const { classes } = useStyles()

	return (
		<Grid alignItems="center" className={classes.container} container justifyContent="center">
			<Grid size={{ xs: 10 }}>
				<Typography align="center" id="contact_me" variant="h4">
					{preamble}
					<address style={{ display: 'inline' }}>
						<a
							className={classes.link}
							href="mailto:illich570@gmail.com"
							rel="noreferrer noopener"
							target="_blank"
						>
							{actionLabel}
						</a>
					</address>
				</Typography>
			</Grid>
		</Grid>
	)
}
