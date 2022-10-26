import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import { Theme } from '@mui/material/styles'
import * as React from 'react'
import { FC } from 'react'
import { Scrollbars } from 'react-custom-scrollbars'

import Menu from 'components/layout/sidebar/menu/Menu'

import { Drawer, DrawerHeader } from './sidebar.styled'

interface SideBarProps {
	open: boolean
	theme: Theme
	handleDrawerClose: () => void
}

const SideBar: FC<SideBarProps> = ({ open, theme, handleDrawerClose }) => {
	console.log(theme, 'theme')
	return (
		<Drawer variant='permanent' open={open}>
			<DrawerHeader>
				<IconButton onClick={handleDrawerClose}>
					{theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
				</IconButton>
			</DrawerHeader>
			<Divider />
			<Scrollbars
				autoHide
				// renderTrackVertical={({ style, ...props }) => (
				// 	<div
				// 		style={{ ...style, backgroundColor: 'red', height: 1000 }}
				// 		{...props}
				// 	/>
				// )}
				renderThumbVertical={({ style, ...props }) => (
					<div
						style={{
							...style,
							borderRadius: 5,
							backgroundColor: 'rgb(143 141 141 / 87%)'
						}}
						{...props}
					/>
				)}
			>
				<Menu open={open} />
			</Scrollbars>
		</Drawer>
	)
}
export default SideBar
