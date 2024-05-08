import { FC, useState } from 'react'
import { InputPropsTypes } from '@/shared/types/input.types'

const CustomInput: FC<InputPropsTypes> = ({ label, type, placeholder, required }) => {
    const [value, setValue] = useState('')
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }
    return (
        <div>
            {label && <label>{label}:</label>}
            <input
                type={type}
                value={value}
                placeholder={placeholder}
                required={required}
                onChange={handleChange}
                className="outline-none border border-gray-500 text-xl p-1 rounded-md"
            />
        </div>
    )
}

export default CustomInput
