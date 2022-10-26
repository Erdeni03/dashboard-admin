import Divider from '@mui/material/Divider'
import * as React from 'react'
import { FC } from 'react'

import MenuList from 'components/layout/sidebar/menu/MenuList'

const Menu: FC<{ open: boolean }> = ({ open }) => {
	return (
		<>
			<MenuList open={open} />
			<Divider sx={{ m: 2, mb: 5 }} />
		</>
	)
}

export default Menu
