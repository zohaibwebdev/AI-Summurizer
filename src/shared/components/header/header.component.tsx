import React from 'react'

const Header = () => {
    return (
        <header className="max-w-screen-md mx-auto mt-14">
            <h1 className="text-4xl capitalize text-center mb-6 text-gray-800 font-bold">
                Summarize Articles with <br className="max-md:hidden" />
                <span className="bg-gradient-to-r from-orange-600 via-purple-800 to-indigo-400 bg-clip-text text-transparent">
                    OpenAI GPT-4
                </span>
            </h1>
            <h2 className="text-center font-semibold leading-4 text-gray-600">
                Simplify your reading with Summize, an open-source article summarizer that transforms lengthy articles
                into clear and concise summaries
            </h2>
        </header>
    )
}

export default Header
