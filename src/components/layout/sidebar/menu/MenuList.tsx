import { ListSubheader } from '@mui/material'
import List from '@mui/material/List'
import * as React from 'react'
import { FC } from 'react'

import MenuItem from 'components/layout/sidebar/menu/MenuItem'

import navigationConfig from 'configs/navigation.config'

const MenuList: FC<{ open: boolean }> = ({ open }) => {
	return (
		<>
			{navigationConfig.map((nav, index) => (
				<List
					key={nav.key}
					component='nav'
					subheader={
						<ListSubheader style={{ marginRight: 12 }} id={nav.key}>
							{nav.title}
						</ListSubheader>
					}
				>
					{nav.submenu.map(item => (
						<MenuItem {...item} open={open} key={item.key} />
					))}
				</List>
			))}
		</>
	)
}

export default MenuList
