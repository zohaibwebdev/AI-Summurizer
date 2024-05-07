import { logo } from '../../../shared/assets'
import Image from 'next/image'
const Navigation = () => {
    return (
        <div className="w-[100vw] px-10 py-3">
            <nav className="flex justify-between items-center">
                <Image src={logo} width={100} height={100} alt="logo" />
                <button onClick={() => window.open('https://github.com/zohaibwebdev', '_blank')}>Github</button>
            </nav>
        </div>
    )
}

export default Navigation
