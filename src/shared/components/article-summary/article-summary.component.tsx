import React from 'react'
import ArticleSummaryForm from './article-summary-form/article-summary-form.component'
import ArticleSummaryHistory from './article-summary-history/article-summary-history.component'
import ArticleSummaryDetail from './article-summary-detail/article-summary-detail.component'

const history = ['www.google.com', 'www.facebook.com', 'www.awais.com']
const loading = false
const summary = 'summary'
const errorMessage = 'error'
const Summary = () => {
    return (
        <div className="mt-5 px-5">
            <ArticleSummaryForm />
            <ArticleSummaryHistory history={history} />
            <ArticleSummaryDetail loading={loading} summary={summary} error={errorMessage} />
        </div>
    )
}

export default Summary
