import { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, IconButton, Typography } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import Hidden from '@material-ui/core/Hidden'
import Drawer from '@material-ui/core/Drawer'
import AppBar from '@material-ui/core/AppBar'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import Slide from '@material-ui/core/Slide'

const useStyles = makeStyles((theme) => ({
	links: {
		color: theme.palette.primary.main,
		textDecoration: 'none',
		padding: '0 1.5em',
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

	return (
		<HideOnScroll>
			<AppBar color="default">
				<Grid
					className={classes.navbar}
					container
					direction="row"
					justify="space-between"
					alignItems="center"
				>
					<Grid item xs={6} sm={4} md={6} container justify="center" alignItems="center">
						<h2 className={classes.headerTitle}>Illich Rada</h2>
					</Grid>

					<Grid item xs={6} sm={8} md={6}>
						<Hidden xsDown implementation="css">
							<Grid direction="row" container justify="center">
								<a className={classes.links} href="#projects" rel="noopener noreferrer">
									<Typography color="primary" variant="h6">
										Proyectos
									</Typography>
								</a>
								<a className={classes.links} href="#about_me" rel="noopener noreferrer">
									<Typography color="primary" variant="h6">
										Contacto
									</Typography>
								</a>
								<a className={classes.links} href="#contact_me" rel="noopener noreferrer">
									<Typography color="primary" variant="h6">
										About
									</Typography>
								</a>
							</Grid>
						</Hidden>
						<Hidden smUp>
							<Grid direction="row" container justify="flex-end">
								<IconButton color="primary" onClick={handleShowSidebar}>
									<MenuIcon style={{ fontSize: '1.6em' }} />
								</IconButton>
							</Grid>
						</Hidden>
					</Grid>
					<Drawer anchor="right" open={showSidebar} onClose={handleShowSidebar}>
						<Grid
							container
							direction="column"
							justify="center"
							alignItems="center"
							className={classes.containerMobile}
						>
							<a className={classes.links} href="#projects" rel="noopener noreferrer">
								<Typography color="primary" variant="h5">
									Proyectos
								</Typography>
							</a>
							<a className={classes.links} href="#about_me" rel="noopener noreferrer">
								<Typography color="primary" variant="h5">
									Contacto
								</Typography>
							</a>
							<a className={classes.links} href="#contact_me" rel="noopener noreferrer">
								<Typography color="primary" variant="h5">
									About
								</Typography>
							</a>
						</Grid>
						<Grid
							container
							direction="column"
							justify="center"
							alignItems="center"
							style={{ padding: '1em' }}
						>
							<Typography align="center" color="primary" variant="subtitle2">
								&copy;2020 Illich Rada
							</Typography>
						</Grid>
					</Drawer>
				</Grid>
			</AppBar>
		</HideOnScroll>
	)
}
