'use client'

import { Box, Typography } from '@mui/material'
import { Mail, LinkedIn, GitHub, Twitter } from '@mui/icons-material'
import { makeStyles } from 'tss-react/mui'
import { useTranslations } from 'next-intl'

const useStyles = makeStyles()((theme) => ({
	container: {
		backgroundColor: theme.palette.primary.main,
		padding: '1em 2em',
		color: 'white',
		display: 'flex',
		flexWrap: 'wrap',
		alignItems: 'center',
		justifyContent: 'space-between',
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
		flex: '1 1 280px',
		'@media(min-width: 550px)': {
			alignItems: 'center',
		},
	},
	link: {
		color: 'white',
	},
	icons: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		flex: '1 1 200px',
	},
}))

export default function Footer() {
	const { classes } = useStyles()
	const t = useTranslations('footer')
	const date = new Date().getFullYear()
	return (
		<Box className={classes.container} component="footer">
			<Box className={classes.containerGrid}>
				<Typography variant="body1">{`© ${date} Illich Rada. ${t('side')} `}</Typography>
			</Box>
			<Box className={classes.icons}>
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
				<a
					className={classes.link}
					href={t('urlTwitter')}
					rel="noreferrer noopener"
					target="_blank"
				>
					<Twitter className={classes.spacingIcon} />
				</a>
			</Box>
		</Box>
	)
}
