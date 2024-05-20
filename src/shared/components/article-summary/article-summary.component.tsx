import React from 'react'
import ArticleSummaryForm from './article-summary-form/article-summary-form.component'
import ArticleSummaryHistory from './article-summary-history/article-summary-history.component'
import ArticleSummaryDetail from './article-summary-detail/article-summary-detail.component'

const ArticleSummary = () => {
    return (
        <div className="mt-5 px-5">
            <ArticleSummaryForm />
            <ArticleSummaryHistory />
            <ArticleSummaryDetail />
        </div>
    )
}

export default ArticleSummary
