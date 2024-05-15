import LogoIcon from '../../icons/logo.icon'
import CustomButton from '../custom-button/custom-button.component'
import { CustomButtonTypes } from '../custom-button/custom-button.types'

const Navigation = () => {
    return (
        <div className="w-[100vw] px-10 py-3">
            <nav className="flex justify-between items-center">
                <LogoIcon />
                <CustomButton
                    onClick={() => window.open('https://github.com/zohaibwebdev', '_blank')}
                    type={CustomButtonTypes.PRIMARY}
                >
                    Github
                </CustomButton>
            </nav>
        </div>
    )
}

export default Navigation
