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
	const entries = useSelector(state => state)

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