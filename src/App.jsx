import ReactLogo from './assets/react.svg';
import React from 'react';

export const App = () => {
	const currentYear = new Date().getFullYear();
	return React.createElement(
		'div',
		null,
		React.createElement('h1', null, 'Hello world!'),
		React.createElement(`img`, { src: ReactLogo }, null),
		React.createElement('p', null, currentYear),
	);
};

// Все декларативное, начиная от получения года заканчивая HTML тегами
