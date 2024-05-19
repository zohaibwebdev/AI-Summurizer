import React, { FC, PropsWithChildren, useState } from 'react'
import { IArticleSummaryContext, defaultValuesArticleContext } from './article-interfaces'
import { ArticleContextProvider } from './article-context'
import ArtilceSummaryService from '@/services/article-summary-services'

const ArticleSummaryContextProvider: FC<PropsWithChildren> = ({ children }) => {
    const [state, setState] = useState<IArticleSummaryContext>(defaultValuesArticleContext)

    const getSummary = async (inputUrl: string): Promise<void> => {
        console.log('get summmary')
        try {
            setState(function (prev) {
                return {
                    ...prev,
                    loading: true,
                }
            })
            const { summary = '', message = '' } = await ArtilceSummaryService.getSummary(inputUrl)
            if (summary) {
                setState(function (prevState) {
                    return {
                        ...prevState,
                        url: inputUrl,
                        summary,
                        history: [
                            ...prevState.history,
                            {
                                url: inputUrl,
                                summary,
                            },
                        ],
                        loading: false,
                    }
                })
            }

            if (message) {
                setState(function (prevState) {
                    return {
                        ...prevState,
                        url: inputUrl,
                        loading: false,
                        error: message,
                    }
                })
            }
        } catch (error) {
            setState((prev) => ({
                ...prev,
                error: (error as Error).message,
                loading: false,
            }))
        }
    }

    const setSummary = (summary: string) => {
        setState(function (prev) {
            return {
                ...prev,
                summary,
            }
        })
    }

    console.log(state.summary)
    return <ArticleContextProvider value={{ ...state, getSummary, setSummary }}>{children}</ArticleContextProvider>
}

export default ArticleSummaryContextProvider
