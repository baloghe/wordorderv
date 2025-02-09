import logo from './logo.svg';
import { Routes, Route } from 'react-router-dom';

import App from './component/App.js';
import AdminPane from './component/AdminPane.js';

export default function AppRouter({qLang, aLang, tests, wait}) {
	return (
		<>
			<Routes>
				<Route path="/" element={<App 
											qLang={qLang} 
											aLang={aLang} 
											tests={tests}
											dbAvailable={true}
											wait={3000}
										/>} 
									/>
				<Route path="/admin" element={<AdminPane aState="START" />} />
			</Routes>
		</>
	);
};
