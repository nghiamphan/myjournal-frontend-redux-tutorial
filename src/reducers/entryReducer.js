const entryReducer = (state = [], action) => {
	switch (action.type) {
		case 'NEW_ENTRY':
			return state.concat(action.data)
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

const generateId = () =>
	Number((Math.random() * 1000000).toFixed(0))

export const createEntry = (content) => {
	return {
		type: 'NEW_ENTRY',
		data: {
			content,
			important: false,
			id: generateId()
		}
	}
}

export const toggleImportanceOf = (id) => {
	return {
		type: 'TOGGLE_IMPORTANCE',
		data: { id }
	}
}

export default entryReducer