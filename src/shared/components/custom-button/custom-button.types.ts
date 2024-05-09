import { CSSProperties, PropsWithChildren } from 'react'
export interface CustomButtonProps extends PropsWithChildren {
    onClick?: () => void
    type: CustomButtonTypes
    styles?: CSSProperties
    classNames?: string
    disable?: boolean
    hidden?: boolean
}

export enum CustomButtonTypes {
    PRIMARY = 'PRIMARY',
    SECONDARY = 'SECONDARY',
    LIGHT = 'LIGHT',
    ANOTHER = 'ANOTHER',
}

// export enum CustomButtonClasses {
//     'primary' = 'bg-gray-700 text-white',
//     'secondary' = 'bg-transparent border-gray-700 text-gray-700',
//     'another' = 'text-white bg-[#3948db]',
// }
