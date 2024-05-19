'use client'

import Navigation from '../shared/components/navigation/navigation.component'
import Header from '@/shared/components/header/header.component'
import ArticleSummary from '@/shared/components/article-summary/article-summary.component'
import ArticleSummaryContextProvider from '@/context/article-context-container'

const HomePage = () => {
    return (
        <ArticleSummaryContextProvider>
            <div className="h-[100vh] max-w-7xl">
                <Navigation />
                <Header />
                <ArticleSummary />
            </div>
        </ArticleSummaryContextProvider>
    )
}

export default HomePage
