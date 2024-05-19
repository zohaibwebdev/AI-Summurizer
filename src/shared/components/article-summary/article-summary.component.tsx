import React, { useState } from 'react'
import ArticleSummaryForm from './article-summary-form/article-summary-form.component'
import ArticleSummaryHistory from './article-summary-history/article-summary-history.component'
import ArticleSummaryDetail from './article-summary-detail/article-summary-detail.component'
import ArtilceSummaryService from '@/services/article-summary-services'
import ArticleSummaryLoader from './article-summary-loader/article-summary-loader.component'
import { IHistory } from './article-summary.types'

const ArticleSummary = () => {
    const [url, setUrl] = useState<string>('')
    const [loading, setLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState<string>('')
    const [history, setHistory] = useState<Array<IHistory>>([])
    const [summary, setSummary] = useState('')

    const fetchData = async () => {
        try {
            setSummary('')
            setLoading(true)
            const data = await ArtilceSummaryService.getSummary(url)
            const summary: string = data.summary
            setSummary(summary)
            setHistory(function (prev) {
                return [
                    ...prev,
                    {
                        url,
                        summary,
                    },
                ]
            })
        } catch (error) {
            setErrorMessage((error as Error).message)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="mt-5 px-5">
            <ArticleSummaryForm setUrl={setUrl} url={url} FetchData={fetchData} />
            <ArticleSummaryHistory history={history} setSummary={setSummary} />
            {loading && <ArticleSummaryLoader />}
            <ArticleSummaryDetail summary={summary} error={errorMessage} />
        </div>
    )
}

export default ArticleSummary
