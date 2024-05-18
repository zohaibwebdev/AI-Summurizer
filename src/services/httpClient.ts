const headersConf = {
    'Content-Type': 'application/json',
}

const httpMethods = Object.freeze({
    GET: 'GET',
    POST: 'POST',
    UPDATE: 'UPDATE',
    DELETE: 'DELETE',
})

export class httpClient {
    static async get(apiPath: string, headers?: Record<string, string>) {
        const response = await fetch(apiPath, {
            method: httpMethods.GET,
            headers: {
                ...headersConf,
                ...headers,
            },
        })
        const responseObject = await response.json()
        return responseObject
    }

    static async post<T>(apiPath: string, body: T, headers?: Record<string, string>) {
        const response = await fetch(apiPath, {
            method: httpMethods.POST,
            headers: {
                ...headersConf,
                ...headers,
            },
            body: JSON.stringify(body),
        })
        const responseObject = await response.json()
        return responseObject
    }
}
