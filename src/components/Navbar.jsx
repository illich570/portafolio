import { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, IconButton, Typography } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import Hidden from '@material-ui/core/Hidden'
import Drawer from '@material-ui/core/Drawer'
import AppBar from '@material-ui/core/AppBar'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import Slide from '@material-ui/core/Slide'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import ChangeLanguage from '@/components/ChangeLanguage'

const useStyles = makeStyles((theme) => ({
	links: {
		color: theme.palette.primary.main,
		textDecoration: 'none',
		padding: '0 1em',
		position: 'relative',
		'&::before': {
			content: '""',
			position: 'absolute',
			width: '0',
			height: '0.20em',
			bottom: '0',
			left: '0',
			backgroundColor: '#000',
			visibility: 'hidden',
			transition: 'all 0.2s ease-in-out 0s',
		},
		'&:hover::before': {
			visibility: 'visible',
			width: '100%',
		},
	},
	headerTitle: {
		color: theme.palette.primary.main,
	},
	containerMobile: {
		height: '100%',
		display: 'flex',
		padding: '1em',
	},
	navbar: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		padding: '0 3em',
		alignItems: 'center',
	},
}))

function HideOnScroll(props) {
	const { children } = props
	const trigger = useScrollTrigger()

	return (
		<Slide appear={false} direction="down" in={!trigger}>
			{children}
		</Slide>
	)
}

export default function Nav() {
	const [showSidebar, setShowSidebar] = useState(false)
	const classes = useStyles()
	const handleShowSidebar = () => setShowSidebar(!showSidebar)
	const { t } = useTranslation('navbar')
	const links = t('links', { returnObjects: true })
	const router = useRouter()

	return (
		<HideOnScroll>
			<AppBar color="default">
				<Grid
					alignItems="center"
					className={classes.navbar}
					container
					direction="row"
					justify="space-between"
				>
					<Grid alignItems="center" container item justify="center" md={6} sm={4} xs={6}>
						<h2 className={classes.headerTitle}>{t('header')}</h2>
					</Grid>
					<Grid item md={6} sm={8} xs={6}>
						<Hidden implementation="css" xsDown>
							<Grid container direction="row" justify="center">
								{links.map((element, index) => {
									return (
										<a
											className={classes.links}
											href={element.ref}
											key={`${element.link}_${index}`}
											rel="noopener noreferrer"
										>
											<Typography color="primary" variant="h6">
												{element.link}
											</Typography>
										</a>
									)
								})}
								<ChangeLanguage />
							</Grid>
						</Hidden>
						<Hidden smUp>
							<Grid container direction="row" justify="flex-end">
								<IconButton color="primary" onClick={handleShowSidebar}>
									<MenuIcon style={{ fontSize: '1.6em' }} />
								</IconButton>
							</Grid>
						</Hidden>
					</Grid>
					<Drawer anchor="right" onClose={handleShowSidebar} open={showSidebar}>
						<Grid
							alignItems="center"
							className={classes.containerMobile}
							container
							direction="column"
							justify="center"
						>
							{links.map((element, index) => {
								return (
									<a
										className={classes.links}
										href={element.ref}
										key={`${element.link}_${index}`}
										rel="noopener noreferrer"
									>
										<Typography color="primary" variant="h5">
											{element.link}
										</Typography>
									</a>
								)
							})}
						</Grid>
						<Grid
							alignItems="center"
							container
							direction="column"
							justify="center"
							style={{ padding: '1em' }}
						>
							<ChangeLanguage />
							<Typography align="center" color="primary" variant="subtitle2">
								&copy;2021 {t('header')}
							</Typography>
						</Grid>
					</Drawer>
				</Grid>
			</AppBar>
		</HideOnScroll>
	)
}
