import { createContext, useContext, Dispatch ,FC } from "react";
import React  from 'react';

import {
    appStateReducer,
    AppState,
    List,
    Task
} from './appStateReducer'
import { Action } from './actions'
import { useImmerReducer } from "use-immer";


const appData: AppState = {
    lists: [
        {
            id: "0",
            text: "To Do",
            tasks: [{ id: "c0", text: "Generate app scaffold" }]
        },
        {
            id: "1",
            text: "inProgress",
            tasks: [{id: "c2", text: "Learn TypeScript"}]
        },
        {
            id: "2",
            text: "Done",
            tasks: [{id: "c3", text: "Begin to use static typying"}]
        }
    ]
}

type AppstateContextProps = {
    lists: List[]
    getTasksByListId(id: string): Task[]
    dispatch: Dispatch<Action>
}

const AppStateContext = createContext<AppstateContextProps>(
    {} as AppstateContextProps
)
interface Props {
    children?: React.ReactNode
}
export const AppStateProvider: FC<Props> = ({ children }) => {
    const [state, dispatch] = useImmerReducer(appStateReducer, appData)
    const { lists } = state
    const getTasksByListId = ( id: string) => {
        return lists.find(list => list.id === id)?.tasks || []
    }


return ( 
    <AppStateContext.Provider value= {{lists, getTasksByListId, dispatch}}>
        {children}
    </AppStateContext.Provider>
)
}

export const useAppState = () => {
    return useContext(AppStateContext)
}