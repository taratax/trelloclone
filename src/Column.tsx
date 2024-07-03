import React  from 'react';
import { CardContainer, ColumnContainer, ColumnTitle } from "./styles"
import { AddNewItem } from './AddNewItem';
import { Card } from './Card';
type ColumnProps = {
    text: string
    children?: React.ReactNode
}

export const Column = ( {text}: ColumnProps) => {
    return (
        <ColumnContainer>
            <ColumnTitle>{text}</ColumnTitle>
            <Card text="Generate app Scaffold"></Card>
            <Card text="Learn Typescript"></Card>
            <Card text="Begin to use static typying"></Card>
            <AddNewItem toggleButtonText='+ Add another card'
            onAdd={console.log}
            dark />
        </ColumnContainer>
    )
}

