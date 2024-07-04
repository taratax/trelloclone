import { CardContainer } from "./styles"
import React  from 'react'

type CardProps = {
    text: string
    id: string
}

export const Card = ( {text, id } : CardProps) => {
    return( <CardContainer>{text}</CardContainer>)
}