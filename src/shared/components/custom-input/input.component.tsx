import LinkIcon from '@/shared/icons/link.icon'
import React, { useState } from 'react'

const CustomInput = () => {
    const [inputValue, setInputValue] = useState('')
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        // Other form submission logic
    }
    return (
        <form onSubmit={handleSubmit} className="relative flex justify-center items-center w-full">
            <input
                type="url"
                value={inputValue}
                placeholder="Paste the article link"
                required
                onChange={(e) => setInputValue(e.target.value)}
                className="peer block w-full rounded-md border border-gray-200 bg-white py-2.5 pl-10 pr-12 text-sm shadow-lg font-satoshi font-medium focus:border-black focus:outline-none focus:ring-0"
            />
            <LinkIcon height={20} width={20} />
            <button
                type="submit"
                className="hover:border-gray-700 hover:text-gray-700 absolute inset-y-0 right-0 my-1.5 mr-1.5 flex w-10 items-center justify-center rounded border border-gray-200 font-sans text-sm font-medium text-gray-400 peer-focus:border-gray-700 peer-focus:text-gray-700 "
            >
                <p className="text-lg">↵</p>
            </button>
        </form>
    )
}

export default CustomInput
