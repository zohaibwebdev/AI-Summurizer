import React, { useState } from 'react'
import CustomInput from '../../custom-input/custom-input.component'
import LinkIcon from '@/shared/icons/link.icon'
import CustomButton from '../../custom-button/custom-button.component'
import { CustomButtonTypes } from '../../custom-button/custom-button.types'
import { useDispatch } from 'react-redux'
import { fetchArticleSummary } from '@/redux/summary-slice'
import { AppDispatch } from '@/redux/store'

const ArticleSummaryForm = () => {
    const [inputUrl, setInputUrl] = useState<string>('')
    const dispatch: AppDispatch = useDispatch()

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const input = e.target.value
        setInputUrl(input)
    }

    const handleSubmit = async () => {
        dispatch(fetchArticleSummary(inputUrl))
    }

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
