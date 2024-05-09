import { CSSProperties } from 'react'
export interface CustomButtonProps {
    value: string
    onClick?: () => void
    type?: 'primary' | 'secondary'
    styles?: CSSProperties
    classNames?: string
}
