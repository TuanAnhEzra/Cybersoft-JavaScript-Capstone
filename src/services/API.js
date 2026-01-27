import axios from 'axios';

const BASE_URL = 'https://696e1a09d7bacd2dd715c0a3.mockapi.io/api/v1/phone';

export const getProducts = async () => {
    const response = await axios.get(BASE_URL);
    return response.data.map(p => new Product(p.id, p.name, p.price, p.screen, p.backCamera, p.frontCamera, p.img, p.desc, p.type));
};

export const addProduct = async (product) => {
    return await axios.post(BASE_URL, product);
};

export const updateProduct = async (id, product) => {
    return await axios.put(`${BASE_URL}/${id}`, product);
};

export const deleteProduct = async (id) => {
    return await axios.delete(`${BASE_URL}/${id}`);
};