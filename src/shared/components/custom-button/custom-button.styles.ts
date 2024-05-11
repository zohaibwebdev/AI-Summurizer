import { CustomButtonTypes } from './custom-button.types'

const primaryButtonStyles = 'bg-gray-700 text-white'
const secondaryButtonStyles = 'bg-transparent border-gray-700 text-gray-700'
const blueButtonStyles = 'text-white bg-[#3948db]'
const lightButtonStyles = 'text-white bg-green-600'

export const defaultClass = 'px-3 py-2 border rounded-md text-lg mt-2 inline-block '

export const customButtonStyles = Object.freeze({
    [CustomButtonTypes.PRIMARY]: primaryButtonStyles,
    [CustomButtonTypes.SECONDARY]: secondaryButtonStyles,
    [CustomButtonTypes.BLUE]: blueButtonStyles,
    [CustomButtonTypes.LIGHT]: lightButtonStyles,
})
