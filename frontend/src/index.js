import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// Example start --- you can remove from this line
import { Provider } from 'react-redux';
import store from './Middlewares/Redux/store';
// Example end --- to this line if you dont need the template

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<React.StrictMode>
		{/* Store for Redux */}
		<Provider store={store}>
			<App />
		</Provider>
		{/* Delete the provider if you dont need redux */}
	</React.StrictMode>
);
