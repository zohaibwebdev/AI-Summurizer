import Logo from '../../../shared/Logo'
const Navigation = () => {
    return (
        <div className="w-[100vw] px-10 py-3">
            <nav className="flex justify-between items-center">
                <Logo />
                <button onClick={() => window.open('https://github.com/zohaibwebdev', '_blank')}>Github</button>
            </nav>
        </div>
    )
}

export default Navigation
