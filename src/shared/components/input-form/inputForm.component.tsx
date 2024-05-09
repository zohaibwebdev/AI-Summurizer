import React, { useState } from 'react'
import CustomInput from '../custom-input/input.component'

const InputForm = () => {
    const [link, setLink] = useState<string>('')
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLink(e.target.value)
    }
    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }
    return (
        <div>
            <form onSubmit={submitHandler}></form>
            <CustomInput
                placeholder="Enter Link Here"
                type="url"
                name="link"
                required
                changeEvent={handleChange}
                value={link}
            />
            <button type="submit">search</button>
        </div>
    )
}

export default InputForm
