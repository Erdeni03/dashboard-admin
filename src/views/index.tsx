import { Navigate, Route, Routes } from 'react-router-dom'

import Layout from 'components/layout/Layout'

import Dashboard from 'views/app-views/dashboard'
import BarChart from 'views/charts-views/bar-chart/BarChart'
import GeographyChart from 'views/charts-views/geography-chart/GeographyChart'
import LineChart from 'views/charts-views/line-chart/LineChart'
import PieChart from 'views/charts-views/pie-chart/PieChart'
import ContactsInformation from 'views/data-views/contacts-information/ContactsInformation'
import InvoicesBalances from 'views/data-views/invoices-balances/InvoicesBalances'
import ManageTeam from 'views/data-views/manage-team/ManageTeam'
import Calendar from 'views/pages-views/calendar/Calendar'
import FAQPage from 'views/pages-views/faq-page/FAQPage'
import ProfileForm from 'views/pages-views/profile-form/ProfileForm'

const Views = () => {
	return (
		<>
			<Routes>
				<Route path={'/'} element={<Layout />}>
					<Route path='home'>
						<Route path='dashboard' element={<Dashboard />} />
						<Route path='/home' element={<Navigate replace to={`dashboard`} />} />
						<Route path='*' element={<Navigate replace to={`dashboard`} />} />
					</Route>
					<Route path='data'>
						<Route path='manage-team' element={<ManageTeam />} />
						<Route path='invoices-balances' element={<InvoicesBalances />} />
						<Route path='contacts-information' element={<ContactsInformation />} />
					</Route>
					<Route path='pages'>
						<Route path='calendar' element={<Calendar />} />
						<Route path='faq-page' element={<FAQPage />} />
						<Route path='profile-form' element={<ProfileForm />} />
					</Route>
					<Route path='chart'>
						<Route path='bar-chart' element={<BarChart />} />
						<Route path='line-chart' element={<LineChart />} />
						<Route path='pie-chart' element={<PieChart />} />
						<Route path='geography-chart' element={<GeographyChart />} />
					</Route>
					<Route path='/' element={<Navigate to='home' replace />} />
					<Route path='*' element={<Navigate to='home' replace />} />
				</Route>
			</Routes>
		</>
	)
}

export default Views
