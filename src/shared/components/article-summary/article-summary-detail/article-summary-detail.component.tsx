import React, { FC } from 'react'
import { ArticleSummaryDetailProps } from '../article-summary.types'
import Loader from '../../loader/loader.component'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux/store'

const ArticleSummaryDetail: FC<ArticleSummaryDetailProps> = () => {
    const { error, history, loading, currentHistory } = useSelector((state: RootState) => state.summary)

    const summary = history[currentHistory]?.summary

    return (
        <div className="my-10 max-w-full flex justify-center items-center">
            {error && (
                <div className="font-inter font-bold  text-center text-red-700">
                    <p>Error</p>
                    <p>{error}</p>
                </div>
            )}
            {loading && <Loader />}
            {summary && (
                <div className="flex flex-col gap-3">
                    <h2 className="font-satoshi font-bold text-gray-600 text-xl">
                        Article <span className="blue_gradient">Summary</span>
                    </h2>
                    <div className="summary_box">
                        <p className="font-inter font-medium text-sm text-gray-700">{summary}</p>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ArticleSummaryDetail
