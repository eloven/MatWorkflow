import 'whatwg-fetch';

interface Options {
    method: string;
    body: any;
    headers?: any;
}

export class Fetch {
    constructor() { }

    /**
     * fetch
     * @param url string
     * @param options json
     */
    static fetch(url: string, options?: Options): Promise<any> {
        if (options) {
            return window.fetch(url, options);
        } else {
            return window.fetch(url);
        }
    }

    static fetchHtml(url: string) {
        return window.fetch(url).then(response => {
            response.text();
        });
    }

    static fetchJson(url: string) {
        return window.fetch(url).then(response => {
            response.json();
        });
    }

    static fetchMetadata(url: string) {
        return window.fetch(url).then(response => {
            console.log(response.headers.get('Content-Type'));
            console.log(response.headers.get('Date'));
            console.log(response.status);
            console.log(response.statusText);
        });
    }

    static postForm(url: string, data: FormData) {
        return window.fetch(url, {
            method: 'POST',
            body: data
        });
    }

    static postJson(url: string, data: Object) {
        return window.fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
    }

    static checkStatus(response) {
        if (response.status >= 200 && response.status < 300) {
          return response;
        } else {
          const error = new Error(response.statusText);
          throw error;
        }
      }
}
