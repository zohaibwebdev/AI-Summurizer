export interface HistoryProps {
    history: Array<HistoryObject>
    setSummary: (summary: string) => void
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
    FetchData: () => Promise<void>
}

export interface IHistory {
    url: string
    summary: string
}
