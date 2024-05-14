export interface InputPropsTypes {
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
