import { httpClient } from './http-client'

const API = 'https://article-extractor-and-summarizer.p.rapidapi.com'
const headers = {
    'X-RapidAPI-Key': '49b9c8c25amsh8c31d47f34f8e0cp1079f6jsnb45d5193ef41',
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
