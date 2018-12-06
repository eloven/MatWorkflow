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
    static fetch(url: string, options?: Options) {
        if (options) {
            return window.fetch(url, options);
        } else {
            return window.fetch(url);
        }
    }

    static fetchHtml(url: string) {
        window.fetch(url).then(response => {
            return response.text();
        }).then((body) => {
            document.body.innerHTML = body;
        });
    }

    static fetchJson(url: string) {
        window.fetch(url).then(response => {
            return response.json();
        }).then(json => {
            console.log(json);
        }).catch(err => {
            console.error(err);
        });
    }

    static fetchMetadata(url: string) {
        window.fetch(url).then(response => {
            console.log(response.headers.get('Content-Type'));
            console.log(response.headers.get('Date'));
            console.log(response.status);
            console.log(response.statusText);
        });
    }

    static postForm(url: string, data: FormData) {
        window.fetch(url, {
            method: 'POST',
            body: data
        }).then(response => {
            console.log(response);
        });
    }

    static postJson(url: string, data: Object) {
        try {
            const _body = JSON.stringify(data);
            window.fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: _body
            });
        } catch (error) {
            console.error(error);
            // expected output: SyntaxError: unterminated string literal
            // Note - error messages will vary depending on browser
        }
    }

    static checkStatus(response) {
        if (response.status >= 200 && response.status < 300) {
          return response;
        } else {
          const error = new Error(response.statusText);
          error.response = response;
          throw error;
        }
      }
}
