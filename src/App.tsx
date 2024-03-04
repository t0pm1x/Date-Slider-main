import React from 'react';
import DateSlider from './components/dateSlider';

function App() {
	return (
		<div className="container">
			<DateSlider
				minDate={new Date(2022, 0)}
				maxDate={new Date(2024, 0)}
				selectedStartDate={new Date(2022, 0)}
				selectedEndDate={new Date(2024, 0)}
			/>
		</div>
	);
}

export default App;
