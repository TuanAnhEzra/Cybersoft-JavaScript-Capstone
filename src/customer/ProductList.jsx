import { useEffect, useState } from "react";
import axios from "axios";

import ProductCard from "./ProductCard";
import BrandFilter from "./BrandFilter";

import "../assets/css/Product.css";

const BASE_URL = "https://696e1a09d7bacd2dd715c0a3.mockapi.io/api/v1/phone";

function ProductList() {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [brand, setBrand] = useState("all");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await axios.get(BASE_URL);
        setList(response.data);
      } catch (error) {
        console.error("Lỗi khi lấy danh sách sản phẩm:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filteredList =
    brand === "all"
      ? list
      : list.filter((item) => item.brand?.toLowerCase() === brand.toLowerCase());

  if (loading) return <div className="text-center py-10">Đang tải sản phẩm...</div>;

  return (
    <>
      <BrandFilter current={brand} onChange={setBrand} />

      <div className="product-list">
        {filteredList.length === 0 ? (
          <p className="text-center text-gray-500 py-10">Không tìm thấy sản phẩm nào.</p>
        ) : (
          filteredList.map((item) => (
            <ProductCard key={item.id} phone={item} />
          ))
        )}
      </div>
    </>
  );
}

export default ProductList;