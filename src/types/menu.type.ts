import { SvgIconTypeMap } from '@mui/material'
import { OverridableComponent } from '@mui/material/OverridableComponent'

export type MenuItem = {
	key: string
	path: string
	title: string
	icon?:
		| (OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & { muiName: string })
		| string
	breadcrumb?: boolean
	submenu: any[]
}

export type MenuList = {
	key: string
	title: string
	path: string
	breadcrumb?: boolean
	icon?:
		| (OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & { muiName: string })
		| string
	submenu: MenuItem[]
}
