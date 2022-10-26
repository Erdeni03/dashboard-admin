import { Switch } from '@mui/material'
import { LazyExoticComponent, Suspense, lazy, useEffect } from 'react'
import {
	Navigate,
	Route,
	Routes,
	redirect,
	useLocation,
	useNavigate
} from 'react-router-dom'

import Layout from 'components/layout/Layout'

import Default from 'views/app-views/dashboard'

import { APP_PREFIX_PATH } from '../../configs/app.config'

import s from './Index.module.scss'

// const Default = lazy(() => import(`./dashboard`))

const AppViews = () => {
	// const navigate = useNavigate()
	// useEffect(() => {
	// 	navigate('/app/dashboard')
	// })
	// return (
	// 	<Routes>
	// 		<Route path={APP_PREFIX_PATH}></Route>
	// 	</Routes>
	// )
}

export default AppViews
