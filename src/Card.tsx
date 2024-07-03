import { CardContainer } from "./styles"
import React  from 'react'

type CardProps = {
    text: string
}

export const Card = ( {text } : CardProps) => {
    return( <CardContainer>{text}</CardContainer>)
}