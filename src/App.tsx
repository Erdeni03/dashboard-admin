import { ThemeProvider } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'
import { BrowserRouter as Router } from 'react-router-dom'

import Views from 'views/index'

import { ColorModeContext, useMode } from './theme'

const App = () => {
	const [theme, colorMode] = useMode()
	return (
		<ColorModeContext.Provider value={colorMode}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Router>
					<Views />
				</Router>
			</ThemeProvider>
		</ColorModeContext.Provider>
	)
}

export default App
