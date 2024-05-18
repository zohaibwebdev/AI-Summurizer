import { httpClient } from './http-client'

const API = 'https://article-extractor-and-summarizer.p.rapidapi.com'
const headers = {
    'X-RapidAPI-Key': '77f6592570msh4b0281d5ec32d52p19edc7jsnb5264e06ebe4',
    'X-RapidAPI-Host': 'article-extractor-and-summarizer.p.rapidapi.com',
}
enum SummurizeEndpoints {
    SUMMARY = '/summarize?url=',
}

class ArtilceSummaryService {
    static async getSummary(url: string) {
        const searchApi = `${API}${SummurizeEndpoints.SUMMARY}${encodeURIComponent(url)}`
        const summary = httpClient.get(searchApi, headers)
        return summary
    }
}

export default ArtilceSummaryService
