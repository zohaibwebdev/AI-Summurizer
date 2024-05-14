import CopyIcon from '@/shared/icons/copy.icon'
import React from 'react'

const FetchHistory = () => {
    const handleCopy = (url = 'url') => {
        navigator.clipboard.writeText(url)
    }

    return (
        <div className=" p-3 flex justify-start items-center flex-row bg-white border border-gray-200 gap-3 rounded-lg cursor-pointer">
            <a href="http://google.com" className="flex-1  text-blue-700 font-medium text-sm truncate">
                http://google.com
            </a>
            <CopyIcon width={14} height={14} onClick={() => handleCopy('url')} />
        </div>
    )
}

export default FetchHistory
