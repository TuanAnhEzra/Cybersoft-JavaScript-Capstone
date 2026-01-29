import React, { useState } from 'react';
import axios from 'axios';
import '../assets/css/Admin.css';

const BASE_URL = 'https://696e1a09d7bacd2dd715c0a3.mockapi.io/api/v1/phone';

function ProductForm({ onRefresh, editingProduct }) {
  const [formData, setFormData] = useState(editingProduct || {
    name: '',
    price: '',
    screen: '',
    backCamera: '',
    frontCamera: '',
    img: '',
    desc: '',
    type: '',
  });
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    if (!formData.name || !formData.price || !formData.type) {
      setError('Tên, Giá, và Loại (Type) là bắt buộc!');
      return false;
    }
    if (isNaN(formData.price) || formData.price <= 0) {
      setError('Giá phải là số dương!');
      return false;
    }
    setError('');
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      if (editingProduct?.id) {
        await axios.put(`${BASE_URL}/${editingProduct.id}`, formData);
      } else {
        await axios.post(BASE_URL, formData);
      }
      setFormData({
        name: '',
        price: '',
        screen: '',
        backCamera: '',
        frontCamera: '',
        img: '',
        desc: '',
        type: '',
      });
      onRefresh();
    } catch (err) {
      console.error('Lỗi khi lưu sản phẩm:', err);
      setError('Lỗi khi lưu - kiểm tra kết nối hoặc dữ liệu!');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="product-form">
      <input name="name" value={formData.name} onChange={handleInputChange} placeholder="Tên sản phẩm (name)" required />
      <input name="price" value={formData.price} onChange={handleInputChange} placeholder="Giá (price)" type="number" required />
      <input name="screen" value={formData.screen} onChange={handleInputChange} placeholder="Màn hình (screen)" />
      <input name="backCamera" value={formData.backCamera} onChange={handleInputChange} placeholder="Camera sau (backCamera)" />
      <input name="frontCamera" value={formData.frontCamera} onChange={handleInputChange} placeholder="Camera trước (frontCamera)" />
      <input name="img" value={formData.img} onChange={handleInputChange} placeholder="URL hình ảnh (img)" />
      <input name="desc" value={formData.desc} onChange={handleInputChange} placeholder="Mô tả (desc)" />
      <select name="type" value={formData.type} onChange={handleInputChange} required>
        <option value="">Chọn loại (type)</option>
        <option value="Iphone">Iphone</option>
        <option value="Samsung">Samsung</option>
        <option value="OPPO">OPPO</option>
        <option value="Xiaomi">Xiaomi</option>
      </select>
      {error && <p className="error">{error}</p>}
      <button type="submit">{editingProduct ? 'Cập Nhật' : 'Thêm Sản Phẩm'}</button>
    </form>
  );
}

export default ProductForm;