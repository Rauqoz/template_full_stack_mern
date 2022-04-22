import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { TemplateS } from '../Components/Templates/Styles/Template.styles';
import ChildTemplate from '../Components/Templates/ChildTemplate';
import Template from '../Components/Templates/Template';

const RoutesPath = () => {
	return (
		<TemplateS>
			<BrowserRouter>
				<Routes>
					<Route exact path={'/'} element={<Template />}>
						<Route exact path={'/child'} element={<ChildTemplate />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</TemplateS>
	);
};

export default RoutesPath;
