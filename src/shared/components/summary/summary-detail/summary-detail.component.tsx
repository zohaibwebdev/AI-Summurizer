import React, { FC } from 'react'
import { SummaryDetailProps } from '../summary.types'
import LoaderIcon from '@/shared/icons/loader.icon'

const SummaryDetail: FC<SummaryDetailProps> = ({ loading, summary, error }) => {
    return (
        <div className="my-10 max-w-full flex justify-center items-center">
            {loading ? (
                <LoaderIcon />
            ) : error ? (
                <p className="font-inter font-bold text-black text-center">{error}</p>
            ) : (
                summary && (
                    <div className="flex flex-col gap-3">
                        <h2 className="font-satoshi font-bold text-gray-600 text-xl">
                            Article <span className="blue_gradient">Summary</span>
                        </h2>
                        <div className="summary_box">
                            <p className="font-inter font-medium text-sm text-gray-700">{summary}</p>
                        </div>
                    </div>
                )
            )}
        </div>
    )
}

export default SummaryDetail
