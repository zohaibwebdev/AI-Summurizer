export interface InputPropsTypes {
    label?: string
    type?: 'url' | 'text' | 'email' | 'password' | 'number'
    placeholder?: string
    required?: boolean
    readonly?: boolean
    name?: string
    className?: string
    changeEvent?: (e: React.ChangeEvent<HTMLInputElement>) => void
    value?: string | number
    errorMessage?: string
}
