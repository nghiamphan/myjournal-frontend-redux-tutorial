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

export const initializeEntries = (entries) => {
	return {
		type: 'INIT_ENTRIES',
		data: entries,
	}
}

const generateId = () =>
	Number((Math.random() * 1000000).toFixed(0))

export const createEntry = (data) => {
	return {
		type: 'NEW_ENTRY',
		data
	}
}

export const toggleImportanceOf = (id) => {
	return {
		type: 'TOGGLE_IMPORTANCE',
		data: { id }
	}
}

export default entryReducer