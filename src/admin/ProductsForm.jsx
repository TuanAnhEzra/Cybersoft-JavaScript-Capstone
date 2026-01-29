import React, { useState } from 'react';
import axios from 'axios';
import '../assets/css/Admin.css';

const BASE_URL = 'https://696e1a09d7bacd2dd715c0a3.mockapi.io/api/v1/phone';

function ProductForm({ onRefresh, editingProduct }) {
  const [formData, setFormData] = useState(editingProduct || {
    name: '',
    price: '',
    chip: '',
    ram: '',
    camera: '',
    image: '',
    brand: '',
  });
  const [error, setError] = useState('');
  const [editingId, setEditingId] = useState(editingProduct ? editingProduct.id : null);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    if (!formData.name || !formData.price || !formData.brand) {
      setError('Tên, Giá, và Thương Hiệu là bắt buộc!');
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
      if (editingId) {
        await axios.put(`${BASE_URL}/${editingId}`, formData);
      } else {
        await axios.post(BASE_URL, formData);
      }
      setFormData({
        name: '',
        price: '',
        chip: '',
        ram: '',
        camera: '',
        image: '',
        brand: '',
      });
      setEditingId(null);
      onRefresh();
    } catch (err) {
      console.error('Lỗi khi lưu sản phẩm:', err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="product-form">
      <input name="name" value={formData.name} onChange={handleInputChange} placeholder="Tên sản phẩm" />
      <input name="price" value={formData.price} onChange={handleInputChange} placeholder="Giá (đ)" type="number" />
      <input name="chip" value={formData.chip} onChange={handleInputChange} placeholder="Chip" />
      <input name="ram" value={formData.ram} onChange={handleInputChange} placeholder="RAM" />
      <input name="camera" value={formData.camera} onChange={handleInputChange} placeholder="Camera" />
      <input name="image" value={formData.image} onChange={handleInputChange} placeholder="URL hình ảnh" />
      <select name="brand" value={formData.brand} onChange={handleInputChange}>
        <option value="">Chọn thương hiệu</option>
        <option value="iphone">iPhone</option>
        <option value="samsung">Samsung</option>
        <option value="oppo">OPPO</option>
        <option value="xiaomi">Xiaomi</option>
      </select>
      {error && <p className="error">{error}</p>}
      <button type="submit">{editingId ? 'Cập Nhật' : 'Thêm Sản Phẩm'}</button>
    </form>
  );
}

export default ProductForm;