export interface IArticleSummaryContext {
    loading: boolean
    error: string
    summary: string
    history: Array<History>
    getSummary: (url: string) => Promise<void>
    setSummary: (summary: string) => void
}

interface History {
    url: string
    summary: string
}

export const defaultValuesArticleContext: IArticleSummaryContext = {
    summary: '',
    history: [],
    getSummary: function (): Promise<void> {
        throw new Error('Function not implemented.')
    },
    loading: false,
    error: '',
    setSummary: function (): void {
        throw new Error('Function not implemented.')
    },
}
