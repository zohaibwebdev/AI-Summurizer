import React, { FC } from 'react'
import { CustomButtonProps } from './custom-button.types'
import { customButtonStyles, defaultClass } from './custom-button.styles'

const CustomButton: FC<CustomButtonProps> = ({ onClick, type, styles, classNames, children, hidden, disable }) => {
    // let buttonClass = 'px-3 py-2 border rounded-md text-lg ';
    // switch (type) {
    //     case 'secondary':
    //         buttonClass += 'bg-transparent border-gray-700 text-gray-700';
    //         break;
    //     case 'primary':
    //         buttonClass += 'bg-gray-700 text-white';
    //         break;
    //     case 'another':
    //         buttonClass += 'text-white bg-[#3948db]';
    //         break;
    //     default:
    //         buttonClass += 'bg-transparent text-black border-b border-red-500';
    //         break;
    // }
    // buttonClass += ` ${classNames}`;
    //  best approach
    if (hidden) {
        return null
    }

    return (
        <button
            disabled={disable}
            style={{ ...styles }}
            className={`${defaultClass} ${customButtonStyles[type]} ${classNames}`}
            onClick={() => onClick?.()}
        >
            {children}
        </button>
    )
}

export default CustomButton
