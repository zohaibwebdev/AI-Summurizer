import { FC } from 'react'
import { InputPropsTypes } from '@/shared/types/input.types'

const CustomInput: FC<InputPropsTypes> = ({
    label,
    type,
    placeholder,
    required,
    errorMessage,
    name,
    value,
    className,
    changeEvent,
    readonly,
}) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        changeEvent?.(e)
    }
    return (
        <div>
            {label && <label>{label}:</label>}
            <input
                name={name}
                type={type}
                value={value}
                placeholder={placeholder}
                required={required}
                onChange={handleChange}
                className={className}
                readOnly={readonly}
            />
            {errorMessage && <div className="text-sm text-red-600 font-bold">{errorMessage}</div>}
        </div>
    )
}

export default CustomInput
