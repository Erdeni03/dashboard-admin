import Box from '@mui/material/Box'
import { useTheme } from '@mui/material/styles'
import * as React from 'react'
import { FC, ReactNode } from 'react'
import { Outlet } from 'react-router-dom'

import Header from 'components/layout/header'
import SideBar from 'components/layout/sidebar/SideBar'
import { DrawerHeader } from 'components/layout/sidebar/sidebar.styled'

const Layout: FC<{ children?: ReactNode }> = ({ children }) => {
	const theme = useTheme()
	const [open, setOpen] = React.useState(true)

	const handleDrawerOpen = () => {
		setOpen(true)
	}

	const handleDrawerClose = () => {
		setOpen(false)
	}

	return (
		<Box sx={{ display: 'flex' }}>
			<Header open={open} handleDrawerOpen={handleDrawerOpen} />
			<SideBar open={open} theme={theme} handleDrawerClose={handleDrawerClose} />
			<Box component='main' sx={{ flexGrow: 1, p: 3 }}>
				<DrawerHeader />
				<Outlet />
			</Box>
		</Box>
	)
}

export default Layout
