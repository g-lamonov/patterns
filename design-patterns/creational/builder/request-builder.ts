class Request {
  public url: string;
  public method: string;
  public payload: { [key: string]: string };

  constructor() {
    this.url = "";
    this.method = "";
    this.payload = {};
  }
}

export class RequestBuilder {
  private request: Request;

  constructor() {
    this.request = new Request();
  }

  forUrl(url) {
    this.request.url = url;
    return this;
  }

  useMethod(method) {
    this.request.method = method;
    return this;
  }

  payload(payload) {
    this.request.payload = payload;
    return this;
  }

  build() {
    return this.request;
  }
}
