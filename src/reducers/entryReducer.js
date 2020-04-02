import entryService from "../services/entryService"

const entryReducer = (state = [], action) => {
	switch (action.type) {
		case 'NEW_ENTRY':
			return state.concat(action.data)
		case 'INIT_ENTRIES':
			return action.data
		case 'TOGGLE_IMPORTANCE':
			const id = action.data.id
			const entryToChange = state.find(n => n.id === id)
			const changedEntry = {
				...entryToChange,
				important: !entryToChange.important
			}
			return state.map(entry => entry.id !== id ? entry : changedEntry)
		default:
			return state
	}
}

export const initializeEntries = () => {
	return async dispatch => {
		const entries = await entryService.getAll()
		dispatch({
			type: 'INIT_ENTRIES',
			data: entries,
		})
	} 
}

export const createEntry = (content) => {
	return async dispatch => {
		const newEntry = await entryService.createNew(content)
		dispatch({
			type: 'NEW_ENTRY',
			data: newEntry
		})
	} 
}

export const toggleImportanceOf = (id) => {
	return {
		type: 'TOGGLE_IMPORTANCE',
		data: { id }
	}
}

export default entryReducer