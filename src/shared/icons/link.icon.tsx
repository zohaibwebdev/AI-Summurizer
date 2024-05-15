import React from 'react'
import { IconProps } from '../types/icon.types'

const LinkIcon: React.FC<IconProps> = ({ width = 120, height = 40 }) => {
    return (
        <svg
            className="absolute left-0 my-1 ml-3 w-5"
            fill="none"
            shapeRendering="geometricPrecision"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            width={width}
            height={height}
            version="1.1"
            id="svg6"
            xmlns="http://www.w3.org/2000/svg"
        >
            <defs id="defs10" />
            <path d="M15 7h3a5 5 0 015 5 5 5 0 01-5 5h-3m-6 0H6a5 5 0 01-5-5 5 5 0 015-5h3" id="path2" />
            <path d="M8 12h8" id="path4" />
        </svg>
    )
}

export default LinkIcon
