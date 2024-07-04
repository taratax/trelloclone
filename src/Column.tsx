import React  from 'react'
import { CardContainer, ColumnContainer, ColumnTitle } from "./styles"
import { AddNewItem } from './AddNewItem'
import { Card } from './Card'
import { useAppState } from './state/AppstateContext'
import { addTask } from './state/actions'

type ColumnProps = {
    text: string
    children?: React.ReactNode
    id: string
}

export const Column = ( {text, id}: ColumnProps) => {

    const { getTasksByListId, dispatch } = useAppState()
    const tasks = getTasksByListId(id)

    return (
        <ColumnContainer>
            <ColumnTitle>{text}</ColumnTitle>
            {tasks.map( task => (
                <Card text={task.text} id={task.id}  key={task.id} />
            )
            )}
            <AddNewItem toggleButtonText='+ Add another card'
            onAdd={text => {
                console.log(`GK in onAdd text: ${text} id: ${id}`)
                dispatch(addTask(text, id))}
            }
            dark />
        </ColumnContainer>
    )
}

