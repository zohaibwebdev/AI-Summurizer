import { FC, useState } from 'react'
import { HistoryProps } from '../article-summary.types'
import CopyIcon from '@/shared/icons/copy.icon'
import TickIcon from '@/shared/icons/tick.icon'

const ArticleSummaryHistory: FC<HistoryProps> = ({ history, setSummary }) => {
    const [copy, setCopy] = useState('')

    const handleCopy = (url: string) => {
        setCopy(url)
        navigator.clipboard.writeText(url)
        setTimeout(() => setCopy(''), 3000)
    }

    return (
        <div className="flex flex-col gap-1 max-h-60 overflow-y-auto">
            {history.map((item) => (
                <div key={item.url} className="relative">
                    <div className="p-3 flex justify-start items-center flex-row bg-white border border-gray-200 gap-3 rounded-lg cursor-pointer">
                        <div
                            className="w-7 h-7 rounded-full bg-white/10 shadow-[inset_10px_-50px_94px_0_rgb(199,199,199,0.2)] backdrop-blur flex justify-center items-center cursor-pointer"
                            onClick={() => handleCopy(item.url)}
                        >
                            {copy === item.url ? <TickIcon /> : <CopyIcon />}
                        </div>
                        <p
                            onClick={() => setSummary(item.summary)}
                            className="flex-1 font-satoshi text-blue-700 font-medium text-sm truncate"
                        >
                            {item.url}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ArticleSummaryHistory
