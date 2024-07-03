import React  from 'react';
import { Column } from "./Column"
import { AppContainer, CardContainer, ColumnContainer, ColumnTitle } from "./styles"
import { AddNewItem } from './AddNewItem';

export const  App = () => {
	return (
		<AppContainer>
			<Column text="Todo:" />
			<AddNewItem toggleButtonText='+ Add another list'
			onAdd={console.log}
			/>
		</AppContainer>
	)
}
