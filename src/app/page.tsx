'use client'

import Navigation from '../shared/components/navigation/navigation.component'
import Header from '@/shared/components/header/header.component'
import Summary from '@/shared/components/summary/summary.component'

const HomePage = () => {
    return (
        <div className="h-[100vh] max-w-7xl">
            <Navigation />
            <Header />
            <Summary />
        </div>
    )
}

export default HomePage
