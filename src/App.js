import React from 'react'
import NewEntry from './components/NewEntry'
import VisibilityFilter from './components/VisibilityFilter'
import Entries from './components/Entries'

const App = () => {
	return (
		<div>
			<NewEntry />
			<VisibilityFilter />
			<Entries />
		</div>
	)
}

export default App;
