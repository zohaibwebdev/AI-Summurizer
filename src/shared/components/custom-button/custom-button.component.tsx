import React, { FC } from 'react'
import { CustomButtonProps } from './custom-button.types'

const CustomButton: FC<CustomButtonProps> = ({ value, onClick, type, styles = {}, classNames = '' }) => {
    const existingClassesForSec = 'bg-transparent px-3 py-2 border border-gray-800 rounded-md text-lg'
    const existingClassesForPrimary = 'bg-gray-800 text-white px-3 py-2 border border-gray-800 rounded-md text-lg'
    const newClasses = classNames
    const newClassNameSec = `${existingClassesForSec} ${newClasses}`
    const newClassNamePrimary = `${existingClassesForPrimary} ${newClasses}`
    const handleClick = () => onClick?.()
    if (type == 'secondary') {
        return (
            <button style={{ ...styles }} className={newClassNameSec} onClick={handleClick}>
                {value}
            </button>
        )
    }

    return (
        <button style={{ ...styles }} className={newClassNamePrimary} onClick={handleClick}>
            {value}
        </button>
    )
}

export default CustomButton
