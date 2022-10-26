import {
	DownloadOutlined,
	EmailOutlined,
	PersonAddOutlined,
	PointOfSaleOutlined,
	TrafficOutlined
} from '@mui/icons-material'
import { Box, Button, IconButton, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'

import BarGraphics from 'components/views-component/BarGraphics'
import GeographyGraphic from 'components/views-component/GeographyGraphic'
import LineGraphic from 'components/views-component/LineGraphic'
import ProgressCircle from 'components/views-component/ProgressCircle'
import StatBox from 'components/views-component/StatBox'

import { mockTransactions } from 'assets/data/mockData'

import { tokens } from '../../../theme'

const Dashboard = () => {
	const theme = useTheme()
	const colors = tokens(theme.palette.mode)
	return (
		<Box>
			<Box display='flex' justifyContent='end' mb='20px'>
				<Button
					sx={{
						backgroundColor: colors.blueAccent[700],
						color: colors.grey[100],
						fontSize: '14px',
						fontWeight: 'bold',
						padding: '10px 20px'
					}}
				>
					<DownloadOutlined sx={{ mr: '10px' }} />
					Download Reports
				</Button>
			</Box>
			<Box
				display='grid'
				gridTemplateColumns='repeat(12, 1fr)'
				gridAutoRows='140px'
				gap='20px'
			>
				<Box
					gridColumn='span 3'
					bgcolor={colors.primary[400]}
					display='flex'
					alignItems='center'
					justifyContent='center'
				>
					<StatBox
						title='12,631'
						subtitle='Emails Sent'
						progress={0.75}
						increase='+14%'
						icon={
							<EmailOutlined
								sx={{ color: colors.greenAccent[600], fontSize: '26px' }}
							/>
						}
					/>
				</Box>
				<Box
					gridColumn='span 3'
					bgcolor={colors.primary[400]}
					display='flex'
					alignItems='center'
					justifyContent='center'
				>
					<StatBox
						title='431,225'
						subtitle='Sales Obtained'
						progress={0.5}
						increase='+21%'
						icon={
							<PointOfSaleOutlined
								sx={{ color: colors.greenAccent[600], fontSize: '26px' }}
							/>
						}
					/>
				</Box>
				<Box
					gridColumn='span 3'
					bgcolor={colors.primary[400]}
					display='flex'
					alignItems='center'
					justifyContent='center'
				>
					<StatBox
						title='32,441'
						subtitle='New Clients'
						progress={0.3}
						increase='+5%'
						icon={
							<PersonAddOutlined
								sx={{ color: colors.greenAccent[600], fontSize: '26px' }}
							/>
						}
					/>
				</Box>
				<Box
					gridColumn='span 3'
					bgcolor={colors.primary[400]}
					display='flex'
					alignItems='center'
					justifyContent='center'
				>
					<StatBox
						title='1,332,222'
						subtitle='Traffic Inbound'
						progress={0.8}
						increase='+43%'
						icon={
							<TrafficOutlined
								sx={{ color: colors.greenAccent[600], fontSize: '26px' }}
							/>
						}
					/>
				</Box>
				<Box gridColumn='span 8' gridRow='span 2' bgcolor={colors.primary[400]}>
					<Box
						mt='25px'
						p='0 30px'
						display='flex'
						justifyContent='space-between'
						alignItems='center'
					>
						<Box>
							<Typography variant='h5' fontWeight='600' color={colors.grey[100]}>
								Revenue Generated
							</Typography>
							<Typography
								variant='h3'
								fontWeight='bold'
								color={colors.greenAccent[500]}
							>
								$59,342,21
							</Typography>
						</Box>
						<Box>
							<IconButton>
								<DownloadOutlined
									sx={{ fontSize: '26px', color: colors.greenAccent[500] }}
								/>
							</IconButton>
						</Box>
					</Box>
					<Box height='250px' mt='-20px'>
						<LineGraphic isDashboard />
					</Box>
				</Box>
				<Box
					gridColumn='span 4'
					gridRow='span 2'
					bgcolor={colors.primary[400]}
					overflow='auto'
				>
					<Box
						display='flex'
						justifyContent='space-between'
						alignItems='center'
						borderBottom={`4px solid ${colors.primary[500]}`}
						color={colors.grey[100]}
						p='15px'
					>
						<Typography color={colors.grey[100]} variant='h5' fontWeight='600'>
							Recent Transactions
						</Typography>
					</Box>
					{mockTransactions.map((transaction, idx) => (
						<Box
							key={`${transaction.txId}-${idx}`}
							display='flex'
							justifyContent='space-between'
							alignItems='center'
							borderBottom={`4px solid ${colors.primary[500]}`}
							p='15px'
						>
							<Box>
								<Typography
									color={colors.greenAccent[500]}
									variant='h5'
									fontWeight='600'
								>
									{transaction.txId}
								</Typography>
								<Typography color={colors.grey[100]}>{transaction.user}</Typography>
							</Box>
							<Box color={colors.grey[100]}>{transaction.date}</Box>
							<Box bgcolor={colors.greenAccent[500]} p='5px 10px' borderRadius='4px'>
								${transaction.cost}
							</Box>
						</Box>
					))}
				</Box>
				<Box
					gridColumn='span 4'
					gridRow='span 2'
					bgcolor={colors.primary[400]}
					p='30px'
				>
					<Typography variant='h5' fontWeight='600'>
						Campaign
					</Typography>
					<Box display='flex' flexDirection='column' alignItems='center' mt='25px'>
						<ProgressCircle size='125' />
						<Typography
							variant='h5'
							color={colors.greenAccent[500]}
							sx={{ mt: '15px' }}
						>
							$48,352 revenue generated
						</Typography>
						<Typography>Includes extra misc and costs</Typography>
					</Box>
				</Box>

				<Box gridColumn='span 4' gridRow='span 2' bgcolor={colors.primary[400]}>
					<Typography variant='h5' fontWeight='600' sx={{ p: '30px 30px 0 30px' }}>
						Sales Quantity
					</Typography>
					<Box height='250px' mt='-20px'>
						<BarGraphics isDashboard />
					</Box>
				</Box>

				<Box
					gridColumn='span 4'
					gridRow='span 2'
					bgcolor={colors.primary[400]}
					p='30px'
				>
					<Typography variant='h5' fontWeight='600' sx={{ mb: '15px' }}>
						Geography Based Traffic
					</Typography>
					<Box height='200px'>
						<GeographyGraphic isDashboard />
					</Box>
				</Box>
			</Box>
		</Box>
	)
}

export default Dashboard
