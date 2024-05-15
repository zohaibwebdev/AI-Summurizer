import React from 'react'
import CustomInput from '../../custom-input/custom-input.component'
import LinkIcon from '@/shared/icons/link.icon'
import CustomButton from '../../custom-button/custom-button.component'
import { CustomButtonTypes } from '../../custom-button/custom-button.types'

const ArticleSummaryForm = () => {
    const handleInput = () => {}

    const handleSubmit = () => {}

    return (
        <div className="relative">
            <LinkIcon />
            <CustomInput
                type="url"
                placeholder="Enter Article Link Here!!!!"
                required
                changeEvent={handleInput}
                className="block w-full rounded-md border border-gray-200 bg-white py-2.5 pl-10 pr-12 text-sm shadow-lg font-medium focus:border-black focus:outline-none focus:ring-0 peer"
            />
            <CustomButton type={CustomButtonTypes.SUBMIT} onClick={handleSubmit}>
                ↵
            </CustomButton>
        </div>
    )
}

export default ArticleSummaryForm
