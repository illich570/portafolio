'use client'

import { useState } from 'react'
import { makeStyles } from 'tss-react/mui'
import {
	AppBar,
	Drawer,
	Grid,
	IconButton,
	Slide,
	Typography,
	useScrollTrigger,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { useMessages, useTranslations } from 'next-intl'
import ChangeLanguage from '@/components/ChangeLanguage'
import { Link } from 'react-scroll'

const useStyles = makeStyles()((theme) => ({
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
		'&:hover': {
			cursor: 'pointer',
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
			<div>{children}</div>
		</Slide>
	)
}

export default function Nav() {
	const [showSidebar, setShowSidebar] = useState(false)
	const { classes } = useStyles()
	const handleShowSidebar = () => setShowSidebar(!showSidebar)
	const t = useTranslations('navbar')
	const messages = useMessages()
	const links = messages.navbar.links

	return (
		<HideOnScroll>
			<AppBar color="default">
				<Grid
					alignItems="center"
					className={classes.navbar}
					container
					direction="row"
					justifyContent="space-between"
				>
					<Grid
						alignItems="center"
						container
						justifyContent="center"
						size={{ xs: 6, sm: 4, md: 6 }}
					>
						<h2 className={classes.headerTitle}>{t('header')}</h2>
					</Grid>
					<Grid size={{ xs: 6, sm: 8, md: 6 }}>
						<Grid
							container
							direction="row"
							justifyContent="center"
							sx={{ display: { xs: 'none', sm: 'flex' } }}
						>
							{links.map((element, index) => (
								<Link
									className={classes.links}
									key={`${element.link}_${index}`}
									smooth
									spy
									to={element.ref}
								>
									<Typography color="primary" variant="h6">
										{element.link}
									</Typography>
								</Link>
							))}
							<ChangeLanguage />
						</Grid>
						<Grid
							container
							direction="row"
							justifyContent="flex-end"
							sx={{ display: { xs: 'flex', sm: 'none' } }}
						>
							<IconButton color="primary" onClick={handleShowSidebar}>
								<MenuIcon sx={{ fontSize: '1.6em' }} />
							</IconButton>
						</Grid>
					</Grid>
					<Drawer anchor="right" open={showSidebar} onClose={handleShowSidebar}>
						<Grid
							alignItems="center"
							className={classes.containerMobile}
							container
							direction="column"
							justifyContent="center"
						>
							{links.map((element, index) => (
								<Link
									className={classes.links}
									key={`${element.link}_${index}`}
									smooth
									spy
									to={element.ref}
								>
									<Typography color="primary" variant="h6">
										{element.link}
									</Typography>
								</Link>
							))}
						</Grid>
						<Grid
							alignItems="center"
							container
							direction="column"
							justifyContent="center"
							sx={{ padding: '1em' }}
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
