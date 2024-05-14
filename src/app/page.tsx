'use client'

import History from '@/shared/components/history/history.component'
import Navigation from '../shared/components/navigation/navigation.component'
import Header from '@/shared/components/header/header.component'

const HomePage = () => {
    return (
        <div className="h-[100vh] max-w-7xl">
            <Navigation />
            <Header />
            <History />
        </div>
    )
}

export default HomePage
