import React, { useEffect } from 'react'
import NewEntry from './components/NewEntry'
import VisibilityFilter from './components/VisibilityFilter'
import Entries from './components/Entries'
import entryService from './services/entryService'
import { initializeEntries } from './reducers/entryReducer'
import { useDispatch } from 'react-redux'

const App = () => {
	const dispatch = useDispatch()
	useEffect(() => {
		entryService.getAll()
			.then(entries => dispatch(initializeEntries(entries)))
	}, [dispatch])

	return (
		<div>
			<NewEntry />
			<VisibilityFilter />
			<Entries />
		</div>
	)
}

export default App;
