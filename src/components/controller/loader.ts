const enum ErrorStatus {
  err401 = 401,
  err404 = 404
}

class Loader {
  constructor(
    private baseLink: string,
    private options: { apiKey: string },
  ) {}

  getResp<Type>(
    { endpoint, options = {} }: { endpoint: string, options?: { sources?: string}},
    callback: (data: Type) => void = () => {
      console.error("No callback for GET response");
    }
  ) {
    this.load("GET", endpoint, callback, options);
  }

  errorHandler(res: Response) {
    if (!res.ok) {
      if (res.status === ErrorStatus.err401 || res.status === ErrorStatus.err401)
        console.log(
          `Sorry, but there is ${res.status} error: ${res.statusText}`
        );
      throw Error(res.statusText);
    }

    return res;
  }

  makeUrl(options: { sources?: string }, endpoint: string) {
    const urlOptions: { [key: string]: string} = { ...this.options, ...options };
    let url = `${this.baseLink}${endpoint}?`;

    Object.keys(urlOptions).forEach((key) => {
      url += `${key}=${urlOptions[key]}&`;
    });

    return url.slice(0, -1);
  }

  load<Type>(
    method: string,
    endpoint: string,
    callback: (data: Type) => void,
    options: { sources?: string } = {}
  ) {
    fetch(this.makeUrl(options, endpoint), { method })
      .then(this.errorHandler)
      .then((res) => res.json())
      .then((data) => callback(data))
      .catch((err) => console.error(err));
  }
}

export default Loader;
