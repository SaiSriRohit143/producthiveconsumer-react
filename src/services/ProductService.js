import axios from 'axios';
//service later interacting with the product hive restapi of spirng boot using http library
const PRODUCTS_RESTAPI_URL = 'http://localhost:8088/producthive/api/products';
class ProductService {
    static getProducts(){
        return axios.get(PRODUCTS_RESTAPI_URL);

    }

}

export default ProductService;