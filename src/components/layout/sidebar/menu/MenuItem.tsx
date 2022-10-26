import { ExpandLess, ExpandMore } from '@mui/icons-material'
import { Collapse, SvgIconTypeMap } from '@mui/material'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import { OverridableComponent } from '@mui/material/OverridableComponent'
import { FC, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

type SubMenu = {
	key: string
	path: string
	title: string
	icon?:
		| (OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & { muiName: string })
		| string
	breadcrumb: boolean
	submenu: any[]
}

interface MenuItemProps {
	open: boolean
	title: string
	path: string
	breadcrumb?: boolean
	icon?:
		| (OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & { muiName: string })
		| string

	submenu: SubMenu[]
}

const MenuItem: FC<MenuItemProps> = props => {
	const { open, title, path, submenu } = props
	const [isOpenSubMenu, setIsOpenSubMenu] = useState(true)
	const location = useLocation()
	const navigate = useNavigate()

	const onLink = (path: string, isSubmenu: boolean) => {
		isSubmenu ? setIsOpenSubMenu(!isOpenSubMenu) : navigate(path)
	}

	return (
		<ListItem disablePadding sx={{ display: 'block' }}>
			<ListItemButton
				sx={{
					minHeight: 48,
					justifyContent: open ? 'initial' : 'center',
					px: 2.5
				}}
				selected={path === location.pathname}
				onClick={() => onLink(path, submenu.length > 0)}
			>
				<ListItemIcon
					sx={{
						minWidth: 0,
						mr: open ? 3 : 'auto',
						justifyContent: 'center'
					}}
				>
					{props.icon && <props.icon />}
				</ListItemIcon>
				<ListItemText primary={title} sx={{ opacity: open ? 1 : 0 }} />
				{submenu.length > 0 ? (
					isOpenSubMenu ? (
						<ExpandLess />
					) : (
						<ExpandMore />
					)
				) : null}
			</ListItemButton>
			{submenu.length > 0 && (
				<Collapse in={isOpenSubMenu} timeout='auto' unmountOnExit>
					<List component='div' disablePadding>
						{submenu.map(item => (
							<ListItemButton
								key={item.key}
								selected={item.path === location.pathname}
								onClick={() => onLink(item.path, item.submenu.length > 0)}
								sx={{ pl: 4 }}
							>
								<ListItemIcon>{item.icon && <item.icon />}</ListItemIcon>
								<ListItemText primary={item.title} />
							</ListItemButton>
						))}
					</List>
				</Collapse>
			)}
		</ListItem>
	)
}

export default MenuItem
