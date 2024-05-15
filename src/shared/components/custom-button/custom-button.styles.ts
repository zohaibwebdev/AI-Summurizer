import { CustomButtonTypes } from './custom-button.types'

export const customButtonStyles = Object.freeze({
    [CustomButtonTypes.PRIMARY]: 'bg-gray-700 text-white px-3 py-2 border rounded-md text-lg mt-2 inline-block',
    [CustomButtonTypes.SECONDARY]:
        'bg-transparent border-gray-700 text-gray-700 px-3 py-2 border rounded-md text-lg mt-2 inline-block',
    [CustomButtonTypes.BLUE]: 'text-white bg-[#3948db] px-3 py-2 border rounded-md text-lg mt-2 inline-block',
    [CustomButtonTypes.LIGHT]: 'text-white bg-green-600 px-3 py-2 border rounded-md text-lg mt-2 inline-block',
    [CustomButtonTypes.SUBMIT]:
        'hover:border-gray-700 hover:text-gray-700 absolute inset-y-0 right-0 my-1.5 mr-1.5 flex w-10 items-center justify-center rounded border border-gray-200 font-sans text-sm font-medium text-gray-400 peer-focus:border-gray-700 peer-focus:text-gray-700 peer',
})
