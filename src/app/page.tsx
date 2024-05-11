'use client'

import Navigation from '../shared/components/navigation/navigation.component'
import Header from '@/shared/components/header/header.component'
const page = () => {
    return (
        <div className="h-[100vh] max-w-7xl">
            <Navigation />
            <Header />
        </div>
    )
}

export default page
