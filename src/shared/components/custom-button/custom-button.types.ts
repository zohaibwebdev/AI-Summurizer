import { CSSProperties } from 'react'
export interface CustomButtonProps {
    value: string
    onClick?: () => void
    type?: string
    styles?: CSSProperties
    classNames?: string
}
