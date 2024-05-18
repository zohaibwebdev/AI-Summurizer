'use client'

import Navigation from '../shared/components/navigation/navigation.component'
import Header from '@/shared/components/header/header.component'
import ArticleSummary from '@/shared/components/article-summary/article-summary.component'

const HomePage = () => {
    return (
        <div className="h-[100vh] max-w-7xl">
            <Navigation />
            <Header />
            <ArticleSummary />
        </div>
    )
}

export default HomePage
