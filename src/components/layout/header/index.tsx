import {
	DarkModeOutlined,
	LightModeOutlined,
	MenuOutlined,
	NotificationsOutlined,
	PersonOutlined,
	SearchOutlined,
	SettingsOutlined
} from '@mui/icons-material'
import { InputBase, useTheme } from '@mui/material'
import MuiAppBar from '@mui/material/AppBar'
import { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar/AppBar'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Toolbar from '@mui/material/Toolbar'
import { styled } from '@mui/material/styles'
import { FC, useContext } from 'react'

import { drawerWidth } from 'components/layout/layout.config'

import { ColorModeContext, tokens } from '../../../theme'

interface AppBarProps extends MuiAppBarProps {
	open?: boolean
}

const AppBar = styled(MuiAppBar, {
	shouldForwardProp: prop => prop !== 'open'
})<AppBarProps>(({ theme, open }) => ({
	zIndex: theme.zIndex.drawer + 1,
	transition: theme.transitions.create(['width', 'margin'], {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen
	}),
	...(open && {
		marginLeft: drawerWidth,
		width: `calc(100% - ${drawerWidth}px)`,
		transition: theme.transitions.create(['width', 'margin'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen
		})
	})
}))

interface HeaderProps {
	open: boolean
	handleDrawerOpen: () => void
}

const Header: FC<HeaderProps> = ({ open, handleDrawerOpen }) => {
	const theme = useTheme()
	const colors = tokens(theme.palette.mode)
	const colorMode = useContext(ColorModeContext)

	return (
		<AppBar color='secondary' position='fixed' open={open}>
			<Box display='flex' justifyContent='space-between'>
				<Toolbar>
					<IconButton
						color='inherit'
						aria-label='open drawer'
						onClick={handleDrawerOpen}
						edge='start'
						sx={{
							marginRight: 5,
							...(open && { display: 'none' })
						}}
					>
						<MenuOutlined />
					</IconButton>
					<InputBase
						sx={{
							flex: 1,
							backgroundColor: colors.primary[400],
							borderRadius: '3px',
							padding: 0.5
						}}
						placeholder={'Search'}
					/>
					<IconButton type='button'>
						<SearchOutlined />
					</IconButton>
				</Toolbar>
				<Toolbar>
					<IconButton onClick={colorMode.toggleColorMode}>
						{theme.palette.mode === 'dark' ? (
							<LightModeOutlined />
						) : (
							<DarkModeOutlined />
						)}
					</IconButton>
					<IconButton>
						<NotificationsOutlined />
					</IconButton>
					<IconButton>
						<PersonOutlined />
					</IconButton>
					<IconButton>
						<SettingsOutlined />
					</IconButton>
				</Toolbar>
			</Box>
		</AppBar>
	)
}

export default Header
