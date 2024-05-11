import { CustomButtonTypes } from './custom-button.types'

export const buttonStyles = 'px-3 py-2 border rounded-md text-lg mt-2 inline-block '

export const customButtonStyles = Object.freeze({
    [CustomButtonTypes.PRIMARY]: 'bg-gray-700 text-white',
    [CustomButtonTypes.SECONDARY]: 'bg-transparent border-gray-700 text-gray-700',
    [CustomButtonTypes.BLUE]: 'text-white bg-[#3948db]',
    [CustomButtonTypes.LIGHT]: 'text-white bg-green-600',
})
