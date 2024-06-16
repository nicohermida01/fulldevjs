import { createStore } from 'zustand'

export type SearchboxState = {
	input: string
}

export type SearchboxActions = {
	changeInput: (value: string) => void
}

export type SearchboxStore = SearchboxState & SearchboxActions

export const initSearchboxStore = (): SearchboxState => {
	return {
		input: '',
	}
}

export const defaultInitState: SearchboxState = {
	input: '',
}

export const createSearchboxStore = (
	initState: SearchboxState = defaultInitState
) => {
	return createStore<SearchboxStore>(set => ({
		...initState,
		changeInput: value => set(state => ({ input: value })),
	}))
}
