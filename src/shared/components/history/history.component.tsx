import React from 'react'
import CopyIcon from '@/shared/icons/copy.icon'
import CustomButton from '../custom-button/custom-button.component'
import { CustomButtonTypes } from '../custom-button/custom-button.types'

const History = () => {
    const handleCopy = (url = 'url') => {
        navigator.clipboard.writeText(url)
    }

    return (
        <div className="flex flex-col gap-1 justify-center items-center mt-5">
            <div className=" p-3 flex justify-start items-center flex-row bg-white border border-gray-200 gap-3 rounded-lg cursor-pointer">
                <a href="http://google.com" className="flex-1  text-blue-700 font-medium text-sm truncate">
                    http://google.com
                </a>
                <CustomButton
                    type={CustomButtonTypes.SECONDARY}
                    onClick={() => handleCopy('url')}
                    styles={{ padding: 5 }}
                >
                    <CopyIcon width={14} height={14} />
                </CustomButton>
            </div>
        </div>
    )
}

export default History
