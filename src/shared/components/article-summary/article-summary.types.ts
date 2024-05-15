export interface HistoryProps {
    history: Array<string>
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
