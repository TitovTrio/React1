import ReactLogo from './assets/react.svg?react';

export const App = () => {
	const currentYear = new Date().getFullYear();
	return (
		<div>
			<h1>Hello world!</h1>
			<ReactLogo />
			<p>{currentYear}</p>
		</div>
	);
};

// Все декларативное, начиная от получения года заканчивая HTML тегами
