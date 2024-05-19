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
                    currentHistory: -1,
                }
            })
            const { summary = '', message = '' } = await ArtilceSummaryService.getSummary(inputUrl)

            setState(function (prevState) {
                return {
                    ...prevState,
                    url: inputUrl,
                    error: message,
                    loading: false,
                    history: [
                        ...prevState.history,

                        {
                            url: inputUrl,
                            summary,
                        },
                    ],
                    currentHistory: prevState.history.length,
                }
            })
        } catch (error) {
            setState((prev) => ({
                ...prev,
                error: (error as Error).message,
                loading: false,
            }))
        }
    }

    const setSummary = (currentHistory: number) => {
        setState(function (prev) {
            return {
                ...prev,
                currentHistory,
            }
        })
    }

    return <ArticleContextProvider value={{ ...state, getSummary, setSummary }}>{children}</ArticleContextProvider>
}

export default ArticleSummaryContextProvider
