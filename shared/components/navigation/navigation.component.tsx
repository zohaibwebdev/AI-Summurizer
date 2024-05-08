import LogoIcon from '../../icons/logo.icon'
const Navigation = () => {
    return (
        <div className="w-[100vw] px-10 py-3 text-red-700">
            <h1 className="text-purple-600">hello</h1>
            <nav className="flex justify-between items-center">
                <h1 className="text-green-700">inside flex</h1>
                <LogoIcon height={130} width={120} />
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
