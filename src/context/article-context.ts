import { createContext, useContext } from 'react'
import { IArticleSummaryContext, defaultValuesArticleContext } from './article-interfaces'

const ArticleContext = createContext<IArticleSummaryContext>(defaultValuesArticleContext)

export const ArticleContextProvider = ArticleContext.Provider

export const useArticleContext = () => useContext(ArticleContext)
