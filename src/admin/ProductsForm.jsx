import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../assets/css/Admin.css';

const BASE_URL = 'https://696e1a09d7bacd2dd715c0a3.mockapi.io/api/v1/phone';

function ProductForm({ onRefresh, editingProduct }) {
  const [formData, setFormData] = useState({
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
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (editingProduct) {
      setFormData({
        name: editingProduct.name || '',
        price: editingProduct.price ? editingProduct.price.toString() : '',
        screen: editingProduct.screen || '',
        backCamera: editingProduct.backCamera || '',
        frontCamera: editingProduct.frontCamera || '',
        img: editingProduct.img || '',
        desc: editingProduct.desc || '',
        type: editingProduct.type || '',
      });
      setIsEditing(true);
    } else {
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
      setIsEditing(false);
    }
  }, [editingProduct]);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    if (!formData.name || !formData.price || !formData.type) {
      setError('Tên, Giá, và Loại là bắt buộc!');
      return false;
    }
    const priceNum = parseFloat(formData.price.replace(/\./g, ''));
    if (isNaN(priceNum) || priceNum <= 0) {
      setError('Giá phải là số dương!');
      return false;
    }
    setError('');
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const submitData = {
      ...formData,
      price: parseFloat(formData.price.replace(/\./g, '')),
    };

    try {
      if (isEditing) {
        await axios.put(`${BASE_URL}/${editingProduct.id}`, submitData);
      } else {
        await axios.post(BASE_URL, submitData);
      }
      onRefresh();
      setIsEditing(false);
    } catch (err) {
      console.error('Lỗi khi lưu sản phẩm:', err);
      setError('Lỗi khi lưu - kiểm tra kết nối!');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="product-form">
      <input name="name" value={formData.name} onChange={handleInputChange} placeholder="Tên sản phẩm" required />
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
      <button type="submit">{isEditing ? 'Cập Nhật' : 'Thêm Sản Phẩm'}</button>
    </form>
  );
}

export default ProductForm;