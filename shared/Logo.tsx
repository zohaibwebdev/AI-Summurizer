import Image from 'next/image'
import { logo } from './assets'
const Logo = () => {
    return <Image src={logo} width={100} height={100} alt="logo" />
}

export default Logo
