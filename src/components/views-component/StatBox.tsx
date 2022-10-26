import { Box, SvgIconProps, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { FC, ReactElement } from 'react'

import ProgressCircle from 'components/views-component/ProgressCircle'

import { tokens } from '../../theme'

interface StatBoxProps {
	title: string
	subtitle: string
	icon?: ReactElement<SvgIconProps>
	progress: number
	increase: string
}

const StatBox: FC<StatBoxProps> = ({
	title,
	increase,
	progress,
	subtitle,
	icon
}) => {
	const theme = useTheme()
	const colors = tokens(theme.palette.mode)

	return (
		<Box width='100%' m='0 30px'>
			<Box display='flex' justifyContent='space-between'>
				<Box>
					{icon}
					<Typography
						variant='h4'
						fontWeight='bold'
						sx={{ color: colors.grey[100] }}
					>
						{title}
					</Typography>
				</Box>
				<Box>
					<ProgressCircle progress={progress} />
				</Box>
			</Box>
			<Box display='flex' justifyContent='space-between'>
				<Typography
					variant='h5'
					fontWeight='bold'
					sx={{ color: colors.greenAccent[500] }}
				>
					{subtitle}
				</Typography>
				<Typography
					variant='h5'
					fontStyle='italic'
					sx={{ color: colors.greenAccent[600] }}
				>
					{increase}
				</Typography>
			</Box>
		</Box>
	)
}

export default StatBox
