import { Box } from '@mui/material'
import { FC } from 'react'

import BarGraphics from 'components/views-component/BarGraphics'

import { tokens } from '../../../theme'

const BarChart: FC = () => {
	return (
		<Box height='80vh'>
			<BarGraphics />
		</Box>
	)
}

export default BarChart
