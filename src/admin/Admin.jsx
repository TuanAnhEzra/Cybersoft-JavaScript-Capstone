import React, { useState, useEffect } from 'react';
import { getProducts, addProduct, updateProduct, deleteProduct } from '../services/API';
import { Product } from '../models/Product';

const Admin = () => {
    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortOrder, setSortOrder] = useState('asc');  // 'asc' or 'desc'
    const [formData, setFormData] = useState(new Product('', '', '', '', '', '', '', '', ''));
    const [editingId, setEditingId] = useState(null);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        const data = await getProducts();
        setProducts(data);
    };

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSort = () => {
        const newOrder = sortOrder === 'asc' ? 'desc' : 'asc';
        setSortOrder(newOrder);
        const sorted = [...products].sort((a, b) => newOrder === 'asc' ? a.price - b.price : b.price - a.price);
        setProducts(sorted);
    };

    const filteredProducts = products.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()));

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validateForm = () => {
        // Basic validation: Check required fields
        if (!formData.name || !formData.price || !formData.type) {
            alert('Name, Price, and Type are required!');
            return false;
        }
        if (isNaN(formData.price)) {
            alert('Price must be a number!');
            return false;
        }
        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        if (editingId) {
            await updateProduct(editingId, formData);
            setEditingId(null);
        } else {
            await addProduct(formData);
        }
        setFormData(new Product('', '', '', '', '', '', '', '', ''));
        fetchProducts();
    };

    const editProduct = (product) => {
        setFormData(product);
        setEditingId(product.id);
    };

    const removeProduct = async (id) => {
        await deleteProduct(id);
        fetchProducts();
    };

    return (
        <div className="container">
            <h1>Admin Panel</h1>
            {/* Form for add/edit */}
            <form onSubmit={handleSubmit}>
                <input name="name" value={formData.name} onChange={handleInputChange} placeholder="Name" required />
                <input name="price" value={formData.price} onChange={handleInputChange} placeholder="Price" required />
                <input name="screen" value={formData.screen} onChange={handleInputChange} placeholder="Screen" />
                <input name="backCamera" value={formData.backCamera} onChange={handleInputChange} placeholder="Back Camera" />
                <input name="frontCamera" value={formData.frontCamera} onChange={handleInputChange} placeholder="Front Camera" />
                <input name="img" value={formData.img} onChange={handleInputChange} placeholder="Image URL" />
                <input name="desc" value={formData.desc} onChange={handleInputChange} placeholder="Description" />
                <select name="type" value={formData.type} onChange={handleInputChange} required>
                    <option value="">Select Type</option>
                    <option value="Samsung">Samsung</option>
                    <option value="Iphone">iPhone</option>
                </select>
                <button type="submit">{editingId ? 'Update' : 'Add'} Product</button>
            </form>

            {/* Search and Sort */}
            <input type="text" placeholder="Search by name" onChange={handleSearch} />
            <button onClick={handleSort}>Sort by Price ({sortOrder.toUpperCase()})</button>

            {/* Product Table */}
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Type</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredProducts.map(product => (
                        <tr key={product.id}>
                            <td>{product.name}</td>
                            <td>${product.price}</td>
                            <td>{product.type}</td>
                            <td>
                                <button onClick={() => editProduct(product)}>Edit</button>
                                <button onClick={() => removeProduct(product.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Admin;