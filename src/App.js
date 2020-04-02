import React, { useEffect } from 'react'
import NewEntry from './components/NewEntry'
import VisibilityFilter from './components/VisibilityFilter'
import Entries from './components/Entries'
import { initializeEntries } from './reducers/entryReducer'
import { useDispatch } from 'react-redux'

const App = () => {
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(initializeEntries())
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
