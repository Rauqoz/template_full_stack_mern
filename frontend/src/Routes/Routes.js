import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageError from '../Components/Error/PageError';
import { SRoutes } from './Styles/Routes.styles';
// Example start --- you can remove from this line
import ChildTemplate from '../Components/Templates/ChildTemplate';
import Template from '../Components/Templates/Template';
// Example end --- to this line if you dont need the template

const RoutesPath = () => {
	return (
		<SRoutes>
			<BrowserRouter>
				<Routes>
					{/* Route '/' */}
					<Route exact path={'/'} element={<Template />}>
						{/* Template with Childrens, you need add the father path on the children route */}
						<Route exact path={'/child'} element={<ChildTemplate />} />
					</Route>

					{/* Page Error for Any Other Page */}
					<Route exact path={'*'} element={<PageError />} />
				</Routes>
			</BrowserRouter>
		</SRoutes>
	);
};

export default RoutesPath;
