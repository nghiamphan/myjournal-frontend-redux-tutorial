import React from 'react'
import { useDispatch } from 'react-redux'
import { createEntry } from '../reducers/entryReducer'

const NewEntry = () => {
	const dispatch = useDispatch()

	const addEntry = async (event) => {
		event.preventDefault()
		const content = event.target.entry.value
		event.target.entry.value = ''
		dispatch(createEntry(content))
	}

	return (
		<form onSubmit={addEntry}>
			<input name="entry"/>
			<button type="submit">add</button>
		</form>
	)
}

export default NewEntry