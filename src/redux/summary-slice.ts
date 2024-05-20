import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { IStore } from './types'
import ArtilceSummaryService from '@/services/article-summary-services'

const initialState: IStore = {
    currentHistory: -1,
    history: [],
    loading: false,
    error: '',
}

export const fetchArticleSummary = createAsyncThunk(
    'summary/fetchArticleSummary',
    async (inputUrl: string, { rejectWithValue }) => {
        try {
            const { summary = '', message = '' } = await ArtilceSummaryService.getSummary(inputUrl)
            return { summary, message, url: inputUrl }
        } catch (error) {
            return rejectWithValue((error as Error).message)
        }
    },
)

const summarySlice = createSlice({
    name: 'summary',
    initialState,
    reducers: {
        setSummary(state, action: PayloadAction<number>) {
            state.currentHistory = action.payload
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleSummary.pending, (state) => {
                state.loading = true
                state.error = ''
                state.currentHistory = -1
            })
            .addCase(fetchArticleSummary.fulfilled, (state, action) => {
                const { summary, message, url } = action.payload
                state.history.push({ url, summary })
                state.currentHistory = state.history.length
                state.loading = false
                state.error = message
            })
            .addCase(fetchArticleSummary.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload as string
            })
    },
})

export const { setSummary } = summarySlice.actions
export default summarySlice.reducer
