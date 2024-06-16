'use client'

import { type ReactNode, createContext, useRef, useContext } from 'react'
import { useStore } from 'zustand'
import {
	type SearchboxStore,
	createSearchboxStore,
	initSearchboxStore,
} from '@/stores/searchbox-store'

export type SearchboxStoreApi = ReturnType<typeof createSearchboxStore>

export const SearchboxStoreContext = createContext<
	SearchboxStoreApi | undefined
>(undefined)

export interface SearchboxStoreProviderProps {
	children: ReactNode
}

export const SearchboxStoreProvider = ({
	children,
}: SearchboxStoreProviderProps) => {
	const storeRef = useRef<SearchboxStoreApi>()

	if (!storeRef.current)
		storeRef.current = createSearchboxStore(initSearchboxStore())

	return (
		<SearchboxStoreContext.Provider value={storeRef.current}>
			{children}
		</SearchboxStoreContext.Provider>
	)
}

export const useSearchboxStore = <T,>(
	selector: (store: SearchboxStore) => T
): T => {
	const searchboxStoreContext = useContext(SearchboxStoreContext)

	if (!searchboxStoreContext)
		throw new Error(
			'useSearchboxStore must be used within SearchboxStoreProvider'
		)

	return useStore(searchboxStoreContext, selector)
}
