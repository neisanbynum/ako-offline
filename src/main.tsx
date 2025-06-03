import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@neisanworks/tailwindcss'
import { BrowserRouter, Route, Routes } from 'react-router'
import { AppLayout } from './layouts/app'
import { HomeRoute } from './routes/home'
import { PortalManager } from './components/base/portals'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<PortalManager>
			<BrowserRouter>
				<Routes>
					<Route element={<AppLayout />}>
						<Route index element={<HomeRoute />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</PortalManager>
	</StrictMode>
)
