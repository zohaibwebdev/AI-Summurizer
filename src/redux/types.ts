export interface IStore {
    loading: boolean
    error: string
    currentHistory: number
    history: Array<History>
}

interface History {
    url: string
    summary: string
}
