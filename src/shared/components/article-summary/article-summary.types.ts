export interface HistoryProps {
    history: Array<HistoryObject>
}

interface HistoryObject {
    url: string
    summary: string
}

export interface ArticleSummaryDetailProps {
    loading?: boolean
    summary?: string
    error?: string
}

export interface ArticleSummaryFormProps {
    url: string
    setUrl: (url: string) => void
    FetchDataFromApi: (url: string) => Promise<void>
}
