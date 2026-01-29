import { useEffect, useState } from "react";

import ProductCard from "./ProductCard";
import BrandFilter from "./BrandFilter";

import phones from "../data/phones";

import "./Product.css";

function ProductList() {
  const [list, setList] = useState([]);
  const [brand, setBrand] = useState("all");

  useEffect(() => {
    setList(phones);
  }, []);

  const filteredList =
    brand === "all"
      ? list
      : list.filter((item) => item.brand === brand);

  return (
    <>
      {/* Bộ lọc */}
      <BrandFilter current={brand} onChange={setBrand} />

      {/* Danh sách sản phẩm */}
      <div className="product-list">
        {filteredList.map((item) => (
          <ProductCard key={item.id} phone={item} />
        ))}
      </div>
    </>
  );
}

export default ProductList;
