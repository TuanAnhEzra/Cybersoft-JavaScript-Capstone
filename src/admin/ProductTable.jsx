import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../assets/css/Admin.css';

const BASE_URL = 'https://696e1a09d7bacd2dd715c0a3.mockapi.io/api/v1/phone';

function ProductTable({ onEdit }) {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await axios.get(BASE_URL);
      setProducts(response.data);
      setLoading(false);
    } catch (err) {
      console.error('Lỗi khi lấy sản phẩm:', err);
    }
  };

  const deleteProduct = async (id) => {
    try {
      await axios.delete(`${BASE_URL}/${id}`);
      fetchProducts();
    } catch (err) {
      console.error('Lỗi khi xóa sản phẩm:', err);
    }
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSort = () => {
    const newOrder = sortOrder === 'asc' ? 'desc' : 'asc';
    setSortOrder(newOrder);
  };

  const filteredProducts = products
    .filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => sortOrder === 'asc' ? a.price - b.price : b.price - a.price);

  if (loading) return <div className="text-center py-10">Đang tải sản phẩm...</div>;

  return (
    <>
      {/* Search and Sort */}
      <div className="controls">
        <input type="text" placeholder="Tìm kiếm theo tên..." onChange={handleSearch} value={searchTerm} />
        <button onClick={handleSort}>Sắp Xếp Giá ({sortOrder === 'asc' ? 'Tăng' : 'Giảm'})</button>
      </div>

      {/* Product Table */}
      <table className="product-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Tên (name)</th>
            <th>Giá (price)</th>
            <th>Loại (type)</th>
            <th>Mô tả (desc)</th>  {/* Optional: add more if you want */}
            <th>Hành Động</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map(product => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.price.toLocaleString()} đ</td>
              <td>{product.type}</td>
              <td>{product.desc}</td>  {/* Optional */}
              <td>
                <button onClick={() => onEdit(product)}>Sửa</button>
                <button onClick={() => deleteProduct(product.id)}>Xóa</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default ProductTable;