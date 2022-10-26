import {
	AdminPanelSettingsOutlined,
	LockOpenOutlined,
	SecurityOutlined
} from '@mui/icons-material'
import { Typography } from '@mui/material'
import Box from '@mui/material/Box'
import { useTheme } from '@mui/material/styles'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import { FC } from 'react'

import { mockDataTeam } from 'assets/data/mockData'

import { tokens } from '../../../theme'

const ManageTeam: FC = () => {
	const theme = useTheme()
	const colors = tokens(theme.palette.mode)

	const columns: GridColDef[] = [
		{ field: 'id', headerName: 'ID' },
		{
			field: 'name',
			headerName: 'Name',
			flex: 1,
			cellClassName: 'name-column--cell'
		},
		{
			field: 'age',
			headerName: 'Age',
			type: 'number',
			headerAlign: 'left',
			align: 'left'
		},
		{
			field: 'phone',
			headerName: 'Phone',
			flex: 1
		},
		{
			field: 'email',
			headerName: 'Email',
			flex: 1
		},
		{
			field: 'access',
			headerName: 'Access Level',
			flex: 1,
			renderCell: ({ row: { access } }) => {
				return (
					<Box
						width='60%'
						m='0 auto'
						p='5px'
						display='flex'
						justifyContent='center'
						borderRadius='4px'
						bgcolor={
							access === 'admin' ? colors.greenAccent[600] : colors.greenAccent[700]
						}
					>
						{access === 'admin' && <AdminPanelSettingsOutlined />}
						{access === 'manager' && <SecurityOutlined />}
						{access === 'user' && <LockOpenOutlined />}
						<Typography color={colors.grey[100]} sx={{ ml: '5px' }}>
							{access}
						</Typography>
					</Box>
				)
			}
		}
	]

	return (
		<Box
			height='80vh'
			sx={{
				'& .MuiDataGrid-root': {
					border: 'none'
				},
				'& .MuiDataGrid-cell': {
					borderBottom: 'none'
				},
				'& .name-column--cell': {
					color: colors.greenAccent[300]
				},
				'& .MuiDataGrid-columnHeaders': {
					backgroundColor: colors.blueAccent[700],
					borderBottom: 'none'
				},
				'& .MuiDataGrid-virtualScroller': {
					backgroundColor: colors.primary[400]
				},
				'& .MuiDataGrid-footerContainer': {
					borderTop: 'none',
					backgroundColor: colors.blueAccent[700]
				}
			}}
		>
			<DataGrid columns={columns} rows={mockDataTeam} />
		</Box>
	)
}

export default ManageTeam
