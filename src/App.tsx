import React  from 'react';
import { Column } from "./Column"
import { AppContainer } from "./styles"
import { AddNewItem } from './AddNewItem';
import { useAppState } from './state/AppstateContext';

import { addList } from './state/actions'
import { CustomDragLayer } from './CustomDragLayer';

export const  App = () => {
	const { lists, dispatch } = useAppState()
	return (
		<AppContainer>
			<CustomDragLayer />
			{ lists.map( list => (
				<Column text={list.text} key={list.id} id={list.id} />
			))}
			<AddNewItem
				toggleButtonText='+ Add another list'
				onAdd={(text) => dispatch(addList(text))}
			/>
		</AppContainer>
	)
}
