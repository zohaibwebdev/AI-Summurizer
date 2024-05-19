export interface IArticleSummaryContext {
    loading: boolean
    error: string
    currentHistory: number
    history: Array<History>
    getSummary: (url: string) => Promise<void>
    setSummary: (index: number) => void
}

interface History {
    url: string
    summary: string
}

export const defaultValuesArticleContext: IArticleSummaryContext = {
    currentHistory: -1,
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
