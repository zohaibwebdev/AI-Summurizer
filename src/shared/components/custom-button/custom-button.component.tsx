import React, { FC } from 'react'
import { CustomButtonProps } from './custom-button.types'

const CustomButton: FC<CustomButtonProps> = ({ value, onClick, type, styles = {}, classNames = '' }) => {
    // const handleClick = () => onClick?.()

    return (
        <button
            style={{ ...styles }}
            className={`px-3 py-2 border rounded-md text-lg ${type == 'secondary' ? 'bg-transparent border-gray-700 text-gray-700' : type == 'primary' ? 'bg-gray-700 text-white' : 'bg-transparent text-black border-b border-red-500'} ${classNames}`}
            onClick={() => onClick?.()}
        >
            {value}
        </button>
    )
}

export default CustomButton
