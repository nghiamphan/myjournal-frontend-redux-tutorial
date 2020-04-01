import entryReducer from './entryReducer'
import deepFreeze from 'deep-freeze'

describe('entryReducer', () => {
	test('returns new state with action NEW_ENTRY', () => {
		const state = []
		const action = {
			type: 'NEW_ENTRY',
			data: {
				content: 'the app state is in redux store',
				important: true,
				id: 1
			}
		}

		deepFreeze(state)
		const newState = entryReducer(state, action)

		expect(newState).toHaveLength(1)
		expect(newState).toContainEqual(action.data)
	})

	test('returns new state with action TOGGLE_IMPORTANCE', () => {
		const state = [
			{
				content: 'the app state is in redux store',
				important: true,
				id: 1
			},
			{
				content: 'state changes are made with actions',
				important: false,
				id: 2
			}]

		const action = {
			type: 'TOGGLE_IMPORTANCE',
			data: {
				id: 2
			}
		}

		deepFreeze(state)
		const newState = entryReducer(state, action)

		expect(newState).toHaveLength(2)

		expect(newState).toContainEqual(state[0])

		expect(newState).toContainEqual({
			content: 'state changes are made with actions',
			important: true,
			id: 2
		})
	})
})