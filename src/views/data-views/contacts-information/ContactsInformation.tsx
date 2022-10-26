import Box from '@mui/material/Box'
import { useTheme } from '@mui/material/styles'
import { DataGrid, GridColDef, GridToolbar } from '@mui/x-data-grid'
import { FC } from 'react'

import { mockDataContacts } from 'assets/data/mockData'

import { tokens } from '../../../theme'

const ContactsInformation: FC = () => {
	const theme = useTheme()
	const colors = tokens(theme.palette.mode)

	const columns: GridColDef[] = [
		{ field: 'id', headerName: 'ID' },
		{ field: 'registrarId', headerName: 'Registrar ID', flex: 0.5 },
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
			field: 'address',
			headerName: 'Address',
			flex: 1
		},
		{
			field: 'city',
			headerName: 'City',
			flex: 1
		},
		{
			field: 'zipCode',
			headerName: 'ZipCode',
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
				'& .MuiDataGrid-toolbarContainer .MuiButton-text': {
					color: `${colors.grey[100]} !important`
				}
			}}
		>
			<DataGrid
				columns={columns}
				rows={mockDataContacts}
				components={{ Toolbar: GridToolbar }}
			/>
		</Box>
	)
}

export default ContactsInformation
