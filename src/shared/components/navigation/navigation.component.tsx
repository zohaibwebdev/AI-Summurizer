import LogoIcon from '../../icons/logo.icon'
const Navigation = () => {
    return (
        <div className="w-[100vw] px-10 py-3">
            <nav className="flex justify-between items-center">
                <LogoIcon height={40} width={120} />
                <button
                    onClick={() => window.open('https://github.com/zohaibwebdev', '_blank')}
                    className="text-red-900"
                >
                    Github
                </button>
            </nav>
        </div>
    )
}

export default Navigation
