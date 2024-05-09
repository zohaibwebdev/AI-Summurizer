import { FC } from 'react'
interface InputPropsTypes {
    label?: string
    type?: 'url' | 'text' | 'email' | 'password' | 'number'
    placeholder?: string
    required?: boolean
    readonly?: boolean
    name?: string
    className?: string
    changeEvent?: (e: React.ChangeEvent<HTMLInputElement>) => void
    defaultValue?: string | number
    errorMessage?: string
    labelClasses?: string
}

const CustomInput: FC<InputPropsTypes> = ({
    label,
    type,
    placeholder,
    required,
    errorMessage,
    name,
    defaultValue,
    className,
    changeEvent,
    readonly,
    labelClasses,
}) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        changeEvent?.(e)
    }
    return (
        <div className="flex flex-col gap-1 items-center">
            {label && <label className={labelClasses}>{label}:</label>}
            <input
                name={name}
                type={type}
                defaultValue={defaultValue}
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
