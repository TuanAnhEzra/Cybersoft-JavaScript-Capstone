import React, { useState } from 'react';
import ProductForm from '../admin/ProductsForm';
import ProductTable from '../admin/ProductTable';
import { Link } from 'react-router-dom';

function Admin() {
  const [editingProduct, setEditingProduct] = useState(null);
  const [refreshKey, setRefreshKey] = useState(0);

  const handleEdit = (product) => {
    setEditingProduct(product);
  };

  const handleRefresh = () => {
    setRefreshKey(prev => prev + 1);
  };

  return (
    <div className="container my-5">
      <Link to="/" className="text-blue-600 hover:underline mb-4 inline-block">Home</Link>
      <h1 className="text-center mb-5 text-primary">Quản Lý Sản Phẩm</h1>
      <div className="card shadow mb-5">
        <div className="card-body">
          <ProductForm onRefresh={handleRefresh} editingProduct={editingProduct} />
        </div>
      </div>
      <div className="card shadow">
        <div className="card-body">
          <ProductTable key={refreshKey} onEdit={handleEdit} />
        </div>
      </div>
    </div>
  );
}

export default Admin;