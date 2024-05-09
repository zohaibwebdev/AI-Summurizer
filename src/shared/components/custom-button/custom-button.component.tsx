import React, { FC } from 'react'
import { CustomButtonProps } from './custom-button.types'

const CustomButton: FC<CustomButtonProps> = ({ value, onClick, type, styles = {}, classNames = '' }) => {
    const handleClick = () => onClick?.()

    return (
        <button
            style={{ ...styles }}
            className={`px-3 py-2 border rounded-md text-lg ${type == 'secondary' ? 'bg-transparent border-gray-700 text-gray-700' : 'bg-gray-700 text-white'} ${classNames}`}
            onClick={handleClick}
        >
            {value}
        </button>
    )
}

export default CustomButton
