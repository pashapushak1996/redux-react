export class ProductService {
    constructor(httpClient) {
        this.api = httpClient;
        this.baseURL = `https://fakestoreapi.com/products`;
    }

    getProducts() {
        return this.api.get(this.baseURL)
    }
}