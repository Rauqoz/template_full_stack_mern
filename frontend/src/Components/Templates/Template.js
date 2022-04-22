import React from 'react';
import { Outlet, useNavigate } from 'react-router';
import { TemplateS } from './Styles/Template.styles';

const Template = () => {
	const navigate = useNavigate();

	return (
		<div>
			<TemplateS>
				<code>Rauqoz</code>
				<button onClick={() => navigate('/child', { state: 'child for props' })}>Go to Child</button>
				<Outlet />
			</TemplateS>
		</div>
	);
};

export default Template;
