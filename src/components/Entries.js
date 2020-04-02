import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleImportanceOf } from '../reducers/entryReducer'

const Entry = ({ entry, handleClick }) => {
	return (
		<li onClick={handleClick}>
			{entry.content}
			<strong>{entry.important ? 'important' : ''}</strong>
		</li>
	)
}

const Entries = () => {
	const dispatch = useDispatch()
	let entries = useSelector(({ filter, entries}) => {
		switch (filter) {
			case 'IMPORTANT':
				return entries.filter(entry => entry.important)
			case 'NONIMPORTANT':
				return entries.filter(entry => !entry.important)
			default:
				return entries
		}
	})

	return (
		<ul>
			{entries.map(entry =>
				<Entry
					key={entry.id}
					entry={entry}
					handleClick={() => dispatch(toggleImportanceOf(entry.id))}
				/>
			)}
		</ul>
	)
}

export default Entries