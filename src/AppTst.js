import { Routes, Route } from 'react-router-dom';

export default function AppTst(){
	return (
	<>
         <Routes>
            <Route path="/" element={<p>Normal</p>} />
            <Route path="/admin" element={<p>Admin</p>} />
         </Routes>
      </>

	);
};
