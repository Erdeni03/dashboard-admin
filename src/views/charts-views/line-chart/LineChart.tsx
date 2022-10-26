import { Box } from '@mui/material'
import { FC } from 'react'

import LineGraphic from 'components/views-component/LineGraphic'

const LineChart: FC = () => {
	return (
		<Box height='80vh'>
			<LineGraphic />
		</Box>
	)
}

export default LineChart
