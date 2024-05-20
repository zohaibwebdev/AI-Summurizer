'use client'

import Navigation from '../shared/components/navigation/navigation.component'
import Header from '@/shared/components/header/header.component'
import ArticleSummary from '@/shared/components/article-summary/article-summary.component'
import store from '@/redux/store'
import { Provider } from 'react-redux'

const HomePage = () => {
    return (
        <div className="h-[100vh] max-w-7xl">
            <Provider store={store}>
                <Navigation />
                <Header />
                <ArticleSummary />
            </Provider>
        </div>
    )
}

export default HomePage
