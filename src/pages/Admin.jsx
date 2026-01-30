import React, { useState } from "react";
import ProductForm from "../admin/ProductsForm";
import ProductTable from "../admin/ProductTable";
import { Link } from "react-router-dom";

import "./admin.css";

function Admin() {
  const [editingProduct, setEditingProduct] = useState(null);
  const [refreshKey, setRefreshKey] = useState(0);

  const handleEdit = (product) => {
    setEditingProduct(product);
  };

  const handleRefresh = () => {
    setRefreshKey((prev) => prev + 1);
  };

  return (
    <>
      {/* ================= HEADER ================= */}
      <header className="main-header">
        <div className="header-container">

          {/* Logo */}
          <div className="logo">
            📱 Phone Shop
          </div>

          {/* Menu */}
          <nav className="nav-menu">
            <Link to="/">Trang chủ</Link>
            
          </nav>

        </div>
      </header>

      {/* ================= ADMIN CONTENT ================= */}
      <div className="container my-5 admin-page">

        <h1 className="text-center mb-5 admin-title">
          Quản Lý Sản Phẩm
        </h1>

        {/* FORM */}
        <div className="card shadow mb-5">
          <div className="card-body">
            <ProductForm
              onRefresh={handleRefresh}
              editingProduct={editingProduct}
            />
          </div>
        </div>

        {/* TABLE */}
        <div className="card shadow">
          <div className="card-body">
            <ProductTable
              key={refreshKey}
              onEdit={handleEdit}
            />
          </div>
        </div>

      </div>
    </>
  );
}

export default Admin;
