import { Typography } from '@mui/material'
import Box from '@mui/material/Box'
import { useTheme } from '@mui/material/styles'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import { FC } from 'react'

import { mockDataInvoices } from 'assets/data/mockData'

import { tokens } from '../../../theme'

const InvoicesBalances: FC = () => {
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
			field: 'cost',
			headerName: 'Cost',
			flex: 1,
			renderCell: params => (
				<Typography color={colors.greenAccent[500]}>${params.row.cost}</Typography>
			)
		},
		{
			field: 'date',
			headerName: 'Date',
			flex: 1
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
				},
				'& .MuiCheckbox-root': {
					color: `${colors.greenAccent[200]} !important`
				}
			}}
		>
			<DataGrid checkboxSelection columns={columns} rows={mockDataInvoices} />
		</Box>
	)
}

export default InvoicesBalances
