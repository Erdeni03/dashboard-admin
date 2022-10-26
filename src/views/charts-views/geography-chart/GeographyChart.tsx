import { Box } from '@mui/material'
import { FC } from 'react'

import GeographyGraphic from 'components/views-component/GeographyGraphic'

const GeographyChart: FC = () => {
	return (
		<Box height='80vh'>
			<GeographyGraphic />
		</Box>
	)
}

export default GeographyChart
